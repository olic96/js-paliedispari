//回文

//ユーザーに単語の入力を求めます
//入力した単語が回文であるかどうかを理解する関数を作成します


//.1 ユーザーに単語の入力を求める
//.2 関数を確立します
//.2a ユーザーが入力した単語をトラバースするforループを作成します
//.2b 逆方向に読み取られた文字の位置が初期位置と等しい場合、その単語は回文です。それ以外の場合はありません。


function isPalindroma(word) {
    let reverseWord = "";
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        console.log(word[i]);
    }
    console.log(reverseWord);
    if(word != reverseWord) {
        return false;
    } else {
        return true;
    }
}

const word = prompt("inserisci parola");

if(isPalindroma(word)) {
    console.log("è palindroma");
} else {
    console.log("non è palindroma");
}
