/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

const regexDataHorario = /^([0-9]{2}\/[0-9]{2}\/[0-9]{4})\s([0-9]{2}:[0-9]{2}:[0-9]{2})$/;

const cadeias = [
    '31/08/2019 20:14:55', '99/99/9999 23:59:59',
    '99/99/9999 3:9:9', '9/9/99 99:99:99', '99/99/999903:09:09'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regexDataHorario.test(cadeia);
    if(testeRegex){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});