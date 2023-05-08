// Σ = {H, M, h, m}

/*
d) Casais homossexuais mais velhos que os filhos, com pelo menos seis filhos, em que os
dois primeiros filhos formam um casal e os últimos também.
*/

const regex_D = /^(HH|MM)(hm|mh)(h|m){2,}(hm|mh)$/;

const cadeias = [
    'MH', 'HM', 'HH', 'MM', 'HHh', 'MMh', 'HHm', 'MMm', 'HHmh', 'HHmmhh', 'MMmhhm', 'HHhmhhmh',
    'MMmhmmhm', 'HMhmhhmh', 'HHmhmmmhhhmh', 'MMmmhmhmhh', 'HHmhmmhhmmhhmh'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_D.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});