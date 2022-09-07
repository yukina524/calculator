var array1 = [];
var array2 = [];
var count = 0; //演算記号の個数カウント用
var count_error = 0; //エラーがあるかどうかの判定用

//各数字・演算記号ボタン
function num0() {
    clear();
    array1.push(0);
    array2.push(0);
    show(array1, array2);
    console.log(array1);
}

function num1() {
    clear();
    array1.push(1);
    array2.push(1);
    show(array1, array2);
    console.log(array1);
}

function num2() {
    clear();
    array1.push(2);
    array2.push(2);
    show(array1, array2);
    console.log(array1);
}

function num3() {
    clear();
    array1.push(3);
    array2.push(3);
    show(array1, array2);
    console.log(array1);
}

function num4() {
    clear();
    array1.push(4);
    array2.push(4);
    show(array1, array2);
    console.log(array1);
}

function num5() {
    clear();
    array1.push(5);
    array2.push(5);
    show(array1, array2);
    console.log(array1);
}

function num6() {
    clear();
    array1.push(6);
    array2.push(6);
    show(array1, array2);
    console.log(array1);
}

function num7() {
    clear();
    array1.push(7);
    array2.push(7);
    show(array1, array2);
    console.log(array1);
}

function num8() {
    clear();
    array1.push(8);
    array2.push(8);
    show(array1, array2);
    console.log(array1);
}

function num9() {
    clear();
    array1.push(9);
    array2.push(9);
    show(array1, array2);
    console.log(array1);
}

function numwaru() {
    clear();
    array1.push('÷');
    array2.push('÷');
    show(array1, array2);
    console.log(array1);
    console.log(array2);
    count = count + 1;
    console.log(count);
    if (count >= 2) {
        calculate();
        array1.push('÷');
    }
}

function numkake() {
    clear();
    array1.push('×');
    array2.push('×');
    show(array1, array2);
    console.log(array1);
    count = count + 1;
    if (count >= 2) {
        calculate();
        array1.push('×');
    }
}

function numhiku() {
    clear();
    array1.push('-');
    array2.push('-');
    show(array1, array2);
    console.log(array1);
    count = count + 1;
    if (count >= 2) {
        calculate();
        array1.push('-');
    }
}

function numtasu() {
    clear();
    array1.push('+');
    array2.push('+');
    show(array1, array2);
    console.log(array1);
    count = count + 1;
    if (count >= 2) {
        calculate();
        array1.push('+');
    }
}


//表示・削除用関数
function show(array, array_2) {
    var html = '';
    for (var i = 0; i < array.length; i++) {
        html = html + array[i];
    }
    document.getElementById('inputnum').insertAdjacentHTML('beforeend', html);
    var html2 = '';
    for (var e = 0; e < array_2.length; e++) {
        html2 = html2 + array_2[e];
    }
    document.getElementById('inputnum2').insertAdjacentHTML('beforeend', html2);
}

var x = document.getElementById("inputnum");
var y = document.getElementById("inputnum2");
var z = document.getElementById("text");

function clear() {
    x.innerHTML = "";
    y.innerHTML = "";
}


function clearnum() {
    clear();
    array1 = [];
    array2 = [];
    console.log(array1);
    x.innerHTML = "0";
    y.innerHTML = "0";
    count = 0;
    count_error = 0;
    z.innerHTML = "計算したい式を入力してください！";
}




//計算関数（＝ボタン）
function calculate() {
    var arraynum1 = [];
    var arraynum2 = [];
    var arraykigou = [];
    var length1 = array1.length;
    var number1 = 0;
    var number2 = 0;
    var number3 = 0;


    for (var j = 0; j < length1; j++) { //1つ目の数字と演算記号を分ける
        if (!isNaN(array1[0]) == true) {
            console.log('suuji');
            arraynum1.push(array1[0]);
            array1.shift();
            console.log(array1);
            console.log(arraynum1);
        } else {
            console.log('moji');
            arraykigou.push(array1[0]);
            array1.shift();
            console.log(array1);
            console.log(arraykigou);
            break;
        }
    }


    var length2 = array1.length;
    for (var j = 0; j < length2; j++) { //演算記号と2つ目の数字を分ける
        if (!isNaN(array1[0]) == true) {
            console.log('suuji');
            arraynum2.push(array1[0]);
            array1.shift();
            console.log(array1);
            console.log(arraynum2);
        } else if (j == 0) {
            console.log('moji2_error');
            arraykigou.push(array1[0]);
            array1.shift();
            arraykigou.shift();
            console.log(array1);
            console.log(arraynum2);
            console.log(arraykigou);
            break;
        } else {
            console.log('moji');
            array1.shift();
            console.log(array1);
            break;
        }
    }

    if (arraynum1.length == 0) {
        number1 == null;
        console.log(number1);
    }
    if (arraynum2.length == 0) {
        number2 == null;
        console.log(number2);
    }

    //1つ目の数字作る
    for (var k = 0; k < arraynum1.length; k++) {
        number1 = number1 + arraynum1[k] * (10 ** (arraynum1.length - k - 1));
        console.log(number1);
    }

    //2つ目の数字作る
    for (var l = 0; l < arraynum2.length; l++) {
        number2 = number2 + arraynum2[l] * (10 ** (arraynum2.length - l - 1));
        array1.shift();
        console.log(number2);
    }

    //1つ目2つ目の数字を使って計算する
    if (arraynum1.length == 0 || arraynum2.length == 0) {
        console.log('数字が空っぽです')
        number3 = 'エラー！';
        count_error = count_error + 1;
    } else if (arraykigou[0] == '+') {
        number3 = number1 + number2;
    } else if (arraykigou[0] == '-') {
        number3 = number1 - number2;
    } else if (arraykigou[0] == '×') {
        number3 = number1 * number2;
    } else if (arraykigou[0] == '÷') {
        number3 = number1 / number2;
    }

    if (number3 == Infinity) {
        number3 = 'エラー！'
        count_error = count_error + 1;
    }
    console.log(number3);

    //演算が全て終わった後の処理
    count = 1;
    array1.push(number3);
    console.log(array1);
    console.log(array2);
    clear();
    show(array1, array2);
    if (count_error >= 1) {
        z.innerHTML = "";
        var html3 = '';
        html3 = html3 + '「AC」を押して最初からやり直してください！'
        document.getElementById('text').insertAdjacentHTML('beforeend', html3);
    }
}

