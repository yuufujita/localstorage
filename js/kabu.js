// js、jQueryを記述する際はここに記載していく

/* kabu.html
---------------------------- */

//　０．個別株銘柄のデータを定義する配列
let stock = [
  {
    kabu_cd: 1518,
    kabu_name: "三井松島HD",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1605,
    kabu_name: "INPEX",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1662,
    kabu_name: "石油資源開発",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1820,
    kabu_name: "西松建設",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1822,
    kabu_name: "大豊建設",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1887,
    kabu_name: "日本国土開発",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 1928,
    kabu_name: "積水ハウス",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 2389,
    kabu_name: "デジタルHD",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 2768,
    kabu_name: "双日",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 3284,
    kabu_name: "フージャース",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 3541,
    kabu_name: "農業総合研究所",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 3990,
    kabu_name: "UUUM",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4005,
    kabu_name: "住友化学",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4042,
    kabu_name: "東ソー",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4310,
    kabu_name: "DI",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4587,
    kabu_name: "ぺプチドリーム",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4689,
    kabu_name: "Zホールディングス",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4755,
    kabu_name: "楽天グループ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4845,
    kabu_name: "スカラ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4902,
    kabu_name: "コニカミノルタ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 4932,
    kabu_name: "アルマード",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5020,
    kabu_name: "ENEOS",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5140,
    kabu_name: "山一電機",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5201,
    kabu_name: "AGC",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5208,
    kabu_name: "有沢製鉄所",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5334,
    kabu_name: "日本特殊陶業",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5401,
    kabu_name: "日本製鉄",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5411,
    kabu_name: "JFE",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5541,
    kabu_name: "太平洋金属",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 5901,
    kabu_name: "東洋製罐",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 6035,
    kabu_name: "IRジャパン",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 6047,
    kabu_name: "Gunocy",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 6178,
    kabu_name: "日本郵政",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 6445,
    kabu_name: "ジャノメ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7239,
    kabu_name: "タチエス",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7453,
    kabu_name: "良品計画",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7494,
    kabu_name: "コナカ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7844,
    kabu_name: "マーベラス",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7972,
    kabu_name: "イトーキ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 7974,
    kabu_name: "任天堂",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8005,
    kabu_name: "スクロール",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8003,
    kabu_name: "極東貿易",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8150,
    kabu_name: "三信電気",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8304,
    kabu_name: "あおぞら",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8308,
    kabu_name: "りそなHD",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8595,
    kabu_name: "ジャフコグループ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8601,
    kabu_name: "大和証券G",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8750,
    kabu_name: "第一生命HD",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8766,
    kabu_name: "東京海上",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 8897,
    kabu_name: "タカラレーベン",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9101,
    kabu_name: "日本郵船",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9104,
    kabu_name: "商船三井",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9308,
    kabu_name: "乾汽船",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9434,
    kabu_name: "ソフトバンク",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9492,
    kabu_name: "コネクシオ",
    cost: "",
    dividend: "",
    profit: "",
  },
  {
    kabu_cd: 9625,
    kabu_name: "セレスポ",
    cost: "",
    dividend: "",
    profit: "",
  },
];

//　１.入力欄を作成する　----------------------------
function createTable() {
  // 入力欄の要素を取得
  const table = document.getElementById("stock-table");

  // 入力欄のヘッダ行を作成(javascript)
  const headerRow = document.createElement("tr");
  const headers = [
    "コード",
    "銘柄名",
    "取得価格",
    "税引後配当金",
    "税引前売却益",
  ];
  headers.forEach(function (headerText) {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  });
  table.appendChild(headerRow);

  // 入力欄のデータ行を作成(javascript)
  stock.forEach(function (data) {
    const dataRow = document.createElement("tr");
    Object.values(data).forEach(function (value) {
      const dataCell = document.createElement("td");

      // dividendとprofitのセルを入力可能な<input>要素にする
      if (value === "") {
        const input = document.createElement("input");
        input.type = "text";
        dataCell.appendChild(input);
        dataCell.appendChild(document.createTextNode("円"));
      } else {
        dataCell.textContent = value;
      }

      dataRow.appendChild(dataCell);
    });
    table.appendChild(dataRow);
  });
}

// ページ読み込み時に入力欄を作成
createTable();

// オプションの値が変化した時のイベントハンドラを設定
$("select[name='half-period']").on("change", function () {
  // 選択されたoptionの値を取得
  const selectedValue = $(this).val();

  // ローカルストレージから一致するキーのデータを取得し"data"に格納
  const data = localStorage.getItem(selectedValue);

  // データが存在する場合は表示を更新する
  if (data) {
    // ローカルストレージから取得した"data"をJSON形式からオブジェクトにパース
    const parsedData = JSON.parse(data);

    // ”stock-table”の内容をクリア
    $("#stock-table").empty();

    // 入力欄のヘッダ行を作成(jQuery)
    const headerRow = $("<tr></tr>");
    const headers = [
      "コード",
      "銘柄名",
      "取得価格",
      "税引後配当金",
      "税引前売却益",
    ];
    headers.forEach(function (headerText) {
      const headerCell = $("<th></th>").text(headerText);
      headerRow.append(headerCell);
    });
    $("#stock-table").append(headerRow);

    // 入力欄のデータ行を作成(jQuery)
    parsedData.stockTable.forEach(function (rowData) {
      const dataRow = $("<tr></tr>");

      // 配列の1番目以降の要素を表示する
      for (let i = 1; i < Object.keys(rowData).length; i++) {
        const value = rowData[Object.keys(rowData)[i]];
        const dataCell = $("<td></td>");

        // cost、dividend、profitのセルを入力可能な<input>要素にする
        // i === 3 ||i === 4 || i === 5以外の指定をしたい
        if (i === 3 || i === 4 || i === 5) {
          const input = $("<input>").attr("type", "text").val(value);
          dataCell.append(input);
          dataCell.append("円");
        } else {
          dataCell.text(value);
        }

        dataRow.append(dataCell);
      }

      $("#stock-table").append(dataRow);
    });
  } else {
    // データが存在しない場合はstock-tableの内容をクリア
    $("#stock-table").empty();
    createTable();
  }
});

//　２．ローカルストレージのデータを表示する　----------------------------
$(document).ready(function () {
  function displayData() {
    // ローカルストレージ表示欄の要素を取得
    const table = $("#stock-table_registered tbody");

    // ローカルストレージのデータを取得
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      // "kabu"で始まるキーのデータのみ処理する
      if (key.startsWith("kabu")) {
        const data = JSON.parse(localStorage.getItem(key));

        // データが存在し、"stockTable"が配列であることを確認
        if (data && Array.isArray(data.stockTable)) {
          // ローカルストレージ表示欄のデータ行を作成
          data.stockTable.forEach(function (stockData) {
            const dataRow = $("<tr></tr>");

            // ローカルストレージの各項目をセルに表示
            Object.values(stockData).forEach(function (value) {
              const dataCell = $("<td></td>");
              dataCell.text(value);
              dataRow.append(dataCell);
            });

            table.append(dataRow);
          });
        }
      }
    }
  }

  // ページ読み込み時にデータを表示
  displayData();
  $("#stock-table_kabu_half_period").hide();
  $("#chartcontainer").hide();
  $("#stock-table_kabu_cd").hide();
});

// ローカルストレージ登録済データ表示蘭のフィルタが変わったらフィルタの値を取得
$(document).ready(function () {
  $("select[name='sum']").on("change", function () {
    const selectedValue = $(this).val();

    // 半期合算値の場合
    if (selectedValue === "kabu_half_period") {
      const sumByKabuHalfPeriod = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("kabu")) {
          const data = JSON.parse(localStorage.getItem(key));

          if (data && Array.isArray(data.stockTable)) {
            data.stockTable.forEach(function (item) {
              const halfPeriod = item.half_period;
              const cost = item.cost ? parseInt(item.cost) : 0;
              const dividend = item.dividend ? parseInt(item.dividend) : 0;
              const profit = item.profit ? parseInt(item.profit) : 0;

              if (sumByKabuHalfPeriod.hasOwnProperty(halfPeriod)) {
                sumByKabuHalfPeriod[halfPeriod].cost += cost;
                sumByKabuHalfPeriod[halfPeriod].dividend += dividend;
                sumByKabuHalfPeriod[halfPeriod].profit += profit;
              } else {
                sumByKabuHalfPeriod[halfPeriod] = {
                  half_period: halfPeriod,
                  half_period_name: item.half_period,
                  cost: cost,
                  dividend: dividend,
                  profit: profit,
                };
              }
            });
          }
        }
      }

      // テーブル要素を作成
      const table = $("<table></table>");

      // テーブルのヘッダ行を作成
      const tableHeader = $("<tr></tr>");
      tableHeader.append("<th>時期</th>");
      tableHeader.append("<th>取得価格</th>");
      tableHeader.append("<th>税引後配当金</th>");
      tableHeader.append("<th>税引前売却益</th>");
      tableHeader.append("<th>税引後売却益</th>");
      table.append(tableHeader);

      // テーブルのデータ行を作成
      Object.keys(sumByKabuHalfPeriod)
        .sort() // キーでソート
        // .sort((a, b) => a.half_period.localeCompare(b.half_period))
        .forEach(function (key) {
          const item = sumByKabuHalfPeriod[key];
          const tableRow = $("<tr></tr>");
          tableRow.append(`<td>${item.half_period_name}</td>`);
          tableRow.append(`<td>${item.cost.toLocaleString()}</td>`);
          tableRow.append(`<td>${item.dividend.toLocaleString()}</td>`);
          tableRow.append(`<td>${item.profit.toLocaleString()}</td>`);
          // 税引後利益に 79.685% を乗算して表示
          const taxedProfit = Math.floor(item.profit * 0.79685);
          tableRow.append(`<td>${taxedProfit.toLocaleString()}</td>`);
          table.append(tableRow);
        });

      // 結果要素にテーブルを追加
      $("#stock-table_kabu_half_period").empty().append(table);
      $("#stock-table_kabu_half_period").show();
      $("#stock-table_kabu_cd").hide();
      $("#stock-table_registered").hide();

      // チャート表示領域の幅と高さを指定する
      const chartContainer = document.getElementById("chartcontainer");
      chartContainer.style.width = "400px";
      chartContainer.style.height = "300px";

      // チャートの描画関数
      function drawChartKabuHalfPeriod(sumByKabuHalfPeriod) {
        const chartElement = document.getElementById("chart_kabu_half_period");
        // 既存のチャートを破棄する
        if (chartElement && chartElement.chart) {
          chartElement.chart.destroy();
        }

        const sortedKeys = Object.keys(sumByKabuHalfPeriod).sort(); // キーでソート

        const labels = sortedKeys.map(
          (key) => sumByKabuHalfPeriod[key].half_period_name
        );
        const dividendData = sortedKeys.map(
          (key) => sumByKabuHalfPeriod[key].dividend
        );
        const profitData = sortedKeys.map(
          (key) => Math.floor(sumByKabuHalfPeriod[key].profit * 0.79685) // 79.685%を乗算し、小数点以下を切り捨てる
        );

        const datasets = [
          {
            label: "税引後配当金",
            data: dividendData,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "税引後売却益",
            data: profitData,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ];

        const chartData = {
          labels: labels,
          datasets: datasets,
        };

        const chartOptions = {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              ticks: {
                display: true, // falseにするとx軸の目盛りが非表示
              },
            },
            y: {
              stacked: true,
              ticks: {
                precision: 0, // y軸の目盛りの小数点以下の桁数を指定
                maxTicksLimit: 5, // y軸の目盛りの最大数を指定
              },
            },
          },
        };

        const chart = new Chart(chartElement, {
          type: "bar",
          data: chartData,
          options: chartOptions,
        });
        // チャート要素にチャートインスタンスをセットする
        chartElement.chart = chart;
      }

      // チャートの表示
      drawChartKabuHalfPeriod(sumByKabuHalfPeriod);
      $("#chartcontainer").show();
    }

    // 銘柄合算値の場合
    else if (selectedValue === "kabu_cd") {
      const sumByKabuCd = {};

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("kabu")) {
          const data = JSON.parse(localStorage.getItem(key));

          if (data && Array.isArray(data.stockTable)) {
            data.stockTable.forEach(function (item) {
              const kabuCd = item.kabu_cd;
              const cost = item.cost ? parseInt(item.cost) : 0;
              const dividend = item.dividend ? parseInt(item.dividend) : 0;
              const profit = item.profit ? parseInt(item.profit) : 0;

              if (sumByKabuCd.hasOwnProperty(kabuCd)) {
                sumByKabuCd[kabuCd].cost += cost;
                sumByKabuCd[kabuCd].dividend += dividend;
                sumByKabuCd[kabuCd].profit += profit;
              } else {
                sumByKabuCd[kabuCd] = {
                  kabu_cd: kabuCd,
                  kabu_name: item.kabu_name,
                  cost: cost,
                  dividend: dividend,
                  profit: profit,
                };
              }
            });
          }
        }
      }

      // テーブル要素を作成
      const table = $("<table></table>");

      // テーブルのヘッダ行を作成
      const tableHeader = $("<tr></tr>");
      tableHeader.append("<th>コード</th>");
      tableHeader.append("<th>銘柄名</th>");
      tableHeader.append("<th>取得価格</th>");
      tableHeader.append("<th>税引後配当金</th>");
      tableHeader.append("<th>税引前売却益</th>");
      table.append(tableHeader);

      // テーブルのデータ行を作成
      Object.values(sumByKabuCd).forEach(function (item) {
        const tableRow = $("<tr></tr>");
        tableRow.append(`<td>${item.kabu_cd}</td>`);
        tableRow.append(`<td>${item.kabu_name}</td>`);
        tableRow.append(`<td>${item.cost.toLocaleString()}</td>`);
        tableRow.append(`<td>${item.dividend.toLocaleString()}</td>`);
        tableRow.append(`<td>${item.profit.toLocaleString()}</td>`);
        table.append(tableRow);
      });

      // 結果要素にテーブルを追加
      $("#stock-table_kabu_cd").empty().append(table);
      $("#stock-table_kabu_cd").show();
      $("#stock-table_kabu_half_period").hide();
      $("#chartcontainer").hide();
      $("#stock-table_registered").hide();
    } else {
      $("#stock-table_kabu_half_period").hide();
      $("#chartcontainer").hide();
      $("#stock-table_kabu_cd").hide();
      $("#stock-table_registered").show();
    }
  });
});

//　３．ローカルストレージの配当金と売却益データを表の下に合算表示する
function displayTotal() {
  // 合算結果を初期化
  let totalDividend = 0;
  let totalProfit = 0;
  let totalTaxedProfit = 0;

  // ローカルストレージのデータを取得
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // "kabu"で始まるキーのデータのみ処理する
    if (key.startsWith("kabu")) {
      const data = JSON.parse(localStorage.getItem(key));

      // データが存在し、"stockTable"が配列であることを確認
      if (data && Array.isArray(data.stockTable)) {
        // ”dividend(配当金)"と"profit(売却益)"の数値を合算
        data.stockTable.forEach(function (stockData) {
          const dividend = parseFloat(stockData.dividend);
          const profit = parseFloat(stockData.profit);

          // 数値として正しくパースできた場合にのみ合算する
          if (!isNaN(dividend)) {
            totalDividend += dividend;
          }

          if (!isNaN(profit)) {
            totalProfit += profit;
            totalTaxedProfit = Math.floor(totalProfit * 0.79685);
          }
        });
      }
    }
  }

  // 合算結果をHTMLに表示
  $("#total-dividend").text(totalDividend.toLocaleString() + " 円");
  $("#total-profit").text(totalProfit.toLocaleString() + " 円");
  $("#total-taxed-profit").text(totalTaxedProfit.toLocaleString() + " 円");
}

// ページ読み込み時に合算結果を表示
displayTotal();

//　４．Save クリックイベント　----------------------------
$("#save").on("click", saveData);

function saveData() {
  // 選択された"half-period"の値を取得し、"halfPeriodValue"と”halfPeriodText”に格納
  const halfPeriod = $("select[name='half-period']");
  const halfPeriodValue = halfPeriod.val();
  const halfPeriodText = halfPeriod.find("option:selected").text();

  // ”halfPeriodText”と入力欄の内容を、配列”rowData”として、"stockTable"に格納
  const stockTable = [];
  $("#stock-table tr:gt(0)").each(function () {
    const rowData = {
      half_period: halfPeriodText,
      kabu_cd: $(this).find("td:eq(0)").text(),
      kabu_name: $(this).find("td:eq(1)").text(),
      cost: $(this).find("td:eq(2) input").val(),
      dividend: $(this).find("td:eq(3) input").val(),
      profit: $(this).find("td:eq(4) input").val(),
    };
    stockTable.push(rowData);
  });

  // "halfPeriodValue"と"stockTable"を、"data"に格納
  const data = {
    halfPeriodValue,
    stockTable,
  };

  // キーを"halfPeriodValue"とし、"data"をJSON形式に変換してローカルストレージに保存
  localStorage.setItem(halfPeriodValue, JSON.stringify(data));

  // 保存時にアラート表示
  alert("データが保存されました！");

  // 保存時に再読み込み
  location.reload();
}

//　５．Clear クリックイベント　----------------------------
$("#clear").on("click", function () {
  // 選択されているoptionの値を取得
  const selectedValue = $("select[name='half-period']").val();

  // 選択されているoptionを削除
  $("select[name='half-period'] option:selected").remove();

  // ローカルストレージから該当するデータを削除
  localStorage.removeItem(selectedValue);

  // 削除時に再読み込み
  location.reload();
});

/* jQueryを利用しない場合の途中検討中内容　----------------------------
// データを保存する関数
function saveData() {
  // フォームの要素を取得
  const stock = document.querySelector("select.key");
  const halfPeriod = document.querySelector("select.key_value");
  const dividend = document.querySelector("input.key_value");

  // 選択された値を取得
  const stockValue = stock.value;
  const halfPeriodValue = halfPeriod.value;
  const dividendValue = dividend.value;

  // データをオブジェクトとして保存
  const data = {
    stockValue: stockValue,
    halfPeriodValue: halfPeriodValue,
    dividendValue: dividendValue,
  };

  // データをローカルストレージに保存
  localStorage.setItem("savedData", JSON.stringify(data));

  // 保存したことをユーザーに通知などの処理を追加することもできます
  alert("データが保存されました！");
}

// 保存ボタンがクリックされたときにデータを保存
var saveButton = document.getElementById("save");
saveButton.addEventListener("click", saveData);
*/
