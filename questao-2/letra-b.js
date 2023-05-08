// Σ = {H, M, h, m}

/*
b) Casais heterossexuais mais velhos que os filhos e com uma quantidade ímpar de filhas
mulheres.
*/

const regex_B = /^(MH|HM)(h*mh*)(h*mh*mh*)*$/;

const cadeias = [
    'HM', 'hmHM', 'MHh', 'MHhm', 'HMmh', 'MHhmh', 'MHmmh', 'MHmmmh', 'MHhhhhhhhm',
    'HMhhhhhhhhmm', 'MHm', 'HMmm'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_B.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});