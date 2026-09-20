(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var stored = localStorage.getItem('theme');

  function applyTheme(theme) {
    var isLight = theme === 'light';
    root.setAttribute('data-theme', theme);
    toggle.setAttribute('aria-pressed', String(isLight));
    document.querySelector('meta[name="theme-color"]').setAttribute('content', isLight ? '#f7f4f8' : '#0d0c12');
  }

  applyTheme(stored || 'dark');

  toggle.addEventListener('click', function () {
    var isLight = root.getAttribute('data-theme') === 'light';
    var next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });
})();

(function () {
  var button = document.getElementById('site-like');
  var count = document.getElementById('like-count');
  var storageKey = 'zane-site-liked';
  var counterUrl = 'https://abacus.jasoncameron.dev';
  var counterPath = '/zaneyuan-github-io/homepage-likes';
  var liked = localStorage.getItem(storageKey) === 'true';
  var pending = false;

  function setLabel(translations) {
    var key = liked ? 'like.liked' : 'like.label';
    var isEnglish = document.documentElement.getAttribute('data-lang') === 'en';
    var label = translations && translations[key]
      ? translations[key]
      : (liked
        ? (isEnglish ? 'Liked — thank you' : '已点赞，感谢你的支持')
        : (isEnglish ? 'Like this page' : '为这个主页点赞'));
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  function applyLikedState() {
    button.classList.toggle('is-liked', liked);
    button.setAttribute('aria-pressed', String(liked));
    button.disabled = liked;
    setLabel();
  }

  function request(action) {
    var controller = new AbortController();
    var timeout = window.setTimeout(function () {
      controller.abort();
    }, 6000);

    return fetch(counterUrl + '/' + action + counterPath, {
      headers: { Accept: 'application/json' },
      signal: controller.signal
    }).then(function (response) {
      if (action === 'get' && response.status === 404) return { value: 0 };
      if (!response.ok) throw new Error('Like counter request failed');
      return response.json();
    }).finally(function () {
      window.clearTimeout(timeout);
    });
  }

  function showValue(value) {
    count.textContent = new Intl.NumberFormat().format(value);
  }

  applyLikedState();
  request('get').then(function (result) {
    showValue(result.value);
  }).catch(function () {
    count.textContent = '—';
  });

  button.addEventListener('click', function () {
    if (liked || pending) return;
    pending = true;
    button.classList.add('is-pending');
    button.disabled = true;

    request('hit').then(function (result) {
      liked = true;
      localStorage.setItem(storageKey, 'true');
      showValue(result.value);
      applyLikedState();
    }).catch(function () {
      button.disabled = false;
    }).finally(function () {
      pending = false;
      button.classList.remove('is-pending');
    });
  });

  window.addEventListener('languagechange', function (event) {
    setLabel(event.detail.translations);
  });
})();

(function () {
  var canvas = document.getElementById('bg');
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var dots = [];
  var w, h;

  function resize() {
    var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = Math.round(w * pixelRatio);
    canvas.height = Math.round(h * pixelRatio);
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    var count = Math.min(70, Math.floor((w * h) / 22000));
    dots = [];
    for (var i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15
      });
    }
  }

  function isDark() {
    return document.documentElement.getAttribute('data-theme') !== 'light';
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    var color = isDark() ? 'rgba(232, 184, 109,' : 'rgba(179, 118, 58,';
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      if (!reduceMotion) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
      }
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = color + '0.35)';
      ctx.fill();
    }
    for (var i = 0; i < dots.length; i++) {
      for (var j = i + 1; j < dots.length; j++) {
        var dx = dots[i].x - dots[j].x;
        var dy = dots[i].y - dots[j].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = color + (0.12 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();
