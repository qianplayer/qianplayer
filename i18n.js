function detectLanguage() {
  const langs = navigator.languages || [navigator.language || navigator.userLanguage || 'en'];
  for (const lang of langs) {
    const code = lang.toLowerCase();
    if (code.startsWith('zh-tw') || code.startsWith('zh-hant') || code === 'zh-hk' || code === 'zh-mo') return 'zh-TW';
    if (code.startsWith('zh')) return 'zh-CN';
    if (code.startsWith('ja')) return 'ja';
    if (code.startsWith('fr')) return 'fr';
    if (code.startsWith('de')) return 'de';
    if (code.startsWith('es')) return 'es';
    if (code.startsWith('ar')) return 'ar';
    if (code.startsWith('en')) return 'en';
  }
  return 'en';
}

function applyI18n(i18nData) {
  const lang = detectLanguage();
  const t = i18nData[lang];
  if (!t) return;

  const isChinese = lang === 'zh-CN' || lang === 'zh-TW';

  document.documentElement.lang = t.htmlLang;
  document.documentElement.dir = t.dir;
  document.title = t.title;

  const pinyinCard = document.getElementById('pinyin-search');
  if (pinyinCard) pinyinCard.style.display = isChinese ? '' : 'none';

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  const sections = document.querySelectorAll('.section');
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.querySelector('.tagline').textContent = t.tagline;
    hero.querySelector('.download-btn').textContent = t.downloadBtn;
    hero.querySelector('.download-meta').textContent = t.downloadMeta;
  }

  const screenshots = document.querySelector('.screenshots');
  if (screenshots) {
    screenshots.querySelector('h2').textContent = t.screenshotTitle;
    const img = screenshots.querySelector('img');
    if (img) img.alt = t.screenshotAlt;
  }

  if (sections[0]) {
    sections[0].querySelector('h2').textContent = t.overviewTitle;
    sections[0].querySelector('.subtitle').textContent = t.overviewSubtitle;
    const items = sections[0].querySelectorAll('.overview-item p');
    t.overviewItems.forEach((text, i) => { if (items[i]) items[i].textContent = text; });
  }

  if (sections[1]) {
    sections[1].querySelector('h2').textContent = t.videoTitle;
    sections[1].querySelector('.subtitle').textContent = t.videoSubtitle;
    const cards = sections[1].querySelectorAll('.feature-card');
    t.videoFeatures.forEach((f, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = f.title;
        cards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  if (sections[2]) {
    sections[2].querySelector('h2').textContent = t.audioTitle;
    sections[2].querySelector('.subtitle').textContent = t.audioSubtitle;
    const cards = sections[2].querySelectorAll('.feature-card');
    t.audioFeatures.forEach((f, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = f.title;
        cards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  if (sections[3]) {
    sections[3].querySelector('h2').textContent = t.funcTitle;
    sections[3].querySelector('.subtitle').textContent = t.funcSubtitle;
    const funcCards = isChinese
      ? sections[3].querySelectorAll('.feature-card')
      : sections[3].querySelectorAll('.feature-card:not(#pinyin-search)');
    t.funcFeatures.forEach((f, i) => {
      if (funcCards[i]) {
        funcCards[i].querySelector('h3').textContent = f.title;
        funcCards[i].querySelector('p').textContent = f.desc;
      }
    });
  }

  if (sections[4]) {
    sections[4].querySelector('h2').textContent = t.sysTitle;
    sections[4].querySelector('.subtitle').textContent = t.sysSubtitle;
    const reqBoxes = sections[4].querySelectorAll('.requirements');
    if (reqBoxes[0]) {
      reqBoxes[0].querySelector('h3').textContent = t.reqTitle;
      const lis = reqBoxes[0].querySelectorAll('li');
      t.reqItems.forEach((text, i) => { if (lis[i]) lis[i].textContent = text; });
    }
    if (reqBoxes[1]) {
      reqBoxes[1].querySelector('h3').textContent = t.secTitle;
      const lis = reqBoxes[1].querySelectorAll('li');
      t.secItems.forEach((text, i) => { if (lis[i]) lis[i].textContent = text; });
    }
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.querySelector('p').innerHTML =
      `<a href="https://github.com/qianplayer/qianplayer">${t.footerSource}</a> · ${t.footerSlogan}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetch('i18n.json')
    .then(res => res.json())
    .then(applyI18n)
    .catch(() => {});
});
