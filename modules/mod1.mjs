function removerChar(a,b) {
    let str1 = '';
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b) {
            str1 += a[i];
        }
    }
    return str1;
}

function removerStr(a,b) {
    let results = '';
    let temp = '';
    for (let i = 0; i < a.length; i++) {
        if (temp != b) {
            temp += a[i];
        } else {
            results += a[i];
        }
    }
    return results;
}

function finalres(a) {
    let str1 = removerStr(a, "print");
    let str2 = removerStr(str1, '("');
    let str3 = removerChar(str2, '"');
    let str4 = removerChar(str3, ')');
    return str4;
}

console.log(finalres('print("Hello world!")'));

export {removerChar, removerStr , finalres};