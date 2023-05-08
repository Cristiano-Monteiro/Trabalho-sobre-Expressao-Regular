// Σ = {H, M, h, m}

/*
f) Casais homossexuais mais velhos que os filhos, com qualquer quantidade de filhos
homens e mulheres, mas que não tiveram dois filhos homens consecutivos.
*/

const regex_F = /^((HH|MM)(m+hm*)+|(HH|MM)(m*hm+)+|(HH|MM)m+|(HH|MM)h(m+h)*)$/;

const cadeias  = [
    'HHm', 'MMh', 'HHmmh', 'MMhmm', 'HHmmmhmh', 'MMhmhmh', 'HHmmmmmmmhmh', 'MMmmmmmmmmmmmm',
    'MMhmmmmmmmmmmhmmmmmmmh', 'HH', 'MHh', 'HMm', 'MMhh', 'HHmmmmhh', 'MMmhmhh', 'MMhhmmmmh',
    'HHmmmmmmmmmmmmmhh', 'MMmmmhhmmm'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_F.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});