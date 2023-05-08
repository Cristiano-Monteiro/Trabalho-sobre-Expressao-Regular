/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

const regexEmail = /^([a-z]+)@([a-z]+)(\.com\.br|\.br)$/;

const cadeias = [
    'a@a.br', 'divulga@ufpa.br', 'a@a.com.br', '   divulga@ufpa.br',
    '@', 'a@.br', '@a.br', 'T@teste.br', 'a@A.com.br'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regexEmail.test(cadeia);
    if(testeRegex){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});