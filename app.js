

let frases=["O SENHOR É MEU PASTOR; NADA ME FALTARÁ.    SALMO 23:1 🌿🐑💖",
     "REGOZIJAI-VOS NO SENHOR, VÓS, OS JUSTOS; AOS PIEDOSOS É BELO O CÂNTICO.SALMO 33:1 🎶💫😇",
     "FOSTE A MINHA AJUDA, E NA SOMBRA DAS TUAS ASAS ME ALEGRAREI.SALMO 63:7 🕊️🌸😊",
    "A TERRA ESTÁ CHEIA DA BONDADE DO SENHOR.    SALMO 33:5 🌍💚🌸"];

function geradorMensagem(){
    let indiceGerado= Math.floor(Math.random()*(frases.length));
     let fraseGerada= frases[indiceGerado];
    document.querySelector("#saída").textContent=fraseGerada;

    
}
