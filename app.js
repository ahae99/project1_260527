/* ═══════════════════════════════════════════════════════════════════
   鱷魚爸爸 線上菜單 — 互動邏輯 (繁中 / EN / 日本語 / 한국어)
   ═══════════════════════════════════════════════════════════════════ */

const LANGS = ['zh', 'en', 'ja', 'ko'];

/* 店家資訊 — 地址尚未提供,以佔位文字呈現,可在此補上 */
const STORE = {
  name:   { zh:'鱷魚爸爸', en:'Crocodile Papa', ja:'ワニのパパ', ko:'악어 아빠' },
  tag:    { zh:'道地台式快炒', en:'Authentic Taiwanese Stir-fry', ja:'台湾家庭の炒め料理', ko:'정통 대만식 볶음요리' },
  phone:  '0960-709933',
  address:{ zh:'545 南投縣埔里鎮大城里中山路三段566號', en:'No. 566, Sec. 3, Zhongshan Rd., Dacheng Vil., Puli Township, Nantou County 545, Taiwan', ja:'〒545 南投県埔里鎮大城里中山路三段566号', ko:'545 난터우현 푸리진 다청리 중산로 3가 566호' },
  hours:  { zh:'11:00–14:00、17:00–21:00', en:'11:00–14:00 / 17:00–21:00', ja:'11:00–14:00／17:00–21:00', ko:'11:00–14:00 / 17:00–21:00' },
  closed: { zh:'每週一公休', en:'Closed every Monday', ja:'毎週月曜定休', ko:'매주 월요일 휴무' },
};

/* 用餐提醒 (店家備註 + 加點規則) */
const NOTICES = [
  { zh:'加青椒 +NT$10', en:'Add green pepper +NT$10', ja:'ピーマン追加 +NT$10', ko:'피망 추가 +NT$10' },
  { zh:'加飯／加麵 +NT$10', en:'Extra rice / noodles +NT$10', ja:'ご飯・麺の大盛り +NT$10', ko:'밥·면 추가 +NT$10' },
  { zh:'湯類停售,提供免費例湯,可外帶打包', en:'Soups discontinued — free house soup available to take away', ja:'スープ類は販売休止中。無料の付け汁はお持ち帰り可', ko:'국류 판매 중단 — 무료 기본 국 포장 가능' },
  { zh:'塑膠袋請重複使用,一起愛護環境', en:'Please reuse plastic bags — let\u2019s protect the environment', ja:'ビニール袋はくり返しご利用ください', ko:'비닐봉투는 재사용해 주세요' },
];

/* 分類 */
const CATEGORIES = [
  { key:'fried_rice',   name:{ zh:'炒飯', en:'Fried Rice', ja:'チャーハン', ko:'볶음밥' }, sub:'FRIED RICE' },
  { key:'fried_noodle', name:{ zh:'炒麵', en:'Fried Noodles', ja:'焼きそば', ko:'볶음면' }, sub:'FRIED NOODLES' },
  { key:'other',        name:{ zh:'其它', en:'Others', ja:'その他', ko:'기타' }, sub:'OTHERS' },
];

/* 標記對照表 */
const TAGS = {
  R:  { icon:'⭐',  cls:'',      txt:{ zh:'本店推薦', en:'Recommended', ja:'おすすめ', ko:'추천' } },
  '1':{ icon:'🌶️',  cls:'spice', txt:{ zh:'小辣', en:'Mild Spicy', ja:'少し辛い', ko:'약간 매운' } },
  '2':{ icon:'🌶️🌶️',cls:'spice', txt:{ zh:'中辣', en:'Medium Spicy', ja:'中辛', ko:'보통 매운' } },
  '3':{ icon:'🔥',  cls:'spice', txt:{ zh:'大辣', en:'Very Spicy', ja:'激辛', ko:'매우 매운' } },
  P:  { icon:'🐷',  cls:'meat',  txt:{ zh:'含豬肉', en:'Contains Pork', ja:'豚肉入り', ko:'돼지고기 포함' } },
  B:  { icon:'🐂',  cls:'meat',  txt:{ zh:'含牛肉', en:'Contains Beef', ja:'牛肉入り', ko:'소고기 포함' } },
  L:  { icon:'🐑',  cls:'meat',  txt:{ zh:'含羊肉', en:'Contains Lamb', ja:'ラム入り', ko:'양고기 포함' } },
  V:  { icon:'🥬',  cls:'veg',   txt:{ zh:'素食', en:'Vegetarian', ja:'ベジタリアン', ko:'채식' } },
  V5: { icon:'🧄',  cls:'veg',   txt:{ zh:'五辛素', en:'Plant-based with Allium', ja:'五葷あり精進', ko:'오신채 포함 채식' } },
  H:  { icon:'☪️',  cls:'',      txt:{ zh:'清真認證', en:'Halal Certified', ja:'ハラール認証', ko:'할랄 인증' } },
};

/* UI 字串 */
const UI = {
  address: { zh:'地址', en:'Address', ja:'住所', ko:'주소' },
  phone:   { zh:'電話', en:'Phone', ja:'電話', ko:'전화' },
  hours:   { zh:'營業時間', en:'Hours', ja:'営業時間', ko:'영업시간' },
  closed:  { zh:'公休', en:'Closed', ja:'定休日', ko:'휴무일' },
  notice:  { zh:'用餐提醒', en:'Good to Know', ja:'ご案内', ko:'안내' },
  market:  { zh:'時價', en:'Market Price', ja:'時価', ko:'시가' },
  desc:    { zh:'說明', en:'Description', ja:'説明', ko:'설명' },
  note:    { zh:'備註', en:'Note', ja:'備考', ko:'비고' },
  footer:  { zh:'感謝光臨 · 歡迎內用與外帶', en:'Thank you · Dine-in & Takeout welcome', ja:'ご来店ありがとうございます · 店内・お持ち帰り可', ko:'방문 감사합니다 · 매장·포장 가능' },
};

const ITEMS = window.menuItems || [];
let LANG = localStorage.getItem('croc_lang') || 'zh';
if (!LANGS.includes(LANG)) LANG = 'zh';

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const NT = (v) => 'NT$' + v;

/* ── Badges ── */
function badgesHTML(tags) {
  if (!tags || !tags.length) return '';
  const items = tags.filter(t => TAGS[t]).map(t => {
    const d = TAGS[t];
    return `<span class="badge ${d.cls}"><span>${d.icon}</span>${d.txt[LANG]}</span>`;
  });
  return `<div class="badges">${items.join('')}</div>`;
}

/* ── Price ── */
function priceHTML(price) {
  if (price.length === 1 && price[0].label == null) {
    const v = price[0].value;
    if (v === 'market') return `<div class="price"><span class="price-market">${UI.market[LANG]}</span></div>`;
    return `<div class="price"><span class="price-single">${NT(v)}</span></div>`;
  }
  const rows = price.map(p => {
    const lbl = p.label ? p.label[LANG] : '';
    const val = p.value === 'market' ? UI.market[LANG] : NT(p.value);
    return `<div class="price-row"><span class="pl">${lbl}</span><span class="pv">${val}</span></div>`;
  }).join('');
  return `<div class="price">${rows}</div>`;
}

/* ── Card ── */
function cardHTML(item) {
  const tile = item.image
    ? `<img loading="lazy" src="images/${item.image}" alt="">`
    : item.emoji;
  const note = item.note && item.note[LANG] ? `<div class="card-note">${item.note[LANG]}</div>` : '';
  return `
    <div class="card" data-id="${item.id}">
      <div class="tile">${tile}</div>
      <div class="card-body">
        <div class="card-name">${item.names[LANG]}</div>
        ${note}
        ${badgesHTML(item.tags)}
        ${priceHTML(item.price)}
      </div>
    </div>`;
}

/* ── Render store info / notices / sections ── */
function renderStatic() {
  $('#brandName').textContent = STORE.name[LANG];
  $('#heroName').textContent = STORE.name[LANG];
  $('#heroTag').textContent = STORE.tag[LANG];
  document.documentElement.lang = LANG === 'zh' ? 'zh-Hant' : LANG;

  $('#info').innerHTML = `
    <div class="info-row"><span class="ico">📍</span><div><div class="lbl">${UI.address[LANG]}</div><a href="https://maps.google.com/?q=${encodeURIComponent(STORE.address.zh)}" target="_blank" rel="noopener">${STORE.address[LANG]}</a></div></div>
    <div class="info-row"><span class="ico">📞</span><div><div class="lbl">${UI.phone[LANG]}</div><a href="tel:${STORE.phone}">${STORE.phone}</a></div></div>
    <div class="info-row"><span class="ico">🕘</span><div><div class="lbl">${UI.hours[LANG]}</div>${STORE.hours[LANG]}</div></div>
    <div class="info-row"><span class="ico">📅</span><div><div class="lbl">${UI.closed[LANG]}</div>${STORE.closed[LANG]}</div></div>`;

  $('#notice').innerHTML = `
    <h3>💡 ${UI.notice[LANG]}</h3>
    <ul>${NOTICES.map(n => `<li>${n[LANG]}</li>`).join('')}</ul>`;

  $('#footer').innerHTML = `<span class="fmark">🐊</span>${UI.footer[LANG]}`;
}

function renderTabs() {
  $('#tabs').innerHTML = CATEGORIES
    .filter(c => ITEMS.some(i => i.category === c.key))
    .map((c, i) => `<button class="tab ${i === 0 ? 'active' : ''}" data-cat="${c.key}">${c.name[LANG]}</button>`)
    .join('');
}

function renderSections() {
  const main = $('#main');
  main.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const list = ITEMS.filter(i => i.category === cat.key);
    if (!list.length) return;
    const sec = el('section', 'section');
    sec.id = 'sec-' + cat.key;
    sec.innerHTML = `
      <div class="section-head">
        <span class="zh">${cat.name[LANG]}</span>
        <span class="sub">${cat.sub}</span>
        <span class="bar"></span>
      </div>
      ${list.map(cardHTML).join('')}`;
    main.appendChild(sec);
  });
  // bind card taps
  main.querySelectorAll('.card').forEach(c => {
    c.addEventListener('click', () => openModal(c.dataset.id));
  });
}

function renderAll() {
  renderStatic();
  renderTabs();
  renderSections();
  bindTabs();
}

/* ── Language switch ── */
function setLang(lang) {
  LANG = lang;
  localStorage.setItem('croc_lang', lang);
  $('#langs').querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  renderAll();
}
$('#langs').addEventListener('click', e => {
  const b = e.target.closest('.lang-btn');
  if (b) setLang(b.dataset.lang);
});

/* ── Tabs: scroll-to + scrollspy ── */
function bindTabs() {
  $('#tabs').querySelectorAll('.tab').forEach(t => {
    t.addEventListener('click', () => {
      const sec = document.getElementById('sec-' + t.dataset.cat);
      if (!sec) return;
      const offset = 54 + 50; // header + tabs
      const top = sec.getBoundingClientRect().top + window.scrollY - offset + 1;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function onScroll() {
  const h = $('#header');
  h.classList.toggle('scrolled', window.scrollY > 6);
  // scrollspy
  const offset = 54 + 50 + 20;
  let current = CATEGORIES[0] && CATEGORIES[0].key;
  CATEGORIES.forEach(c => {
    const sec = document.getElementById('sec-' + c.key);
    if (sec && sec.getBoundingClientRect().top <= offset) current = c.key;
  });
  $('#tabs').querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.cat === current));
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Modal ── */
let scrollLock = 0;
function openModal(id) {
  const item = ITEMS.find(i => i.id === id);
  if (!item) return;
  const imgHTML = item.image
    ? `<img src="images/${item.image}" alt="">`
    : `<div class="big-emoji">${item.emoji}</div>`;
  const desc = item.desc && item.desc[LANG]
    ? `<div class="m-block"><div class="m-lbl">${UI.desc[LANG]}</div><p>${item.desc[LANG]}</p></div>` : '';
  const note = item.note && item.note[LANG]
    ? `<div class="m-block"><div class="m-lbl">${UI.note[LANG]}</div><p>${item.note[LANG]}</p></div>` : '';

  $('#modalInner').innerHTML = `
    <div class="modal-img">
      <div class="grab"></div>
      ${imgHTML}
      <button class="modal-close" aria-label="close">✕</button>
    </div>
    <div class="modal-body">
      <div class="m-name">${item.names[LANG]}</div>
      ${badgesHTML(item.tags)}
      <div class="m-price">${priceHTML(item.price)}</div>
      ${desc}
      ${note}
    </div>`;

  // lock body scroll, remember position
  scrollLock = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollLock}px`;
  document.body.style.width = '100%';

  const modal = $('#modal');
  modal.classList.add('open');
  $('#modalInner').scrollTop = 0;
  $('#modalInner .modal-close').addEventListener('click', closeModal);
}

function closeModal() {
  const modal = $('#modal');
  modal.classList.remove('open');
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollLock);
}
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Init ── */
window.openModal = openModal;
window.closeModal = closeModal;
window.setLang = setLang;
setLang(LANG);
onScroll();
