// 範例：處理資料分類的邏輯
const orders = [
    { id: "A001", name: "吳宜安", mode: "A", aud: 357, status: "已支付", note: "大洋路+火車企鵝" },
    { id: "B001", name: "Fliggy", mode: "B", aud: 140, status: "未付款", note: "反向大洋路" },
    { id: "C001", name: "莊閔淇", mode: "C", aud: 30, status: "待付同業", note: "日落駱駝 (52kg)" }
];

// 計算台幣 (匯率 23)
function convertToTWD(aud) {
    return (aud * 23).toLocaleString();
}

// 渲染到畫面上的函式 (示意)
function renderOrders() {
    // 這裡會抓取 Firebase 資料後，判斷 mode 並放入不同的 HTML 區塊
    // 如果 mode === 'C'，特別顯示「體重」欄位
}