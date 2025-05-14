/* RESUMO BÁSICO DE JS */

// 1. Variáveis

var nome = "Maria"; // variável antiga, evita-se usar hoje     
let idade = 30;     // pode mudar        
const PI = 3.14;    // constante, não pode mudar     


// 2. Tipos de Dados

let nome1 = "João";      // String
let idade1 = 25;         // Number
let ativo = true;       // Boolean
let lista = [1, 2, 3];  // Array
let pessoa1 = { nome: "Ana", idade: 22 }; // Objeto


// 3. Operadores

// Aritméticos
let soma = 10 + 5;
let multiplicacao = 2 * 3;

// Comparação
5 == "5"      // true (compara valor)
5 === "5"     // false (compara valor e tipo)

// Lógicos
true && false // false
true || false // true


// 4. Condicionais

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 5. Loops

// For
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}


// 6. Funções

function saudacao(nome) {
  return "Olá, " + nome;
}
console.log(saudacao("Lucas"));

// 7. Objetos

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  buzinar: function() {
    console.log("Biiiiip!");
  }
};

console.log(carro.marca);
carro.buzinar();


// 8. Arrays

let frutas = ["maçã", "banana", "uva"];
console.log(frutas[0]);         // maçã
frutas.push("laranja");         // adiciona no fim
frutas.pop();                   // remove último
           

// 9. JSON

let jsonTexto = '{"nome":"Carlos","idade":28}'; //Objeto JSON (texto no formato JSON)

let obj = JSON.parse(jsonTexto);
console.log(obj.nome); // Carlos //Converter JSON para Objeto JS

let pessoa = { nome: "Maria", idade: 35 };
let jsonConvertido = JSON.stringify(pessoa);
console.log(jsonConvertido); // '{"nome":"Maria","idade":35}' //Converter Objeto JS para JSON


// 10. Saída

console.log("Fim do resumo!");
