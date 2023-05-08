// Σ = {H, M, h, m}

/*
a) Casais heterossexuais mais velhos que os filhos com pelo menos duas filhas 
mulheres, ou pelo menos um filho homem, ou ainda pelo menos dois filhos homens 
e uma filha mulher
*/

const regex_A = /^(MH|HM)((h*mh*){2,}|(m*hm*)+|(m*hmhm*)+)$/;

const cadeias = [
    'HM', 'MHh', 'HMh', 'MHm', 'HMm', 'MHhh', 'HMhh', 'MHmm', 'HMmm', 'MHhhm', 'MHhmh', 'MHmhh',
    'MHhmm', 'MHmhm', 'MHmmh', 'MHhhmm', 'MHmmhh', 'MHmhmh', 'MHhmhm', 'MHhhhm', 'MHmmmh',
    'hmMH'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_A.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});