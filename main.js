/* global $*/
// 変数宣言部
let valueMove;

let oneDecimalPlace = document.getElementById('oneDecimalPlace');
let oneDecimalValue = 0;
// let oneDecimalMove;

let onePlace = document.getElementById('onePlace');
let oneValue = 0;
// let oneMove;

let tenPlace = document.getElementById('tenPlace');
let tenValue = 0;
// let tenMove;

let hundredPlace = document.getElementById('hundredPlace');
let hundredValue = 0;
// let hundredMove;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

// 各ボタンクリック時発生関数
// スタートボタン処理
function eventStart() {
    valueMove = window.setInterval(function() {
        oneDecimalValue++;
        oneDecimalPlace.innerHTML = oneDecimalValue;
        if (oneDecimalValue == 10) {
            oneDecimalValue = 0;
            oneDecimalPlace.innerHTML = oneDecimalValue;

            oneValue++;
            onePlace.innerHTML = oneValue;
            if (oneValue == 60) {
                oneValue = 0;
                onePlace.innerHTML = oneValue;

                tenValue++;
                tenPlace.innerHTML = tenValue;
                if (tenValue == 60) {
                    tenValue = 0;
                    tenPlace.innerHTML = tenValue;

                    hundredValue++;
                    hundredPlace.innerHTML = hundredValue;
                    if (hundredValue == 60) {
                        hundredValue = 0;
                        tenPlace.innerHTML = hundredValue;
                    }
                }
            }
        }
    }, 1000 / 10);

    // 各ボタンの活性変更
    start.setAttribute("disabled", true);

    stop.removeAttribute("disabled");

    reset.removeAttribute("disabled");
}

// ストップボタン処理
function eventStop() {
    clearInterval(valueMove);

    // 各ボタンの活性変更
    start.removeAttribute("disabled")
    $("#start").css({});

    stop.setAttribute("disabled", true);
    $("#stop").css({});
}

// リセットボタン処理
function eventReset() {
    window.location.reload();
}
