// JavaScript 實務：利用 Date 物件完成萬年曆 Perpetual Calendar - 彭彭直播 at 2020/05/01

// in <body>:
// in <script>:
// 資料
let state = null;
// 初始化萬年曆
function init() {
    state = { current: new Date() };
    render();
}
// 根據資料產生畫面
function render() {
    // 取得第一個符合選擇器(selector) 的 tag，此處為 id = "list"
    let list = document.querySelector('#list');
    // 取得該月份第一天
    let date = new Date(state.current.getFullYear(), state.current.getMonth(), 1);
    // 每次畫一天，畫到該月份最後一天
    while (date.getMonth() === state.current.getMonth()) {
        // 畫出一天的格子
        renderDate(date, list);
        // 日期 + 1
        date.setDate(date.getDate() + 1);
    }
}
function renderDate(date, list) {
    let cell = document.createElement('div');
    cell.className = 'date';
    cell.textContent = date.getDate();
    list.appendChild(cell);
}
// 處理流程
init();