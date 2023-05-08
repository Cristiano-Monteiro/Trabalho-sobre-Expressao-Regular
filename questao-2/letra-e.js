// Σ = {H, M, h, m}

/*
e) Casais homossexuais mais velhos que os filhos, em que o sexo dos filhos é alternado
conforme a ordem de nascimento.
*/

const regex_E = /^((HH|MM)(hm)+|(HH|MM)(mh)+)$/;

const cadeias = [
    'MH', 'HM', 'HH', 'MM', 'HHh', 'MMm', 'MHmhmhmh', 'MMhmmh', 'HHmhhhmh', 'MMhhhhm', 
    'HHmmmm', 'MMhhh', 'HHhm', 'HHmh', 'MMhmhmhm', 'HHmhmhmh'
];

cadeias.forEach((cadeia) => {
    let testeRegex = regex_E.test(cadeia);
    if(testeRegex){
        console.log(`A sentença ${cadeia} é ACEITA`);
    } else {
        console.log(`A cadeia ${cadeia} é REJEITADA`);
    };
});