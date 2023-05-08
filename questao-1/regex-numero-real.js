/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

const regexNumeroReal = /^(\+|-)?([0-9]+)(\.[0-9]+)?$/;

const cadeias = [
    '-25.467', '1', '-1', '+1', '64.2',
    '1.', '.2', '+64,2'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regexNumeroReal.test(cadeia);
    if(testeRegex){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});