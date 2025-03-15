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

export {removerChar, removerStr , finalres};