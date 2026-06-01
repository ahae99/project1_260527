// ═══════════════════════════════════════════════════════════════════════════
//  完整渲染資料 (由 menu-raw.js 展開為四語言) — 請勿手動編輯結構
//  若要改菜單,請編輯 menu-raw.js;此檔的翻譯可在此微調
//
//  price:  [{ label: {zh,en,ja,ko} | null, value: Number | 'market' }]
//  desc / note: {zh,en,ja,ko};空字串代表不顯示
// ═══════════════════════════════════════════════════════════════════════════

const menuItems = [
  // ── 炒飯 fried_rice ───────────────────────────────────
  {
    id: 'fried_rice-001', category: 'fried_rice',
    names: { zh: '蛋炒飯', en: 'Egg Fried Rice', ja: '卵チャーハン', ko: '계란 볶음밥' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🍳', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_rice-002', category: 'fried_rice',
    names: { zh: '香腸炒飯', en: 'Sausage Fried Rice', ja: 'ソーセージチャーハン', ko: '소시지 볶음밥' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🌭', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_rice-003', category: 'fried_rice',
    names: { zh: '肉絲炒飯', en: 'Shredded Pork Fried Rice', ja: '肉絲チャーハン', ko: '고기채 볶음밥' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍖', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_rice-004', category: 'fried_rice',
    names: { zh: '蝦仁炒飯', en: 'Shrimp Fried Rice', ja: 'エビチャーハン', ko: '새우 볶음밥' },
    price: [{ label: null, value: 90 }],
    image: null, emoji: '🍤', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_rice-005', category: 'fried_rice',
    names: { zh: '牛肉炒飯', en: 'Beef Fried Rice', ja: '牛肉チャーハン', ko: '소고기 볶음밥' },
    price: [{ label: null, value: 100 }],
    image: null, emoji: '🥩', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ── 炒麵 fried_noodle ─────────────────────────────────
  {
    id: 'fried_noodle-001', category: 'fried_noodle',
    names: { zh: '台式高麗菜炒麵', en: 'Taiwanese Cabbage Fried Noodles', ja: '台湾風キャベツ焼きそば', ko: '대만식 양배추 볶음면' },
    price: [
      { label: { zh: '肉絲', en: 'Shredded Pork', ja: '肉絲', ko: '고기채' }, value: 80 },
      { label: { zh: '蝦仁', en: 'Shrimp',        ja: 'エビ', ko: '새우' },   value: 90 },
    ],
    image: null, emoji: '🍜', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_noodle-002', category: 'fried_noodle',
    names: { zh: '肉絲炒麵', en: 'Shredded Pork Fried Noodles', ja: '肉絲焼きそば', ko: '고기채 볶음면' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍜', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'fried_noodle-003', category: 'fried_noodle',
    names: { zh: '牛肉炒麵', en: 'Beef Fried Noodles', ja: '牛肉焼きそば', ko: '소고기 볶음면' },
    price: [{ label: null, value: 100 }],
    image: null, emoji: '🍜', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },

  // ── 其它 other ────────────────────────────────────────
  {
    id: 'other-001', category: 'other',
    names: { zh: '肉絲燴飯', en: 'Shredded Pork Rice with Gravy', ja: '肉絲あんかけご飯', ko: '고기채 덮밥' },
    price: [{ label: null, value: 80 }],
    image: null, emoji: '🍛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-002', category: 'other',
    names: { zh: '牛肉燴飯', en: 'Beef Rice with Gravy', ja: '牛肉あんかけご飯', ko: '소고기 덮밥' },
    price: [{ label: null, value: 100 }],
    image: null, emoji: '🍛', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-003', category: 'other',
    names: { zh: '薑絲炒大腸', en: 'Stir-fried Pork Intestine with Ginger', ja: '生姜とモツの炒め', ko: '생강 곱창 볶음' },
    price: [{ label: null, value: 100 }],
    image: null, emoji: '🍢', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-004', category: 'other',
    names: { zh: '塔香螺肉', en: 'Stir-fried Sea Snail with Basil', ja: 'バジルとつぶ貝の炒め', ko: '바질 소라 볶음' },
    price: [{ label: null, value: 100 }],
    image: null, emoji: '🐚', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-005', category: 'other',
    names: { zh: '空心菜炒牛肉', en: 'Stir-fried Beef with Water Spinach', ja: '空芯菜と牛肉の炒め', ko: '공심채 소고기 볶음' },
    price: [{ label: null, value: 120 }],
    image: null, emoji: '🥬', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-006', category: 'other',
    names: { zh: '炒高麗菜', en: 'Stir-fried Cabbage', ja: 'キャベツ炒め', ko: '양배추 볶음' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🥬', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-007', category: 'other',
    names: { zh: '炒空心菜', en: 'Stir-fried Water Spinach', ja: '空芯菜炒め', ko: '공심채 볶음' },
    price: [{ label: null, value: 60 }],
    image: null, emoji: '🥬', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'other-008', category: 'other',
    names: { zh: '白飯', en: 'Steamed Rice', ja: '白ご飯', ko: '흰쌀밥' },
    price: [{ label: null, value: 10 }],
    image: null, emoji: '🍚', tags: [],
    desc: { zh: '', en: '', ja: '', ko: '' },
    note: { zh: '單點限 2 碗', en: 'Limit 2 bowls per à la carte order', ja: '単品はお一人2杯まで', ko: '단품 주문 시 2공기 한정' },
  },
];

window.menuItems = menuItems;
