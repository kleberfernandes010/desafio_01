let nome = " batman "
let xp = 10000;
let nivel = xp < 1000 ? "Ferro" :
            xp <= 2000 ? "Bronze" :
            xp <= 3000 ? "Prata" :
            xp <= 7000 ? "Ouro" :
            xp <= 8000 ? "Platina" :
            xp <= 9000 ? "Ascendente" :
            xp <= 10000 ? "Imortal" :
            "Radiante";

console.log("O Herói de nome " + nome + " está no nível de " + nivel)


