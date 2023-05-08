/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

const regexCPF = /^([0-9][0-9][0-9]\.){2}([0-9][0-9][0-9]-)([0-9][0-9])$/;

const cadeias = [
    '123.456.789-09', '000.000.000-00',
    '    000.000.000-00', '000.000.000-00  ',
    '123.456.789-0', '111.111.11-11',
];

cadeias.forEach((cadeia) => {
    let testeRegex = regexCPF.test(cadeia);
    if(testeRegex){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});