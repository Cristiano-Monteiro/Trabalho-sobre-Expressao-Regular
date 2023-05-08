/*
Considere os seguintes alfabetos:
Σ = {a, b, c, …, z}  -->  [a-z]
Γ = {A, B, C, …, Z}  -->  [A-Z]
N = {0, 1, 2, …, 9}  -->  [0-9]
*/

/*
# Explicação da Regex: 
1) O primeiro grupo é obrigatório e referente ao nome, na qual o primeiro símbolo é 
obrigatoriamente maiúsculo (alfabeto Γ) e o restante minúsculo (alfabeto Σ) de no 
mínimo 2 símbolos;

2) O segundo grupo é opcional e referente ao nome do meio, na qual o primeiro símbolo é 
obrigatoriamente maiúsculo (alfabeto Γ) e o restante minúsculo (alfabeto Σ) de no mínimo 
2 símbolos;

3) O terceiro e último grupo é obrigatório e referente ao sobrenome, na qual o primeiro 
símbolo é obrigatoriamente maiúsculo (alfabeto Γ) e o restante minúsculo (alfabeto Σ) de 
no mínimo 2 símbolos;
*/

const regex = /^([A-Z][a-z]{2,})(\s[A-Z][a-z]{2,})?(\s[A-Z][a-z]{2,})$/;

const cadeias = [
    'Ada Lovelace', 'Alan Turing', 'Stephen Cole Kleene',
    '    Ada Lovelace', '1Alan', 'Alan', 'A1an', 'A1an Turing', 'Alan turing'
];

// Testando as sentenças presentes no Array "cadeias":
cadeias.forEach((cadeia) => {
    let teste = regex.test(cadeia);
    if(teste){
        console.log(`A sentença "${cadeia}" é ACEITA`);
    } else {
        console.log(`A cadeia "${cadeia}" é REJEITADA`);
    };
});