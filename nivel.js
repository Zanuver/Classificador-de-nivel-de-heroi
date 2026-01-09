const readline = require('readline');

let xp, nome, nivel;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Digite seu nome: ', (nomeResposta) => {
    nome = nomeResposta;
    console.log(`Olá, ${nome}! Bem-vindo ao sistema de níveis.`);

    
    rl.question('Digite sua experiência (XP): ', (xpResposta) => {
        xp = parseInt(xpResposta);

   
        if (xp < 1000) {
            nivel = 'ferro';
        } else if (xp >= 1000 && xp <= 2000) {
            nivel = 'bronze';
        } else if (xp > 2000 && xp <= 5000) {
            nivel = 'prata';
        } else if (xp > 5000 && xp <= 7000) {
            nivel = 'ouro';
        } else if (xp > 7000 && xp <= 8000) {
            nivel = 'platina';
        } else if (xp > 8000 && xp <= 9000) {
            nivel = 'Ascedente';
        } else if (xp > 9000 && xp <= 10000) {
            nivel = 'Imortal';
        } else {
            nivel = 'Radiante';
        }

       
        console.log(`O heroi de nome ${nome} está no nível de ${nivel}`);
        
        
        rl.close();
    });
});