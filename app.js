let frases = [
  {
    verso: "SALMO 23:1",
    citacao: "O SENHOR É MEU PASTOR; NADA ME FALTARÁ. 🌿🐑💖"
  },
  {
    verso: "SALMO 33:1",
    citacao: "REGOZIJAI-VOS NO SENHOR, VÓS, OS JUSTOS; AOS PIEDOSOS É BELO O CÂNTICO. 🎶💫😇"
  },
  {
    verso: "SALMO 63:7",
    citacao: "FOSTE A MINHA AJUDA, E NA SOMBRA DAS TUAS ASAS ME ALEGRAREI. 🕊️🌸😊"
  },
  {
    verso: "SALMO 33:5",
    citacao: "A TERRA ESTÁ CHEIA DA BONDADE DO SENHOR. 🌍🌸"
  },
  {
    verso: "SALMO 27:1",
    citacao: "O SENHOR É A MINHA LUZ E A MINHA SALVAÇÃO; A QUEM TEMEREI? ✨🙌"
    ,
  },
  {
    verso: "SALMO 46:1",
    citacao: "DEUS É O NOSSO REFÚGIO E FORTALEZA, SOCORRO BEM PRESENTE NA ANGÚSTIA. 🏰"
    ,
  },
  {
    verso: "SALMO 1:1",
    citacao: "BEM-AVENTURADO O HOMEM QUE NÃO ANDA SEGUNDO O CONSELHO DOS ÍMPIOS, NÃO SE DETÉM NO CAMINHO DOS PECADORES, NEM SE ASSENTA NA RODA DOS ESCARNECEDORES. 🙏"
  }
];

function geradorMensagem(){
    let indiceGerado= Math.floor(Math.random()*(frases.length));
     let fraseGerada= frases[indiceGerado].citacao;
     let citacao= frases[indiceGerado].verso;
    document.querySelector("#saída").textContent=fraseGerada;
    document.querySelector("#cit").textContent=citacao;

    
}


