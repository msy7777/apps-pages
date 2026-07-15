function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useEffect,
  useRef
} = React;

/* 互換クローン */
const clone = o => typeof structuredClone === "function" ? structuredClone(o) : JSON.parse(JSON.stringify(o));

/* ---------- アイコン（lucide相当のインラインSVG） ---------- */
const Icon = ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  children
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    display: "block"
  }
}, children);
const Check = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const ChevronLeft = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m15 18-6-6 6-6"
}));
const ChevronRight = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m9 18 6-6-6-6"
}));
const ChevronDown = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const ChevronUp = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "m18 15-6-6-6 6"
}));
const Plus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14"
}));
const Trash2 = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M3 6h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17"
}));
const Settings = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}));
const Clock = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "12 6 12 12 16 14"
}));
const Table = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v18"
}), /*#__PURE__*/React.createElement("rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 9h18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M3 15h18"
}));
const Pencil = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
}));
const ListPlus = p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
  d: "M11 12H3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 6H3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 18H3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18 9v6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M21 12h-6"
}));

/* ---------- 定数・ヘルパー ---------- */

const STORAGE_KEY = "kidsJob_v3"; // データ構造は同じなので継続利用

const COLORS = {
  bg: "#F2F2F7",
  card: "#FFFFFF",
  ink: "#1C1C1E",
  sub: "#8E8E93",
  line: "#E5E5EA",
  red: "#FF3B30",
  blue: "#007AFF"
};
const FONT = '-apple-system, BlinkMacSystemFont, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif';
const yen = n => (n || 0).toLocaleString("ja-JP") + "円";

/* 金額表示：数字＋小さめの「円」 */
const Yen = ({
  n
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontVariantNumeric: "tabular-nums"
  }
}, (n || 0).toLocaleString("ja-JP"), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: "0.62em",
    marginLeft: 1
  }
}, "\u5186"));
const tint = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
};

/* 日付ユーティリティ（ローカルタイム基準の YYYY-MM-DD） */
const toKey = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromKey = k => {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const todayKey = () => toKey(new Date());
const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];
const monthKeyOf = k => k.slice(0, 7); // "2026-06"
const monthLabelOf = mk => {
  const [y, m] = mk.split("-").map(Number);
  return `${y}年${m}月`;
};
const daysInMonth = mk => {
  const [y, m] = mk.split("-").map(Number);
  return new Date(y, m, 0).getDate();
};
const addMonths = (mk, n) => {
  const [y, m] = mk.split("-").map(Number);
  const d = new Date(y, m - 1 + n, 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};

/* エントリ: logs[childId][date] = { chores: [id], dad: 0, mom: 0 } */
const emptyEntry = () => ({
  chores: [],
  dad: 0,
  mom: 0
});

/* エントリが空（チェックなし・ボーナスなし）かどうか */
const entryIsEmpty = e => (!e.chores || e.chores.length === 0) && !Object.keys(e).some(f => f !== "chores" && Number(e[f]) > 0);
const DEFAULT_BONUSES = () => [{
  id: "dad",
  name: ""
}, {
  id: "mom",
  name: ""
}];

/* ボーナス枠の初期名（スロット別） */
const slotDefaultName = slot => slot === "dad" ? "ととB" : "かかB";

/* 子どもの表示名（未入力ならグレー相当のプレースホルダー名） */
const childLabel = c => c.name && c.name.trim() ? c.name : "名前";

/* 清算設定の既定値：従来どおり
   1人目＝基本給＋ボーナスA、2人目＝お手伝い＋ボーナスB */
const defaultSettlement = () => ({
  split: true,
  payers: [{
    id: "p1",
    name: "",
    parts: {
      base: true,
      chores: false,
      dad: true,
      mom: false
    }
  }, {
    id: "p2",
    name: "",
    parts: {
      base: false,
      chores: true,
      dad: false,
      mom: true
    }
  }]
});
const payerLabel = p => p.name && p.name.trim() ? p.name : "名前";
const defaultData = () => ({
  children: [{
    id: "c1",
    name: "",
    color: "#1FAEA6"
  }],
  chores: [{
    id: "h1",
    name: "",
    amount: 0
  }],
  logs: {
    c1: {}
  },
  // basePay[childId]["YYYY-MM"] = 金額（月ごとに固定）
  basePay: {
    c1: {}
  },
  // ボーナス枠の既定値（最大2つ・名前変更可）
  bonuses: [{
    id: "dad",
    name: ""
  }],
  // monthBonuses["YYYY-MM"] = その月に表示するボーナス枠（お手伝いセットで挿入）
  monthBonuses: {},
  // 清算のカスタマイズ（誰に何を合算するか）
  settlement: defaultSettlement()
});
const uid = () => Math.random().toString(36).slice(2, 9);

/* ドラッグの持ち手アイコン（縦2列の点） */
function GripIcon({
  size = 20,
  color
}) {
  const c = color || COLORS.line2 || "#C7C7CC";
  const dots = [6, 12, 18];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24"
  }, [9, 15].map(cx => dots.map(cy => /*#__PURE__*/React.createElement("circle", {
    key: `${cx}-${cy}`,
    cx: cx,
    cy: cy,
    r: 1.7,
    fill: c
  }))));
}

/* つまんで並び替えるリスト。ドラッグ中は他の行がスライドして道を譲り、
   指を離した時点で確定する（reorder中は入れ替えない＝入力欄のフォーカスも保持される） */
function DragReorderList({
  items,
  getId = it => it.id,
  onReorder,
  renderRow
}) {
  const [drag, setDrag] = useState(null); // { id, startIndex, targetIndex, startY, rowH, y }

  const startDrag = (id, clientY, rowEl) => {
    const idx = items.findIndex(it => getId(it) === id);
    if (idx < 0 || !rowEl) return;
    const rect = rowEl.getBoundingClientRect();
    setDrag({
      id,
      startIndex: idx,
      targetIndex: idx,
      startY: clientY,
      rowH: rect.height,
      y: 0
    });
  };
  useEffect(() => {
    if (!drag) return;
    const onMove = e => {
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      setDrag(d => {
        if (!d) return d;
        const delta = clientY - d.startY;
        let target = d.startIndex + Math.round(delta / d.rowH);
        target = Math.max(0, Math.min(items.length - 1, target));
        return {
          ...d,
          y: delta,
          targetIndex: target
        };
      });
    };
    const onUp = () => {
      setDrag(d => {
        if (d && d.startIndex !== d.targetIndex) {
          const arr = [...items];
          const [moved] = arr.splice(d.startIndex, 1);
          arr.splice(d.targetIndex, 0, moved);
          onReorder(arr);
        }
        return null;
      });
    };
    window.addEventListener("touchmove", onMove, {
      passive: false
    });
    window.addEventListener("touchend", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drag && drag.id]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, items.map((it, i) => {
    const id = getId(it);
    const isDragging = !!drag && drag.id === id;
    let shift = 0;
    if (drag && !isDragging) {
      const {
        startIndex,
        targetIndex,
        rowH
      } = drag;
      if (startIndex < targetIndex && i > startIndex && i <= targetIndex) shift = -rowH;else if (startIndex > targetIndex && i >= targetIndex && i < startIndex) shift = rowH;
    }
    const wrapStyle = isDragging ? {
      transform: `translateY(${drag.y}px)`,
      position: "relative",
      zIndex: 30,
      transition: "none"
    } : {
      transform: `translateY(${shift}px)`,
      position: "relative",
      zIndex: 1,
      transition: "transform 180ms ease"
    };
    const dragHandleProps = {
      onTouchStart: e => {
        e.preventDefault();
        startDrag(id, e.touches[0].clientY, e.currentTarget.closest("[data-drag-row]"));
      },
      onMouseDown: e => {
        e.preventDefault();
        startDrag(id, e.clientY, e.currentTarget.closest("[data-drag-row]"));
      }
    };
    return renderRow(it, i, {
      wrapStyle,
      isDragging,
      dragHandleProps
    });
  }));
}

/* リスト行の持ち手ボタン（見た目共通） */
function DragHandle(props) {
  return /*#__PURE__*/React.createElement("span", _extends({}, props, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 28,
      alignSelf: "stretch",
      flexShrink: 0,
      cursor: "grab",
      touchAction: "none"
    },
    "aria-label": "\u4E26\u3073\u66FF\u3048"
  }), /*#__PURE__*/React.createElement(GripIcon, null));
}

/* ---------- ストレージ（Firebase Firestore・家族間でリアルタイム共有） ---------- */

const firebaseConfig = {
  apiKey: "AIzaSyAAH-cKKTgWgM7P3JfWKU1-pZOaHtLM98A",
  authDomain: "kids-job-app.firebaseapp.com",
  projectId: "kids-job-app",
  storageBucket: "kids-job-app.firebasestorage.app",
  messagingSenderId: "715635716171",
  appId: "1:715635716171:web:c630fd7455369cfd961dce"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const familyDocRef = db.collection("families").doc("our-family");

/* データの変更を監視し、変わるたびに onChange(data) を呼ぶ。戻り値は監視解除用の関数。
   includeMetadataChanges + hasPendingWrites で「自分がまだFirestoreに書き込み中の内容」を
   確実に無視する（文字列比較による従来方式は、連続入力で書き込みが重なると
   古い内容が後から届いて入力中の内容を上書きしてしまうことがあった）。 */
function watchData(onChange) {
  return familyDocRef.onSnapshot({
    includeMetadataChanges: true
  }, snap => {
    if (snap.metadata.hasPendingWrites) return;
    if (snap.exists) {
      onChange(snap.data());
    } else {
      const initial = defaultData();
      familyDocRef.set(initial);
      onChange(initial);
    }
  });
}
async function saveData(data) {
  try {
    await familyDocRef.set(data);
  } catch (e) {
    console.error("保存に失敗しました", e);
  }
}

/* 旧バージョンのデータを現行形式へ移行 */
function migrate(d) {
  if (!d.logs) d.logs = {};
  if (!d.basePay) d.basePay = {};
  if (!d.monthChores) d.monthChores = {};
  (d.children || []).forEach(c => {
    if (!d.basePay[c.id]) d.basePay[c.id] = {};
    if (c.basePay != null) {
      const mk = monthKeyOf(todayKey());
      if (d.basePay[c.id][mk] == null && Number(c.basePay) > 0) {
        d.basePay[c.id][mk] = Number(c.basePay);
      }
      delete c.basePay;
    }
  });
  if (d.chorePrice) {
    Object.entries(d.chorePrice).forEach(([mk, prices]) => {
      if (!d.monthChores[mk]) {
        d.monthChores[mk] = (d.chores || []).map(c => ({
          ...c,
          amount: prices[c.id] != null ? Number(prices[c.id]) || 0 : Number(c.amount) || 0
        }));
      }
    });
    delete d.chorePrice;
  }
  /* お手伝いリストを子供共通(配列)→子供ごと(オブジェクト)へ移行。
     既存の内容はそのまま各子供にコピーする（移行時点では差はない）。 */
  Object.keys(d.monthChores).forEach(mk => {
    if (Array.isArray(d.monthChores[mk])) {
      const shared = d.monthChores[mk];
      const perChild = {};
      (d.children || []).forEach(c => {
        perChild[c.id] = shared.map(x => ({
          ...x
        }));
      });
      d.monthChores[mk] = perChild;
    }
  });
  // ボーナス枠の初期化
  const isLegacyData = !d.bonuses && !d.monthBonuses; /* ボーナス機能導入前の古いデータか */
  if (!d.settlement) d.settlement = defaultSettlement();
  if (!d.bonuses) d.bonuses = DEFAULT_BONUSES();
  if (!d.monthBonuses) d.monthBonuses = {};
  // 古いデータ（ボーナス機能導入前）だけ、記録済みの月に従来のボーナス列を復元する（後方互換）
  if (isLegacyData) {
    const legacyBonuses = [{
      id: "dad",
      name: "ととB"
    }, {
      id: "mom",
      name: "かかB"
    }];
    const mks = new Set(Object.keys(d.monthChores || {}));
    Object.values(d.logs || {}).forEach(byDate => Object.keys(byDate).forEach(k => mks.add(monthKeyOf(k))));
    mks.forEach(m => {
      if (!d.monthBonuses[m]) d.monthBonuses[m] = legacyBonuses.map(b => ({
        ...b
      }));
    });
  }
  // 不具合で紛れ込んだ「名前未入力かつ未入力金額」のボーナス列を自動で片付ける
  Object.entries(d.monthBonuses).forEach(([m, list]) => {
    d.monthBonuses[m] = list.filter(b => {
      if (b.name && b.name.trim()) return true;
      const hasValue = Object.values(d.logs || {}).some(byDate => Object.keys(byDate).filter(k => monthKeyOf(k) === m).some(k => Number(byDate[k][b.id]) > 0));
      return hasValue;
    });
  });
  return d;
}

/* ---------- 集計ロジック ---------- */

/* その月・その子供のお手伝いリスト：月別×子供別リストのみ（未セットなら空。
   「お手伝いセット」で設定の既定値を挿入する方式） */
const choresFor = (data, mk, childId) => data.monthChores?.[mk]?.[childId] || [];

/* 月別×子供別リストの器を用意（空で作成。既定値は自動では入らない） */
const ensureMonthChores = (d, mk, childId) => {
  if (!d.monthChores) d.monthChores = {};
  if (!d.monthChores[mk]) d.monthChores[mk] = {};
  if (!d.monthChores[mk][childId]) d.monthChores[mk][childId] = [];
  return d.monthChores[mk][childId];
};

/* その月のボーナス枠（未セットなら空） */
const bonusesFor = (data, mk) => data.monthBonuses?.[mk] || [];

/* ボーナス枠の表示名：月のスナップショット → 設定の既定値 → 初期名 */
const bonusName = (data, mk, slot) => (data.monthBonuses?.[mk] || []).find(b => b.id === slot)?.name || (data.bonuses || []).find(b => b.id === slot)?.name || slotDefaultName(slot);

/* その月・そのボーナス枠に、いずれかの子供の金額が既に入力されているか（設定変更を反映してよいかの判定に使う） */
const isBonusUsedInMonth = (d, mk, slotId) => Object.values(d.logs || {}).some(byDate => Object.keys(byDate).filter(k => monthKeyOf(k) === mk).some(k => Number(byDate[k][slotId]) > 0));
const entryOf = (data, childId, k) => (data.logs[childId] || {})[k] || emptyEntry();
const dayTotal = (data, childId, k) => {
  const e = entryOf(data, childId, k);
  const chores = choresFor(data, monthKeyOf(k), childId);
  const amt = id => {
    const c = chores.find(x => x.id === id);
    return c ? Number(c.amount) || 0 : 0;
  };
  return (e.chores || []).reduce((s, id) => s + amt(id), 0) + (Number(e.dad) || 0) + (Number(e.mom) || 0);
};

/* 月別サマリー（子ども1人分） */
const monthSummary = (data, childId, mk) => {
  const logs = data.logs[childId] || {};
  const keys = Object.keys(logs).filter(k => monthKeyOf(k) === mk);
  const items = choresFor(data, mk, childId).map(c => ({
    name: c.name,
    amount: Number(c.amount) || 0,
    count: keys.filter(k => (logs[k].chores || []).includes(c.id)).length
  })).filter(it => it.count > 0);
  const dad = keys.reduce((s, k) => s + (Number(logs[k].dad) || 0), 0);
  const mom = keys.reduce((s, k) => s + (Number(logs[k].mom) || 0), 0);
  const choreSum = items.reduce((s, it) => s + it.amount * it.count, 0);
  const basePay = Number((data.basePay?.[childId] || {})[mk]) || 0;
  return {
    items,
    dad,
    mom,
    choreSum,
    basePay,
    total: basePay + choreSum + dad + mom
  };
};

/* 記録が存在する月の一覧（新しい順） */
const monthsWithData = data => {
  const set = new Set();
  Object.values(data.logs || {}).forEach(byDate => {
    Object.keys(byDate).forEach(k => set.add(monthKeyOf(k)));
  });
  set.add(monthKeyOf(todayKey()));
  return [...set].sort().reverse();
};

/* ---------- アプリ本体 ---------- */

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(defaultData());
  const [view, setView] = useState("home");
  const [active, setActive] = useState(0);
  const isLocalChange = useRef(false);
  useEffect(() => {
    const unsub = watchData(remote => {
      isLocalChange.current = false;
      setData(migrate(remote));
      setLoading(false);
    });
    return () => unsub();
  }, []);
  useEffect(() => {
    if (!loading && isLocalChange.current) {
      saveData(data);
    }
  }, [data, loading]);
  const update = fn => {
    isLocalChange.current = true;
    setData(prev => fn(clone(prev)));
  };
  if (loading) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...page,
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.sub,
        fontFamily: FONT
      }
    }, "\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...page,
      fontFamily: FONT
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, view === "home" && /*#__PURE__*/React.createElement(HomeView, {
    data: data,
    active: Math.min(active, data.children.length - 1),
    setActive: setActive,
    update: update
  }), view === "history" && /*#__PURE__*/React.createElement(HistoryView, {
    data: data
  }), view === "settings" && /*#__PURE__*/React.createElement(SettingsView, {
    data: data,
    update: update
  })), /*#__PURE__*/React.createElement(TabBar, {
    view: view,
    setView: setView
  }));
}

/* ---------- 子ども切り替え ---------- */

function ChildSeg({
  children,
  active,
  setActive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: seg
  }, children.map((c, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: () => setActive(i),
      style: {
        ...segItem,
        color: on ? "#fff" : COLORS.ink,
        background: on ? c.color : "transparent"
      }
    }, childLabel(c));
  }));
}

/* ---------- ホーム（集計表で直接入力） ---------- */

function HomeView({
  data,
  active,
  setActive,
  update
}) {
  const [mk, setMk] = useState(monthKeyOf(todayKey()));
  const child = data.children[active];
  const currentMk = monthKeyOf(todayKey());
  const tKey = todayKey();
  const nDays = daysInMonth(mk);
  const dates = Array.from({
    length: nDays
  }, (_, i) => `${mk}-${String(i + 1).padStart(2, "0")}`);
  const shown = mk === currentMk ? dates.filter(k => k <= tKey) : dates;
  const logs = data.logs[child.id] || {};
  const [choreEditOpen, setChoreEditOpen] = useState(false);
  const [bonusPick, setBonusPick] = useState(null); /* { k, field } */
  const chores = choresFor(data, mk, child.id);
  const monthBs = bonusesFor(data, mk);
  const toggleChore = (k, choreId) => update(d => {
    ensureMonthChores(d, monthKeyOf(k), child.id);
    const byDate = d.logs[child.id] || (d.logs[child.id] = {});
    const e = byDate[k] || (byDate[k] = emptyEntry());
    const i = e.chores.indexOf(choreId);
    if (i >= 0) e.chores.splice(i, 1);else e.chores.push(choreId);
    if (entryIsEmpty(e)) delete byDate[k];
    return d;
  });
  const setBonus = (k, field, val) => update(d => {
    ensureMonthChores(d, monthKeyOf(k), child.id);
    const byDate = d.logs[child.id] || (d.logs[child.id] = {});
    const e = byDate[k] || (byDate[k] = emptyEntry());
    e[field] = Math.max(0, parseInt(val, 10) || 0);
    if (entryIsEmpty(e)) delete byDate[k];
    return d;
  });
  const setBasePay = val => update(d => {
    if (!d.basePay) d.basePay = {};
    if (!d.basePay[child.id]) d.basePay[child.id] = {};
    const v = Math.max(0, parseInt(val, 10) || 0);
    if (v > 0) d.basePay[child.id][mk] = v;else delete d.basePay[child.id][mk];
    return d;
  });

  /* 設定の既定値（お手伝い＋ボーナス枠）をこの月に挿入（重複はスキップ） */
  const insertDefaultChores = () => update(d => {
    const list = ensureMonthChores(d, mk, child.id);
    const existing = new Set(list.map(c => c.id));
    d.chores.forEach(c => {
      if (c.name && c.name.trim() && !existing.has(c.id)) list.push(clone(c));
    });
    if (!d.monthBonuses) d.monthBonuses = {};
    if (!d.monthBonuses[mk]) d.monthBonuses[mk] = [];
    const bexisting = new Set(d.monthBonuses[mk].map(b => b.id));
    (d.bonuses || []).forEach(b => {
      if (b.name && b.name.trim() && !bexisting.has(b.id)) {
        d.monthBonuses[mk].push({
          ...b
        });
      }
    });
    return d;
  });

  /* この月・この子供のお手伝いリストの編集（設定の既定値・他の月/他の子供には影響しない） */
  const editMonthChore = (choreId, field, val) => update(d => {
    const list = ensureMonthChores(d, mk, child.id);
    const c = list.find(x => x.id === choreId);
    if (c) c[field] = field === "amount" ? Math.max(0, parseInt(val, 10) || 0) : val;
    return d;
  });
  const addMonthChore = (nm, amt) => update(d => {
    const list = ensureMonthChores(d, mk, child.id);
    list.push({
      id: uid(),
      name: nm,
      amount: amt
    });
    return d;
  });
  const removeMonthChore = choreId => update(d => {
    const list = ensureMonthChores(d, mk, child.id);
    d.monthChores[mk][child.id] = list.filter(c => c.id !== choreId);
    /* この月・この子供の記録からも該当お手伝いのチェックを削除 */
    const byDate = d.logs[child.id] || {};
    Object.keys(byDate).filter(k => monthKeyOf(k) === mk).forEach(k => {
      byDate[k].chores = (byDate[k].chores || []).filter(x => x !== choreId);
      if (entryIsEmpty(byDate[k])) delete byDate[k];
    });
    return d;
  });
  const reorderMonthChores = newArr => update(d => {
    ensureMonthChores(d, mk, child.id);
    d.monthChores[mk][child.id] = newArr;
    return d;
  });

  /* この月のボーナス枠の編集（設定の既定値・他の月には影響しない） */
  const editMonthBonus = (id, val) => update(d => {
    const b = (d.monthBonuses?.[mk] || []).find(x => x.id === id);
    if (b) b.name = val;
    return d;
  });
  const addMonthBonus = () => update(d => {
    if (!d.monthBonuses) d.monthBonuses = {};
    if (!d.monthBonuses[mk]) d.monthBonuses[mk] = [];
    const list = d.monthBonuses[mk];
    if (list.length >= 2) return d;
    const used = new Set(list.map(b => b.id));
    const slot = !used.has("dad") ? "dad" : "mom";
    const def = (d.bonuses || []).find(b => b.id === slot);
    list.push({
      id: slot,
      name: def && def.name && def.name.trim() ? def.name : slotDefaultName(slot)
    });
    return d;
  });
  const removeMonthBonus = id => update(d => {
    if (!d.monthBonuses?.[mk]) return d;
    d.monthBonuses[mk] = d.monthBonuses[mk].filter(b => b.id !== id);
    /* この月の記録から該当ボーナスの金額も削除 */
    Object.values(d.logs).forEach(byDate => {
      Object.keys(byDate).filter(k => monthKeyOf(k) === mk).forEach(k => {
        delete byDate[k][id];
        if (entryIsEmpty(byDate[k])) delete byDate[k];
      });
    });
    return d;
  });
  const reorderMonthBonuses = newArr => update(d => {
    if (!d.monthBonuses) d.monthBonuses = {};
    d.monthBonuses[mk] = newArr;
    return d;
  });
  const sum = monthSummary(data, child.id, mk);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(ChildSeg, {
    children: data.children,
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      margin: "12px 0 4px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMk(addMonths(mk, -1)),
    style: navBtn,
    "aria-label": "\u524D\u306E\u6708"
  }, /*#__PURE__*/React.createElement(ChevronLeft, {
    size: 20,
    color: COLORS.blue
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: COLORS.ink
    }
  }, monthLabelOf(mk)), mk !== currentMk && /*#__PURE__*/React.createElement("button", {
    onClick: () => setMk(currentMk),
    style: {
      border: "none",
      background: "transparent",
      color: COLORS.blue,
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      marginLeft: 8,
      fontFamily: FONT
    }
  }, "\u4ECA\u6708\u3078")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMk(addMonths(mk, 1)),
    disabled: mk === currentMk,
    style: {
      ...navBtn,
      opacity: mk === currentMk ? 0.3 : 1
    },
    "aria-label": "\u6B21\u306E\u6708"
  }, /*#__PURE__*/React.createElement(ChevronRight, {
    size: 20,
    color: COLORS.blue
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      background: tint(child.color, 0.1),
      border: `1px solid ${tint(child.color, 0.18)}`,
      padding: "14px 18px",
      margin: "8px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: child.color
    }
  }, childLabel(child)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 12,
      fontWeight: 600,
      color: COLORS.sub,
      marginRight: 6
    }
  }, "\u5408\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: COLORS.ink
    }
  }, /*#__PURE__*/React.createElement(Yen, {
    n: sum.total
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 8,
      fontSize: 13,
      color: COLORS.sub,
      minHeight: 30
    }
  }, "\u57FA\u672C\u7D66", /*#__PURE__*/React.createElement(BonusCell, {
    value: sum.basePay,
    wide: true,
    onClick: () => setBonusPick({
      field: "base"
    })
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLORS.ink,
      fontSize: 12
    }
  }, "\u5186")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 6,
      fontSize: 13,
      color: COLORS.sub,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u304A\u624B\u4F1D\u3044 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: COLORS.ink
    }
  }, /*#__PURE__*/React.createElement(Yen, {
    n: sum.choreSum
  }))), ["dad", "mom"].filter(slot => monthBs.some(b => b.id === slot) || sum[slot] > 0).map(slot => /*#__PURE__*/React.createElement("span", {
    key: slot
  }, bonusName(data, mk, slot), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: COLORS.ink
    }
  }, /*#__PURE__*/React.createElement(Yen, {
    n: sum[slot]
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: insertDefaultChores,
    style: {
      border: `1px solid ${COLORS.line}`,
      background: "#fff",
      borderRadius: 10,
      padding: "7px 12px",
      fontSize: 13,
      fontWeight: 700,
      color: COLORS.blue,
      cursor: "pointer",
      fontFamily: FONT,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(ListPlus, {
    size: 15
  }), " \u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setChoreEditOpen(true),
    style: {
      border: `1px solid ${COLORS.line}`,
      background: "#fff",
      borderRadius: 10,
      padding: "7px 12px",
      fontSize: 13,
      fontWeight: 700,
      color: COLORS.blue,
      cursor: "pointer",
      fontFamily: FONT,
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Pencil, {
    size: 14
  }), " \u304A\u624B\u4F1D\u3044\u3092\u7DE8\u96C6"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      overflow: "hidden",
      minWidth: 96 + chores.length * 62 + monthBs.length * 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 44,
      background: tint(child.color, 0.9),
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...cellDate,
      fontWeight: 700
    }
  }, "\u65E5\u4ED8"), chores.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      ...cellChore,
      fontWeight: 700,
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.85
    }
  }, /*#__PURE__*/React.createElement(Yen, {
    n: Number(c.amount) || 0
  })))), monthBs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      ...cellBonus,
      fontWeight: 700,
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "100%",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: 0.85
    }
  }, "\u30DC\u30FC\u30CA\u30B9")))), shown.map((k, i) => {
    const e = logs[k] || emptyEntry();
    const d = fromKey(k);
    const wd = d.getDay();
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        alignItems: "center",
        height: 44,
        background: i % 2 ? "#FAFAFB" : "#fff",
        borderTop: `1px solid ${COLORS.line}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...cellDate,
        color: wd === 0 ? COLORS.red : wd === 6 ? COLORS.blue : COLORS.ink
      }
    }, d.getDate(), "\u65E5\uFF08", WEEKDAYS[wd], "\uFF09"), chores.map(c => {
      const on = (e.chores || []).includes(c.id);
      return /*#__PURE__*/React.createElement("div", {
        key: c.id,
        style: cellChore
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => toggleChore(k, c.id),
        "aria-label": `${c.name} ${on ? "取り消す" : "完了"}`,
        style: {
          ...tapCheck,
          background: on ? child.color : "transparent",
          border: `1.5px solid ${on ? child.color : COLORS.line}`
        }
      }, on && /*#__PURE__*/React.createElement(Check, {
        size: 15,
        color: "#fff",
        strokeWidth: 3.5
      })));
    }), monthBs.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: cellBonus
    }, /*#__PURE__*/React.createElement(BonusCell, {
      value: e[b.id],
      onClick: () => setBonusPick({
        k,
        field: b.id
      })
    }))));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 16px 0",
      padding: "14px 16px",
      fontSize: 12,
      color: COLORS.sub,
      lineHeight: 1.6
    }
  }, chores.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px"
    }
  }, "\u3053\u306E\u6708\u306E\u304A\u624B\u4F1D\u3044\u306F\u307E\u3060\u7A7A\u3067\u3059\u3002\u300C\u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8\u300D\u3092\u62BC\u3059\u3068\u8A2D\u5B9A\u306E\u65E2\u5B9A\u5024\uFF08\u304A\u624B\u4F1D\u3044\u3068\u30DC\u30FC\u30CA\u30B9\u67A0\uFF09\u304C\u5165\u308A\u307E\u3059\u3002\u300C\u304A\u624B\u4F1D\u3044\u3092\u7DE8\u96C6\u300D\u304B\u3089\u500B\u5225\u306B\u8FFD\u52A0\u3082\u3067\u304D\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u30C1\u30A7\u30C3\u30AF\u3092\u30BF\u30C3\u30D7\u3057\u3066\u8A18\u9332\u3002\u30DC\u30FC\u30CA\u30B9\u306F\u91D1\u984D\u3092\u30BF\u30C3\u30D7\u3057\u3066\u9078\u629E\u3067\u304D\u307E\u3059\u3002\u57FA\u672C\u7D66\u306F\u4E0A\u306E\u30AB\u30FC\u30C9\u3067\u6708\u3054\u3068\u306B\u5165\u529B\u3057\u307E\u3059\u3002\u304A\u624B\u4F1D\u3044\u3068\u30DC\u30FC\u30CA\u30B9\u67A0\u306F\u300C\u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8\u300D\u3067\u65E2\u5B9A\u5024\u3092\u633F\u5165\u3059\u308B\u304B\u3001\u300C\u304A\u624B\u4F1D\u3044\u3092\u7DE8\u96C6\u300D\u3067\u3053\u306E\u6708\u3060\u3051\u8FFD\u52A0\u30FB\u5909\u66F4\u30FB\u524A\u9664\u3067\u304D\u307E\u3059\u3002\u524D\u306E\u6708\u306B\u623B\u3063\u3066\u3044\u3064\u3067\u3082\u4FEE\u6B63\u3067\u304D\u307E\u3059\u3002")), bonusPick && /*#__PURE__*/React.createElement(BonusPickerModal, {
    title: bonusPick.field === "base" ? `基本給（${monthLabelOf(mk)}）` : `${fromKey(bonusPick.k).getMonth() + 1}月${fromKey(bonusPick.k).getDate()}日・${bonusName(data, mk, bonusPick.field)}`,
    value: bonusPick.field === "base" ? sum.basePay : (logs[bonusPick.k] || {})[bonusPick.field] || 0,
    color: child.color,
    onSelect: v => {
      if (bonusPick.field === "base") setBasePay(v);else setBonus(bonusPick.k, bonusPick.field, v);
      setBonusPick(null);
    },
    onClose: () => setBonusPick(null)
  }), choreEditOpen && /*#__PURE__*/React.createElement(ChoreEditModal, {
    chores: chores,
    bonuses: monthBs,
    mk: mk,
    childName: childLabel(child),
    color: child.color,
    onEdit: editMonthChore,
    onAdd: addMonthChore,
    onRemove: removeMonthChore,
    onReorder: reorderMonthChores,
    onBonusEdit: editMonthBonus,
    onBonusAdd: addMonthBonus,
    onBonusRemove: removeMonthBonus,
    onBonusReorder: reorderMonthBonuses,
    onClose: () => setChoreEditOpen(false)
  }));
}

/* この月のお手伝い編集モーダル（内容・金額・追加・削除、ボーナス枠も編集可） */
function ChoreEditModal({
  chores,
  bonuses,
  mk,
  childName,
  color,
  onEdit,
  onAdd,
  onRemove,
  onReorder,
  onBonusEdit,
  onBonusAdd,
  onBonusRemove,
  onBonusReorder,
  onClose
}) {
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [pendingDelete, setPendingDelete] = useState(null);
  const add = () => {
    const nm = newName.trim();
    const amt = parseInt(newAmount, 10);
    if (!nm || !amt || amt <= 0) return;
    onAdd(nm, amt);
    setNewName("");
    setNewAmount("");
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      zIndex: 1000,
      fontFamily: FONT
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 520,
      background: COLORS.bg,
      borderRadius: "20px 20px 0 0",
      padding: "18px 16px calc(18px + env(safe-area-inset-bottom))",
      maxHeight: "75vh",
      overflowY: "auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: COLORS.ink
    }
  }, monthLabelOf(mk), "\u306E\u304A\u624B\u4F1D\u3044\uFF08", childName, "\uFF09"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginLeft: "auto",
      border: "none",
      background: "transparent",
      color: COLORS.blue,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: FONT,
      padding: 6
    }
  }, "\u5B8C\u4E86")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: COLORS.sub,
      margin: "0 2px 12px",
      lineHeight: 1.6
    }
  }, "\u304A\u624B\u4F1D\u3044\u9805\u76EE\u306F\u3053\u306E\u6708\u30FB\u3053\u306E\u5B50\u4F9B\u3060\u3051\u306E\u5185\u5BB9\u3067\u3059\uFF08\u30DC\u30FC\u30CA\u30B9\u67A0\u306F\u5B50\u4F9B\u5171\u901A\uFF09\u3002\u4ED6\u306E\u6708\u30FB\u4ED6\u306E\u5B50\u4F9B\u30FB\u8A2D\u5B9A\u306E\u65E2\u5B9A\u5024\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002\u524A\u9664\u3059\u308B\u3068\u3001\u3053\u306E\u6708\u306E\u30C1\u30A7\u30C3\u30AF\u3084\u5165\u529B\u91D1\u984D\u3082\u6D88\u3048\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement(DragReorderList, {
    items: chores,
    onReorder: onReorder,
    renderRow: (c, i, {
      wrapStyle,
      isDragging,
      dragHandleProps
    }) => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      "data-drag-row": true,
      style: {
        ...rowStatic,
        borderTop: i === 0 ? "none" : `1px solid ${COLORS.line}`,
        background: isDragging ? "#fff" : "transparent",
        boxShadow: isDragging ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
        borderRadius: isDragging ? 12 : 0,
        ...wrapStyle
      }
    }, /*#__PURE__*/React.createElement(DragHandle, dragHandleProps), /*#__PURE__*/React.createElement("input", {
      value: c.name,
      onChange: e => onEdit(c.id, "name", e.target.value),
      style: {
        ...textInput,
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(BonusInput, {
      value: Number(c.amount) || 0,
      onCommit: v => onEdit(c.id, "amount", v),
      color: color,
      wide: true
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: COLORS.sub,
        fontSize: 13
      }
    }, "\u5186"), pendingDelete === c.id ? /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        onRemove(c.id);
        setPendingDelete(null);
      },
      style: {
        border: "none",
        background: COLORS.red,
        color: "#fff",
        borderRadius: 8,
        padding: "6px 10px",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: FONT,
        flexShrink: 0
      }
    }, "\u524A\u9664\u3059\u308B") : /*#__PURE__*/React.createElement("button", {
      onClick: () => setPendingDelete(c.id),
      style: iconBtn,
      "aria-label": "\u524A\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      size: 18,
      color: COLORS.red
    })))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rowStatic,
      borderTop: chores.length ? `1px solid ${COLORS.line}` : "none",
      background: "#FAFAFB"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newName,
    onChange: e => setNewName(e.target.value),
    placeholder: "\u65B0\u3057\u3044\u304A\u624B\u4F1D\u3044",
    style: {
      ...textInput,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newAmount,
    onChange: e => setNewAmount(e.target.value.replace(/[^0-9]/g, "")),
    inputMode: "numeric",
    placeholder: "0",
    style: {
      ...textInput,
      width: 56,
      textAlign: "right"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: COLORS.sub,
      fontSize: 13
    }
  }, "\u5186"), /*#__PURE__*/React.createElement("button", {
    onClick: add,
    style: iconBtn,
    "aria-label": "\u8FFD\u52A0"
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 20,
    color: COLORS.blue
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: COLORS.sub,
      margin: "16px 2px 6px"
    }
  }, "\u30DC\u30FC\u30CA\u30B9\uFF08\u6700\u59272\u3064\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement(DragReorderList, {
    items: bonuses || [],
    onReorder: onBonusReorder,
    renderRow: (b, i, {
      wrapStyle,
      isDragging,
      dragHandleProps
    }) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      "data-drag-row": true,
      style: {
        ...rowStatic,
        borderTop: i === 0 ? "none" : `1px solid ${COLORS.line}`,
        background: isDragging ? "#fff" : "transparent",
        boxShadow: isDragging ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
        borderRadius: isDragging ? 12 : 0,
        ...wrapStyle
      }
    }, /*#__PURE__*/React.createElement(DragHandle, dragHandleProps), /*#__PURE__*/React.createElement("input", {
      value: b.name,
      onChange: e => onBonusEdit(b.id, e.target.value),
      placeholder: "\u30DC\u30FC\u30CA\u30B9\u540D",
      style: {
        ...textInput,
        flex: 1
      }
    }), pendingDelete === b.id ? /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        onBonusRemove(b.id);
        setPendingDelete(null);
      },
      style: {
        border: "none",
        background: COLORS.red,
        color: "#fff",
        borderRadius: 8,
        padding: "6px 10px",
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        fontFamily: FONT,
        flexShrink: 0
      }
    }, "\u524A\u9664\u3059\u308B") : /*#__PURE__*/React.createElement("button", {
      onClick: () => setPendingDelete(b.id),
      style: iconBtn,
      "aria-label": "\u524A\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      size: 18,
      color: COLORS.red
    })))
  }), (bonuses || []).length < 2 && /*#__PURE__*/React.createElement("button", {
    onClick: onBonusAdd,
    style: {
      ...rowStatic,
      width: "100%",
      border: "none",
      borderTop: (bonuses || []).length ? `1px solid ${COLORS.line}` : "none",
      background: "#FAFAFB",
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 15,
      fontWeight: 600,
      color: COLORS.blue,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }), " \u30DC\u30FC\u30CA\u30B9\u67A0\u3092\u8FFD\u52A0"))));
}

/* ボーナス選択肢：10〜100円は10円刻み、100〜1000円は100円刻み、1000〜10000円は1000円刻み */
const BONUS_GROUPS = [{
  label: "10円きざみ",
  vals: [10, 20, 30, 40, 50, 60, 70, 80, 90]
}, {
  label: "100円きざみ",
  vals: [100, 200, 300, 400, 500, 600, 700, 800, 900]
}, {
  label: "1000円きざみ",
  vals: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
}];

/* ボーナスセル（タップで金額選択モーダルを開く） */
function BonusCell({
  value,
  onClick,
  wide
}) {
  const v = Number(value) || 0;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: wide ? 82 : 54,
      height: 30,
      borderRadius: 8,
      border: `1.5px solid ${COLORS.line}`,
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "flex-end",
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 13,
      fontWeight: 700,
      color: v > 0 ? COLORS.ink : COLORS.sub,
      padding: "0 8px 0 0",
      boxSizing: "border-box",
      fontVariantNumeric: "tabular-nums"
    }
  }, v > 0 ? v.toLocaleString("ja-JP") : "–");
}

/* 金額選択モーダル */
function BonusPickerModal({
  title,
  value,
  color,
  onSelect,
  onClose
}) {
  const cur = Number(value) || 0;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.4)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      zIndex: 1000,
      fontFamily: FONT
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 520,
      background: COLORS.bg,
      borderRadius: "20px 20px 0 0",
      padding: "18px 16px calc(18px + env(safe-area-inset-bottom))",
      maxHeight: "75vh",
      overflowY: "auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: COLORS.ink
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      marginLeft: "auto",
      border: "none",
      background: "transparent",
      color: COLORS.blue,
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: FONT,
      padding: 6
    }
  }, "\u9589\u3058\u308B")), BONUS_GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.label,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 8
    }
  }, g.vals.map(v => {
    const on = v === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => onSelect(v),
      style: {
        border: on ? `2px solid ${color}` : `1.5px solid ${COLORS.line}`,
        background: on ? tint(color, 0.12) : "#fff",
        borderRadius: 10,
        padding: "11px 0",
        fontSize: 14,
        fontWeight: 700,
        color: COLORS.ink,
        cursor: "pointer",
        fontFamily: FONT,
        fontVariantNumeric: "tabular-nums"
      }
    }, v.toLocaleString("ja-JP"));
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: () => onSelect(0),
    style: {
      width: "100%",
      border: `1.5px solid ${COLORS.line}`,
      background: "#fff",
      borderRadius: 12,
      padding: "13px 0",
      fontSize: 15,
      fontWeight: 700,
      color: COLORS.red,
      cursor: "pointer",
      fontFamily: FONT
    }
  }, "\u306A\u3057\uFF08\u30AF\u30EA\u30A2\uFF09")));
}

/* ボーナス金額のセル入力（確定はフォーカスアウト時） */
function BonusInput({
  value,
  onCommit,
  color,
  wide
}) {
  const [text, setText] = useState(value ? String(value) : "");
  useEffect(() => {
    setText(value ? String(value) : "");
  }, [value]);
  return /*#__PURE__*/React.createElement("input", {
    value: text,
    onChange: e => setText(e.target.value.replace(/[^0-9]/g, "")),
    onBlur: () => onCommit(text),
    onKeyDown: e => e.key === "Enter" && e.target.blur(),
    inputMode: "numeric",
    placeholder: wide ? "0" : "–",
    style: {
      width: wide ? 72 : 52,
      border: "none",
      outline: "none",
      background: "transparent",
      textAlign: wide ? "right" : "center",
      fontSize: 16,
      /* 16px未満だとiOSがフォーカス時に自動ズームするため */
      fontWeight: 700,
      color: COLORS.ink,
      fontFamily: FONT,
      padding: "2px 0"
    }
  });
}

/* ---------- 履歴（月別に自動集計・清算不要） ---------- */

function HistoryView({
  data
}) {
  const [open, setOpen] = useState(null);
  const months = monthsWithData(data);
  const currentMk = monthKeyOf(todayKey());
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 28px"
    }
  }, /*#__PURE__*/React.createElement(H, {
    title: "\u5C65\u6B74"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: COLORS.sub,
      margin: "-8px 4px 16px",
      lineHeight: 1.6
    }
  }, "\u6708\u3054\u3068\u306E\u5B9F\u7E3E\u304C\u81EA\u52D5\u3067\u96C6\u8A08\u3055\u308C\u307E\u3059\u3002\u4FEE\u6B63\u306F\u30DB\u30FC\u30E0\u3067\u6708\u3092\u623B\u3063\u3066\u884C\u3048\u307E\u3059\u3002"), months.map(mk => {
    const isOpen = open === mk;
    const totals = data.children.map(c => ({
      child: c,
      sum: monthSummary(data, c.id, mk)
    }));
    return /*#__PURE__*/React.createElement("div", {
      key: mk,
      style: {
        ...card,
        padding: 0,
        overflow: "hidden",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? null : mk),
      style: {
        ...row,
        padding: "14px 16px"
      }
    }, isOpen ? /*#__PURE__*/React.createElement(ChevronDown, {
      size: 18,
      color: COLORS.sub
    }) : /*#__PURE__*/React.createElement(ChevronRight, {
      size: 18,
      color: COLORS.sub
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        fontWeight: 700,
        color: COLORS.ink,
        marginLeft: 4
      }
    }, monthLabelOf(mk), mk === currentMk && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: COLORS.blue,
        marginLeft: 6
      }
    }, "\u4ECA\u6708")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 10
      }
    }, totals.map(({
      child,
      sum
    }) => /*#__PURE__*/React.createElement("span", {
      key: child.id,
      style: {
        fontSize: 13,
        color: COLORS.sub,
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: child.color
      }
    }, childLabel(child)), " ", /*#__PURE__*/React.createElement(Yen, {
      n: sum.total
    }))))), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: `1px solid ${COLORS.line}`,
        padding: "4px 16px 12px"
      }
    }, totals.map(({
      child,
      sum
    }) => {
      const dn = bonusName(data, mk, "dad");
      const mn = bonusName(data, mk, "mom");
      const st = data.settlement || defaultSettlement();
      const partDefs = [{
        key: "base",
        label: "基本給",
        val: sum.basePay
      }, {
        key: "chores",
        label: "お手伝い",
        val: sum.choreSum
      }, ...["dad", "mom"].filter(slot => (data.monthBonuses?.[mk] || []).some(b => b.id === slot) || sum[slot] > 0).map(slot => ({
        key: slot,
        label: bonusName(data, mk, slot),
        val: sum[slot]
      }))];
      const payerLines = st.split ? (st.payers || []).map(p => {
        const active = partDefs.filter(pd => p.parts && p.parts[pd.key]);
        if (active.length === 0) return null;
        return {
          id: p.id,
          label: `${payerLabel(p)}清算（${active.map(pd => pd.label).join("＋")}）`,
          amount: active.reduce((s, pd) => s + pd.val, 0)
        };
      }).filter(Boolean) : [];
      return /*#__PURE__*/React.createElement("div", {
        key: child.id,
        style: {
          padding: "10px 0"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 6
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          ...dot,
          background: child.color
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: COLORS.ink
        }
      }, childLabel(child)), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          fontWeight: 800,
          color: child.color
        }
      }, /*#__PURE__*/React.createElement(Yen, {
        n: sum.total
      }))), /*#__PURE__*/React.createElement(Line, {
        label: "\u57FA\u672C\u7D66",
        val: /*#__PURE__*/React.createElement(Yen, {
          n: sum.basePay
        })
      }), sum.items.map((it, idx) => /*#__PURE__*/React.createElement(Line, {
        key: idx,
        label: `${it.name} × ${it.count}回`,
        val: /*#__PURE__*/React.createElement(Yen, {
          n: it.amount * it.count
        })
      })), sum.dad > 0 && /*#__PURE__*/React.createElement(Line, {
        label: dn,
        val: /*#__PURE__*/React.createElement(Yen, {
          n: sum.dad
        })
      }), sum.mom > 0 && /*#__PURE__*/React.createElement(Line, {
        label: mn,
        val: /*#__PURE__*/React.createElement(Yen, {
          n: sum.mom
        })
      }), payerLines.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          borderTop: `1px solid ${COLORS.line}`,
          margin: "6px 0 3px"
        }
      }), payerLines.map(pl => /*#__PURE__*/React.createElement(Line, {
        key: pl.id,
        label: pl.label,
        val: /*#__PURE__*/React.createElement(Yen, {
          n: pl.amount
        }),
        bold: true
      })));
    })));
  }));
}
function Line({
  label,
  val,
  bold
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      fontSize: 14,
      color: COLORS.ink,
      padding: "3px 0 3px 20px",
      fontWeight: bold ? 800 : 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: bold ? COLORS.ink : COLORS.sub,
      fontWeight: bold ? 800 : 400
    }
  }, val));
}

/* ---------- 設定 ---------- */

function SettingsView({
  data,
  update
}) {
  const addChore = () => update(d => {
    if (d.chores.length >= 10) return d;
    d.chores.push({
      id: uid(),
      name: "",
      amount: 0
    });
    return d;
  });
  const removeChore = id => update(d => {
    /* 既定値リストから削除するだけ。
       月別リスト（記録が始まった月）は固定済みなので過去分には影響しない */
    d.chores = d.chores.filter(c => c.id !== id);
    return d;
  });
  const editChore = (id, field, val) => update(d => {
    const c = d.chores.find(x => x.id === id);
    if (c) c[field] = field === "amount" ? parseInt(val, 10) || 0 : val;
    return d;
  });
  const editChild = (cid, val) => update(d => {
    const c = d.children.find(x => x.id === cid);
    if (c) c.name = val;
    return d;
  });

  /* ボーナス枠の既定値（最大2つ） */
  const editBonus = (id, val) => update(d => {
    const b = (d.bonuses || []).find(x => x.id === id);
    if (b) b.name = val;
    /* まだ金額が入力されていない（未使用の）月のボーナス枠には、新しい名前をその場で反映する */
    Object.entries(d.monthBonuses || {}).forEach(([mk, list]) => {
      const entry = (list || []).find(x => x.id === id);
      if (entry && !isBonusUsedInMonth(d, mk, id)) entry.name = val;
    });
    return d;
  });
  const removeBonus = id => update(d => {
    d.bonuses = (d.bonuses || []).filter(b => b.id !== id);
    return d;
  });
  const addBonus = () => update(d => {
    if (!d.bonuses) d.bonuses = [];
    if (d.bonuses.length >= 2) return d;
    const used = new Set(d.bonuses.map(b => b.id));
    const slot = !used.has("dad") ? "dad" : "mom";
    d.bonuses.push({
      id: slot,
      name: ""
    });
    return d;
  });

  /* 清算設定 */
  const st = data.settlement || defaultSettlement();
  const toggleSplit = () => update(d => {
    if (!d.settlement) d.settlement = defaultSettlement();
    d.settlement.split = !d.settlement.split;
    return d;
  });
  const editPayerName = (pid, val) => update(d => {
    if (!d.settlement) d.settlement = defaultSettlement();
    const p = d.settlement.payers.find(x => x.id === pid);
    if (p) p.name = val;
    return d;
  });

  /* 項目の振り分け：ONにしたらもう1人からは外す（重複計上を防ぐ） */
  const togglePayerPart = (pid, key) => update(d => {
    if (!d.settlement) d.settlement = defaultSettlement();
    const p = d.settlement.payers.find(x => x.id === pid);
    if (!p) return d;
    if (!p.parts) p.parts = {};
    const next = !p.parts[key];
    p.parts[key] = next;
    if (next) {
      d.settlement.payers.forEach(q => {
        if (q.id !== pid && q.parts) q.parts[key] = false;
      });
    }
    return d;
  });
  const PALETTE = ["#1FAEA6", "#F2789F", "#5A8DEE", "#F5A623", "#8E6FD8"];
  const addChild = () => update(d => {
    if (d.children.length >= 5) return d;
    const used = d.children.map(c => c.color);
    const color = PALETTE.find(p => !used.includes(p)) || PALETTE[d.children.length % 5];
    const id = uid();
    d.children.push({
      id,
      name: "",
      color
    });
    d.logs[id] = {};
    if (!d.basePay) d.basePay = {};
    d.basePay[id] = {};
    return d;
  });
  const [pendingDelete, setPendingDelete] = useState(null);
  const removeChild = cid => update(d => {
    if (d.children.length <= 1) return d;
    d.children = d.children.filter(c => c.id !== cid);
    delete d.logs[cid];
    if (d.basePay) delete d.basePay[cid];
    Object.values(d.monthChores || {}).forEach(byChild => delete byChild[cid]);
    return d;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 16px 28px"
    }
  }, /*#__PURE__*/React.createElement(H, {
    title: "\u8A2D\u5B9A"
  }), /*#__PURE__*/React.createElement(Label, null, "\u5B50\u3069\u3082\uFF08\u6700\u59275\u4EBA\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "hidden",
      marginBottom: 22
    }
  }, data.children.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      ...rowStatic,
      borderTop: i === 0 ? "none" : `1px solid ${COLORS.line}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...dot,
      background: c.color
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: c.name,
    onChange: e => editChild(c.id, e.target.value),
    placeholder: "\u540D\u524D",
    style: {
      ...textInput,
      flex: 1
    }
  }), data.children.length > 1 && (pendingDelete === c.id ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      removeChild(c.id);
      setPendingDelete(null);
    },
    style: {
      border: "none",
      background: COLORS.red,
      color: "#fff",
      borderRadius: 8,
      padding: "6px 10px",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer",
      fontFamily: FONT
    }
  }, "\u8A18\u9332\u3054\u3068\u524A\u9664") : /*#__PURE__*/React.createElement("button", {
    onClick: () => setPendingDelete(c.id),
    style: iconBtn,
    "aria-label": "\u524A\u9664"
  }, /*#__PURE__*/React.createElement(Trash2, {
    size: 18,
    color: COLORS.red
  }))))), data.children.length < 5 && /*#__PURE__*/React.createElement("button", {
    onClick: addChild,
    style: {
      ...rowStatic,
      width: "100%",
      border: "none",
      borderTop: `1px solid ${COLORS.line}`,
      background: "#FAFAFB",
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 15,
      fontWeight: 600,
      color: COLORS.blue,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }), " \u5B50\u3069\u3082\u3092\u8FFD\u52A0")), /*#__PURE__*/React.createElement(Label, null, "\u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8\uFF08\u6700\u592710\u3053\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "visible",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(DragReorderList, {
    items: data.chores,
    onReorder: newArr => update(d => {
      d.chores = newArr;
      return d;
    }),
    renderRow: (c, i, {
      wrapStyle,
      isDragging,
      dragHandleProps
    }) => /*#__PURE__*/React.createElement("div", {
      key: c.id,
      "data-drag-row": true,
      style: {
        ...rowStatic,
        borderTop: i === 0 ? "none" : `1px solid ${COLORS.line}`,
        background: isDragging ? "#fff" : "transparent",
        boxShadow: isDragging ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
        borderRadius: isDragging ? 12 : 0,
        ...wrapStyle
      }
    }, /*#__PURE__*/React.createElement(DragHandle, dragHandleProps), /*#__PURE__*/React.createElement("input", {
      value: c.name,
      onChange: e => editChore(c.id, "name", e.target.value),
      placeholder: "\u304A\u624B\u4F1D\u3044\u306E\u540D\u524D",
      style: {
        ...textInput,
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("input", {
      value: c.amount || "",
      onChange: e => editChore(c.id, "amount", e.target.value),
      inputMode: "numeric",
      placeholder: "0",
      style: {
        ...textInput,
        width: 64,
        textAlign: "right",
        fontWeight: 700
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: COLORS.sub,
        fontSize: 13
      }
    }, "\u5186"), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeChore(c.id),
      style: iconBtn,
      "aria-label": "\u524A\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      size: 18,
      color: COLORS.red
    })))
  }), data.chores.length < 10 && /*#__PURE__*/React.createElement("button", {
    onClick: addChore,
    style: {
      ...rowStatic,
      width: "100%",
      border: "none",
      borderTop: data.chores.length ? `1px solid ${COLORS.line}` : "none",
      background: "#FAFAFB",
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 15,
      fontWeight: 600,
      color: COLORS.blue,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }), " \u304A\u624B\u4F1D\u3044\u3092\u8FFD\u52A0")), /*#__PURE__*/React.createElement(Label, null, "\u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8\uFF08\u30DC\u30FC\u30CA\u30B9\u30FB\u6700\u59272\u3064\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "visible",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(DragReorderList, {
    items: data.bonuses || [],
    onReorder: newArr => update(d => {
      d.bonuses = newArr;
      return d;
    }),
    renderRow: (b, i, {
      wrapStyle,
      isDragging,
      dragHandleProps
    }) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      "data-drag-row": true,
      style: {
        ...rowStatic,
        borderTop: i === 0 ? "none" : `1px solid ${COLORS.line}`,
        background: isDragging ? "#fff" : "transparent",
        boxShadow: isDragging ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
        borderRadius: isDragging ? 12 : 0,
        ...wrapStyle
      }
    }, /*#__PURE__*/React.createElement(DragHandle, dragHandleProps), /*#__PURE__*/React.createElement("input", {
      value: b.name,
      onChange: e => editBonus(b.id, e.target.value),
      placeholder: "\u30DC\u30FC\u30CA\u30B9\u540D",
      style: {
        ...textInput,
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeBonus(b.id),
      style: iconBtn,
      "aria-label": "\u524A\u9664"
    }, /*#__PURE__*/React.createElement(Trash2, {
      size: 18,
      color: COLORS.red
    })))
  }), (data.bonuses || []).length < 2 && /*#__PURE__*/React.createElement("button", {
    onClick: addBonus,
    style: {
      ...rowStatic,
      width: "100%",
      border: "none",
      borderTop: (data.bonuses || []).length ? `1px solid ${COLORS.line}` : "none",
      background: "#FAFAFB",
      cursor: "pointer",
      fontFamily: FONT,
      fontSize: 15,
      fontWeight: 600,
      color: COLORS.blue,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Plus, {
    size: 18
  }), " \u30DC\u30FC\u30CA\u30B9\u67A0\u3092\u8FFD\u52A0")), /*#__PURE__*/React.createElement(Label, null, "\u6E05\u7B97"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...card,
      padding: 0,
      overflow: "hidden",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => toggleSplit(),
    style: {
      ...rowStatic,
      width: "100%",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontFamily: FONT
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: COLORS.ink,
      fontWeight: 600
    }
  }, "\u6E05\u7B97\u3092\u5206\u3051\u308B"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      width: 46,
      height: 28,
      borderRadius: 14,
      background: st.split ? COLORS.green || "#34C759" : "#D1D1D6",
      position: "relative",
      transition: "background 160ms ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: st.split ? 20 : 2,
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
      transition: "left 160ms ease"
    }
  }))), st.split && (st.payers || []).map((p, pi) => {
    const partDefs = [{
      key: "base",
      label: "基本給"
    }, {
      key: "chores",
      label: "お手伝い"
    }, ...(data.bonuses || []).filter(b => b.name && b.name.trim()).map(b => ({
      key: b.id,
      label: b.name.trim()
    }))];
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        borderTop: `1px solid ${COLORS.line}`,
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: COLORS.sub,
        flexShrink: 0
      }
    }, pi + 1, "\u4EBA\u76EE"), /*#__PURE__*/React.createElement("input", {
      value: p.name,
      onChange: e => editPayerName(p.id, e.target.value),
      placeholder: "\u540D\u524D",
      style: {
        ...textInput,
        flex: 1
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, partDefs.map(pd => {
      const on = !!(p.parts && p.parts[pd.key]);
      return /*#__PURE__*/React.createElement("button", {
        key: pd.key,
        onClick: () => togglePayerPart(p.id, pd.key),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          border: on ? `1.5px solid ${COLORS.blue}` : `1.5px solid ${COLORS.line}`,
          background: on ? tint(COLORS.blue, 0.1) : "#fff",
          color: COLORS.ink,
          borderRadius: 999,
          padding: "7px 12px",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          fontFamily: FONT
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 16,
          height: 16,
          borderRadius: 5,
          border: `1.5px solid ${on ? COLORS.blue : COLORS.line}`,
          background: on ? COLORS.blue : "transparent",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0
        }
      }, on && /*#__PURE__*/React.createElement(Check, {
        size: 11,
        color: "#fff",
        strokeWidth: 3.5
      })), pd.label);
    })));
  })), st.split && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: COLORS.sub,
      margin: "-14px 4px 22px",
      lineHeight: 1.7
    }
  }, "\u203B \u30C1\u30A7\u30C3\u30AF\u3057\u305F\u9805\u76EE\u306E\u5408\u8A08\u304C\u3001\u5C65\u6B74\u3067\u305D\u306E\u4EBA\u306E\u6E05\u7B97\u984D\u3068\u3057\u3066\u8868\u793A\u3055\u308C\u307E\u3059\u3002\u9805\u76EE\u306F1\u4EBA\u306B\u3060\u3051\u632F\u308A\u5206\u3051\u3089\u308C\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: COLORS.sub,
      margin: "0 4px",
      lineHeight: 1.7
    }
  }, "\u203B \u3053\u3053\u306E\u304A\u624B\u4F1D\u3044\u3068\u30DC\u30FC\u30CA\u30B9\u67A0\u306F\u81EA\u52D5\u3067\u306F\u6708\u306B\u5165\u308A\u307E\u305B\u3093\u3002\u300C\u304A\u624B\u4F1D\u3044\u300D\u753B\u9762\u306E\u300C\u304A\u624B\u4F1D\u3044\u30BB\u30C3\u30C8\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F\u3068\u304D\u306B\u3001\u305D\u306E\u6708\uFF08\u304A\u624B\u4F1D\u3044\u306F\u305D\u306E\u6642\u898B\u3066\u3044\u308B\u5B50\u4F9B\uFF09\u3078\u633F\u5165\u3055\u308C\u307E\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "\u203B \u633F\u5165\u5F8C\u306F\u6708\u30FB\u5B50\u4F9B\u3054\u3068\u306B\u72EC\u7ACB\u3059\u308B\u305F\u3081\uFF08\u30DC\u30FC\u30CA\u30B9\u67A0\u306F\u5B50\u4F9B\u5171\u901A\uFF09\u3001\u3053\u3053\u3067\u8FFD\u52A0\u30FB\u524A\u9664\u30FB\u5909\u66F4\u3057\u3066\u3082\u5404\u6708\u306B\u306F\u5F71\u97FF\u3057\u307E\u305B\u3093\u3002", /*#__PURE__*/React.createElement("br", null), "\u203B \u7279\u5B9A\u306E\u6708\u3060\u3051\u5185\u5BB9\u3092\u5909\u3048\u305F\u3044\u5834\u5408\u306F\u300C\u304A\u624B\u4F1D\u3044\u3092\u7DE8\u96C6\u300D\u304B\u3089\u3001\u57FA\u672C\u7D66\u306F\u4E0A\u90E8\u30AB\u30FC\u30C9\u3067\u6708\u3054\u3068\u306B\u5165\u529B\u3057\u307E\u3059\u3002"));
}

/* ---------- 共通パーツ ---------- */

function H({
  title
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      color: COLORS.ink,
      margin: "6px 4px 18px"
    }
  }, title);
}
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: COLORS.sub,
      margin: "0 4px 8px",
      letterSpacing: 0.3
    }
  }, children);
}
function TabBar({
  view,
  setView
}) {
  const tabs = [{
    id: "home",
    label: "お手伝い",
    icon: Table
  }, {
    id: "history",
    label: "履歴",
    icon: Clock
  }, {
    id: "settings",
    label: "設定",
    icon: Settings
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      position: "sticky",
      bottom: 0,
      borderTop: `1px solid ${COLORS.line}`,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      paddingBottom: "env(safe-area-inset-bottom)"
    }
  }, tabs.map(t => {
    const on = view === t.id;
    const Icon = t.icon;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setView(t.id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        padding: "8px 0 6px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        color: on ? COLORS.blue : COLORS.sub
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 22,
      strokeWidth: on ? 2.4 : 2
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10.5,
        fontWeight: on ? 700 : 500
      }
    }, t.label));
  }));
}

/* ---------- スタイル ---------- */

const page = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
  maxWidth: 520,
  margin: "0 auto",
  background: COLORS.bg,
  color: COLORS.ink
};
const card = {
  background: COLORS.card,
  borderRadius: 18,
  boxShadow: "0 1px 2px rgba(0,0,0,0.04)"
};
const seg = {
  display: "flex",
  background: "#E3E3E8",
  borderRadius: 12,
  padding: 3,
  gap: 3
};
const segItem = {
  flex: 1,
  border: "none",
  borderRadius: 9,
  padding: "9px 0",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  transition: "background .2s, color .2s",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontFamily: FONT
};
const navBtn = {
  border: "none",
  background: "#fff",
  borderRadius: 10,
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
  flexShrink: 0
};
const row = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  border: "none",
  background: "transparent",
  padding: "15px 16px",
  cursor: "pointer",
  transition: "background .15s",
  fontFamily: FONT
};
const rowStatic = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "12px 14px"
};
const tapCheck = {
  width: 30,
  height: 30,
  borderRadius: 8,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxSizing: "border-box",
  padding: 0,
  transition: "background .12s"
};
const cellDate = {
  width: 96,
  flexShrink: 0,
  padding: "0 8px",
  fontSize: 13,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  height: "100%"
};
const cellChore = {
  width: 62,
  flexShrink: 0,
  padding: 0,
  fontSize: 12,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
};
const cellBonus = {
  width: 60,
  flexShrink: 0,
  padding: 0,
  fontSize: 12,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%"
};
const cellTotal = {
  width: 68,
  flexShrink: 0,
  padding: "0 16px 0 4px",
  fontSize: 13,
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  height: "100%",
  fontVariantNumeric: "tabular-nums"
};
const dot = {
  width: 12,
  height: 12,
  borderRadius: "50%",
  flexShrink: 0
};
const textInput = {
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: 16,
  color: COLORS.ink,
  fontFamily: FONT,
  padding: "2px 0",
  minWidth: 0
};
const iconBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  padding: 6,
  display: "flex",
  alignItems: "center",
  flexShrink: 0
};
const reorderBtn = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  padding: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));