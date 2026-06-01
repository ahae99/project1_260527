// ═══════════════════════════════════════════════════════════════════════════
//  菜單原始資料 — 餐廳業者在此編輯
//
//  欄位說明:
//    category  分類代碼 (fried_rice 炒飯 / fried_noodle 炒麵 / other 其它)
//    name      品項中文名稱
//    options   價格選項,字串陣列:
//                不分規格 → ['60']
//                分規格   → ['肉絲 80', '蝦仁 90']
//                時價     → ['時價']
//    tags      標記代碼陣列 (R 推薦 / 1 2 3 辣度 / P 豬 / B 牛 / L 羊 /
//              V 素 / V5 五辛素 / H 清真)。菜單沒寫就留空 []
//    image     圖片檔名 (放在 images/ 資料夾),尚無圖片填 null
//    emoji     無圖片時放大顯示的替代圖示
//    note      中文備註,不需要時填 ''
//
//  ★ 新增品項時,只要複製一個 { } 區塊,改掉內容即可
// ═══════════════════════════════════════════════════════════════════════════

const menuRaw = [
  // ── 炒飯 ──────────────────────────────────────────────
  { category: 'fried_rice',   name: '蛋炒飯',         options: ['60'],            tags: [], image: null, emoji: '🍳', note: '' },
  { category: 'fried_rice',   name: '香腸炒飯',       options: ['80'],            tags: [], image: null, emoji: '🌭', note: '' },
  { category: 'fried_rice',   name: '肉絲炒飯',       options: ['80'],            tags: [], image: null, emoji: '🍖', note: '' },
  { category: 'fried_rice',   name: '蝦仁炒飯',       options: ['90'],            tags: [], image: null, emoji: '🍤', note: '' },
  { category: 'fried_rice',   name: '牛肉炒飯',       options: ['100'],           tags: [], image: null, emoji: '🥩', note: '' },

  // ── 炒麵 ──────────────────────────────────────────────
  { category: 'fried_noodle', name: '台式高麗菜炒麵', options: ['肉絲 80', '蝦仁 90'], tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'fried_noodle', name: '肉絲炒麵',       options: ['80'],            tags: [], image: null, emoji: '🍜', note: '' },
  { category: 'fried_noodle', name: '牛肉炒麵',       options: ['100'],           tags: [], image: null, emoji: '🍜', note: '' },

  // ── 其它 ──────────────────────────────────────────────
  { category: 'other',        name: '肉絲燴飯',       options: ['80'],            tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'other',        name: '牛肉燴飯',       options: ['100'],           tags: [], image: null, emoji: '🍛', note: '' },
  { category: 'other',        name: '薑絲炒大腸',     options: ['100'],           tags: [], image: null, emoji: '🍢', note: '' },
  { category: 'other',        name: '塔香螺肉',       options: ['100'],           tags: [], image: null, emoji: '🐚', note: '' },
  { category: 'other',        name: '空心菜炒牛肉',   options: ['120'],           tags: [], image: null, emoji: '🥬', note: '' },
  { category: 'other',        name: '炒高麗菜',       options: ['60'],            tags: [], image: null, emoji: '🥬', note: '' },
  { category: 'other',        name: '炒空心菜',       options: ['60'],            tags: [], image: null, emoji: '🥬', note: '' },
  { category: 'other',        name: '白飯',           options: ['10'],            tags: [], image: null, emoji: '🍚', note: '單點限 2 碗' },
];

window.menuRaw = menuRaw;
