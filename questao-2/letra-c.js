// Σ = {H, M, h, m}

/*
c) Casais heterossexuais mais velhos que os filhos, com a filha mais velha mulher e o filho
mais novo homem.
*/

const regex_C = /^(MH|HM)m(m|h)*h$/;

const cadeias = [
    'mhHM', 'HM', 'MHh', 'MHm', 'HMhm', 'MHmh', 'HMmmm', 'HMmhhhhh', 'Mhmh', 'HMmhmhmh',
    'MHhmhmhmh', 'HMhmmmmmmm', 'MHmmhh', 'HMmhhhhhmmmmhhhhmhmhmhmhmh'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_C.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});