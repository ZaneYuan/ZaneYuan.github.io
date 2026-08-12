(function () {
  var translations = {
    zh: {
      docTitle: 'Zane · 个人主页',
      description: 'Zane — Dynamics 365 / Power Platform / Azure 软件工程师，独立游戏与工具开发者',
      'hero.title': '软件工程师 <span class="dot">·</span> 独立开发者',
      'hero.tagline': '写代码搭系统，也写代码造一家会自己开门的午夜怪物便利店。',
      'about.heading': '关于我',
      'about.body': '六年多时间里，大部分工作是把复杂的企业系统一点点理顺——插件、中间层、云端集成，让数据在正确的地方安静地流动。持有 Microsoft Power Platform 全系认证（<span class="mono">PL-200 / PL-400 / PL-600</span>）与 Azure 认证（<span class="mono">AZ-104 / AZ-305</span>）。这两年开始用 Claude Code 搭建 AI Agent，把重复劳动交给自动化，把更多时间留给值得认真想的问题。',
      'focus.heading': '目前方向',
      'focus.enterprise': '<strong>企业侧</strong> — Dynamics 365 / Power Platform / Azure 架构设计与落地，探索 AI Agent 融入开发与交付流程',
      'focus.personal': '<strong>个人侧</strong> — 独立游戏开发（Unity + C#）、开发者工具（.NET + React 桌面应用）',
      'projects.heading': '近期在做的事',
      'project1.title': '午夜怪物便利店',
      'project1.desc': '一款「白天远征、深夜营业」的经营 + 肉鸽游戏。全程序化生成，没有一个预制体。目前已有完整可玩的 PC 原型：排班、远征、闭店、日结，一晚一个完整的循环。',
      'project2.desc': '开源的 Power Apps / Dataverse / Dynamics 365 桌面工具箱，内置连接管理、Metadata Browser、SQL4CDS、Plugin Registration、Ribbon Workbench 等 14+ 个工具，仿 XrmToolBox 思路用 React + WPF + WebView2 重新打造。',
      'project2.link': '查看仓库 →',
      'project3.title': 'AI Agent 工作流',
      'project3.desc': '用 Claude Code 搭建面向 CRM 开发场景的 Agent、Skill 和插件，覆盖内容质检、文档生成、Agent 驱动的应用生成等场景。',
      'hobbies.heading': '爱好',
      'hobbies.tag1': '🎤 唱歌 · 研究科学发声与唱法',
      'hobbies.tag2': '🇬🇧 英语学习',
      'footer.text': '© 2026 Zane · 用一行行代码，认真生活。'
    },
    en: {
      docTitle: 'Zane · Personal Site',
      description: 'Zane — Dynamics 365 / Power Platform / Azure Software Engineer, indie game & tool developer',
      'hero.title': 'Software Engineer <span class="dot">·</span> Indie Developer',
      'hero.tagline': 'Building systems by day, and a midnight monster store that opens its own doors by night.',
      'about.heading': 'About',
      'about.body': 'Over six-plus years, most of my work has been untangling complex enterprise systems — plugins, middleware, cloud integrations — so data quietly flows where it should. Certified across Microsoft Power Platform (<span class="mono">PL-200 / PL-400 / PL-600</span>) and Azure (<span class="mono">AZ-104 / AZ-305</span>). For the past two years I’ve been building AI agents with Claude Code, handing repetitive work to automation and keeping more time for the problems worth thinking through.',
      'focus.heading': 'Current Focus',
      'focus.enterprise': '<strong>Enterprise</strong> — Dynamics 365 / Power Platform / Azure architecture and delivery, exploring how AI agents fit into dev workflows',
      'focus.personal': '<strong>Personal</strong> — Indie game development (Unity + C#), developer tools (.NET + React desktop apps)',
      'projects.heading': 'Currently Building',
      'project1.title': 'Midnight Monster Store',
      'project1.desc': 'A management-sim + roguelite: expeditions by day, running a shop for monsters by night. Fully procedural — not a single prefab. A complete, playable PC prototype already exists: scheduling, expeditions, closing up, and the daily settlement — one full loop per night.',
      'project2.desc': 'An open-source desktop toolbox for Power Apps / Dataverse / Dynamics 365 — 14+ built-in tools including connection management, a metadata browser, SQL4CDS, Plugin Registration, and Ribbon Workbench, built in the spirit of XrmToolBox with React + WPF + WebView2.',
      'project2.link': 'View repo →',
      'project3.title': 'AI Agent Workflows',
      'project3.desc': 'Building agents, skills, and plugins with Claude Code for CRM development — content QA, documentation generation, agent-driven app scaffolding, and more.',
      'hobbies.heading': 'Interests',
      'hobbies.tag1': '🎤 Singing · studying vocal technique',
      'hobbies.tag2': '🇬🇧 Learning English',
      'footer.text': '© 2026 Zane · Building a life, one line at a time.'
    }
  };

  var root = document.documentElement;
  var toggle = document.getElementById('lang-toggle');

  function apply(lang) {
    var dict = translations[lang] || translations.zh;
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    document.title = dict.docTitle;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.description);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
  }

  var stored = localStorage.getItem('lang') || 'zh';
  apply(stored);

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-lang') === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', next);
    apply(next);
  });
})();
