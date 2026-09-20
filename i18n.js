(function () {
  var translations = {
    zh: {
      docTitle: 'Zane · 个人主页',
      description: 'Zane — Dynamics 365 / Power Platform 软件工程师，独立产品与开发者工具作者',
      'a11y.skip': '跳到主要内容',
      'hero.eyebrow': 'BUILDING SYSTEMS · SHAPING PRODUCTS',
      'hero.title': '软件工程师 <span class="dot">·</span> 产品开发者',
      'hero.tagline': '把复杂系统做简单，也把零散学习变成一条走得下去的路。',
      'contact.label': '联系我',
      'like.label': '为这个主页点赞',
      'like.liked': '已点赞，感谢你的支持',
      'about.heading': '关于我',
      'about.body': '六年多时间里，大部分工作是把复杂的企业系统一点点理顺——插件、中间层、云端集成，让数据在正确的地方安静地流动。持有 Microsoft Power Platform 全系认证（<span class="mono">PL-200 / PL-400 / PL-600</span>）与 Azure 认证（<span class="mono">AZ-104 / AZ-305</span>）。现在也把这些经验投入独立产品 Doquence：从学习体验、产品设计到全栈开发，把一个想法完整地做成可用的产品。',
      'focus.heading': '目前方向',
      'focus.enterprise': '<strong>企业侧</strong> — Dynamics 365 / Power Platform / Azure 架构设计与落地，探索 AI Agent 融入开发与交付流程',
      'focus.personal': '<strong>个人侧</strong> — 独立产品 Doquence（Flutter + .NET + Azure）、开发者工具与 AI 辅助工作流',
      'projects.heading': '近期在做的事',
      'project1.subtitle': '英语学习 · Web 应用',
      'project1.status': '免费内测',
      'project1.desc': '面向成年学习者的英语学习应用，把 A1–C2 分级课程、章节学习、知识库、个性化复习与 AI 对话练习串成一条完整路径。当前提供免费 Beta 体验。',
      'project1.link': '了解 Doquence ↗',
      'project1.app': '打开应用 →',
      'project2.desc': '开源的 Power Apps / Dataverse / Dynamics 365 桌面工具箱，内置连接管理、Metadata Browser、SQL4CDS、Plugin Registration、Ribbon Workbench 等 14+ 个工具，以 React + WPF + WebView2 重新打造现代工具体验。',
      'project2.link': '查看仓库 →',
      'project3.title': 'AI Agent 工作流',
      'project3.desc': '面向 CRM 与产品开发场景构建 Agent、Skill 和插件，覆盖内容质检、文档生成、工程自动化与 Agent 驱动的应用生成。',
      'hobbies.heading': '爱好',
      'hobbies.tag1': '🎤 唱歌 · 研究科学发声与唱法',
      'hobbies.tag2': '🇬🇧 英语学习',
      'links.vocal': 'Vocal 练声工具',
      'links.doquence': '体验 Doquence',
      'footer.text': '© 2026 Zane · 用一行行代码，认真生活。'
    },
    en: {
      docTitle: 'Zane · Personal Site',
      description: 'Zane — Dynamics 365 / Power Platform Software Engineer, independent product and developer-tool builder',
      'a11y.skip': 'Skip to content',
      'hero.eyebrow': 'BUILDING SYSTEMS · SHAPING PRODUCTS',
      'hero.title': 'Software Engineer <span class="dot">·</span> Product Builder',
      'hero.tagline': 'Turning complex systems into calm products—and scattered study into a path worth following.',
      'contact.label': 'Contact me',
      'like.label': 'Like this page',
      'like.liked': 'Liked — thank you',
      'about.heading': 'About',
      'about.body': 'Over six-plus years, most of my work has been untangling complex enterprise systems — plugins, middleware, cloud integrations — so data quietly flows where it should. Certified across Microsoft Power Platform (<span class="mono">PL-200 / PL-400 / PL-600</span>) and Azure (<span class="mono">AZ-104 / AZ-305</span>). I now bring that experience to Doquence, an independent product I am shaping end to end — from the learning experience and product design to the full-stack implementation.',
      'focus.heading': 'Current Focus',
      'focus.enterprise': '<strong>Enterprise</strong> — Dynamics 365 / Power Platform / Azure architecture and delivery, exploring how AI agents fit into dev workflows',
      'focus.personal': '<strong>Personal</strong> — Doquence (Flutter + .NET + Azure), developer tools, and AI-assisted workflows',
      'projects.heading': 'Currently Building',
      'project1.subtitle': 'English Learning · Web App',
      'project1.status': 'Free Beta',
      'project1.desc': 'An English-learning app for adults that connects A1–C2 levelled courses, focused chapters, a searchable library, personal review, and AI conversation practice into one coherent path. Now available as a free Beta.',
      'project1.link': 'Explore Doquence ↗',
      'project1.app': 'Open the app →',
      'project2.desc': 'An open-source desktop toolbox for Power Apps / Dataverse / Dynamics 365 — 14+ built-in tools including connection management, a metadata browser, SQL4CDS, Plugin Registration, and Ribbon Workbench, rebuilt as a modern experience with React + WPF + WebView2.',
      'project2.link': 'View repo →',
      'project3.title': 'AI Agent Workflows',
      'project3.desc': 'Building agents, skills, and plugins for CRM and product development — spanning content QA, documentation, engineering automation, and agent-driven app generation.',
      'hobbies.heading': 'Interests',
      'hobbies.tag1': '🎤 Singing · studying vocal technique',
      'hobbies.tag2': '🇬🇧 Learning English',
      'links.vocal': 'Vocal Tool',
      'links.doquence': 'Explore Doquence',
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
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang, translations: dict } }));
  }

  var stored = localStorage.getItem('lang') || 'zh';
  apply(stored);

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-lang') === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', next);
    apply(next);
  });
})();
