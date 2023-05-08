/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

//const regexTelefone = /^(\(?[0-9][0-9]\)?)\s9([0-9]{4})-?([0-9]{4})$/;

const regexTelefone = /^(\([0-9][0-9]\))\s9([0-9]{4})-?([0-9]{4})$|^([0-9][0-9])\s9([0-9]{8})$/;

const cadeias = [
    '(91) 99999-9999', '(91) 999999999', '91 999999999',
    '(91) 59999-9999', '99 99999-9999', '(94)95555-5555'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regexTelefone.test(cadeia);
    if(testeRegex){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});