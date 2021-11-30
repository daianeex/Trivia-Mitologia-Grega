let titulo = document.querySelector ('h1')
let instrucoes = document.querySelector ('#instrucoes')                                     
let aviso = document.querySelector ('aviso')

//PERGUNTA
let Questao1 = document.querySelector ('#Questao1')
let pergunta = document.querySelector ('#pergunta')

//ALTERNATIVAS
let a = document.querySelector ('#a')
let b = document.querySelector ('#b')
let c = document.querySelector ('#c')

//article com a Class questoes
let articleQuestoes = document.querySelector ('questoes')
// o1 li com as alternativas
let alternativas = document.querySelector ('#alternativas')

cons q1 = {
  numQuestao : 1
  pergunta   : "Quais foram os três grandes deuses que derrotaram Cronos?"
  alternativaA : "Apolo, Hermes e Hefesto"
  alternativaB : "Zeus, Hades e Poseidon"
  alternativaC : "Poseidon, Dioniso e Ares"
  correta      : "Zeus, Hades e Poseidon"
}
cons q2 = {
  numQuestao : 2
  pergunta   : "Quais foram os três grandes deuses que derrotaram Cronos?"
  alternativaA : "Apolo, Hermes e Hefesto"
  alternativaB : "Zeus, Hades e Poseidon"
  alternativaC : "Poseidon, Dioniso e Ares"
  correta      : "Zeus, Hades e Poseidon"
}
//CONSTANTE 
const questoes = [q1, q2]

let numero = document.querySelector ('#numero')
let total = document.querySelector ('#total')

numero.textContent = q1.numQuestao

let totalDeQuestaoes = (questoes.length)-1
console.log("Total de questões" + totalDeQuestoes)
total.textContent = totalDeQuestoes

// 1a Questao COmpleta
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//CONFIGURAR O VALUE INICIAL 
a.setAttribute ('value', '1A')
b.setAttribute ('value', '1B')
c.setAttribute ('value', '1C')

function verifcarSeAcertou (nQuestao, resposta) {
  let numeroDaQuestao = nQuestao.value
  console.log ("Questão " + numeroDaQuestao)
  
  let respostaEscolhida = resposta.textContent
  console.log ("Resp " + respostaEscolhida)
  
  let certa = questoes[numeroDaQuestao].correta
  console.log("RespC" + certa)
  
  if(respostaEscolhida == certa) {
    //console.log ("Acertou")
    //respostaEsta.textContent = "Correta"
    
  } else {
    //console.log("Errou")
    //respostaEsta.textContent = "Errada"
  }
  
