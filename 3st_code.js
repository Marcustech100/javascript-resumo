// Resumo Completo de JavaScript e JSON

let resumoCompleto = [
    "1. Declaração de Variáveis:",
    "   let idade = 30; // Declara uma variável que pode ser alterada",
    "   let nome = 'João'; // Declara uma variável que pode ser alterada",
    "   const cidade = 'São Paulo'; // Declara uma constante que não pode ser alterada",
    "   var pais = 'Brasil'; // Declara uma variável global (evitar o uso de 'var' se possível)",
    
    "2. Tipos de Dados:",
    "   - Number: 10, 3.14, NaN",
    "   - String: 'Texto', 'João'",
    "   - Boolean: true, false",
    "   - Object: { nome: 'João', idade: 30 }",
    "   - Array: ['maçã', 'banana', 'laranja']",
    "   - Undefined: Quando uma variável não tem valor atribuído.",
    "   - Null: Representa a ausência de valor.",
    
    "3. Operadores:",
    "   - Aritméticos: +, -, *, /",
    "   - Comparação: ==, ===, !=, !==",
    "   - Lógicos: && (E), || (OU), ! (NÃO)",
    "   - Ternário: condição ? valor_se_true : valor_se_false",
    
    "4. Funções:",
    "   function saudacao(nome) { return 'Olá, ' + nome; }",
    "   console.log(saudacao('João')); // Exibe a saudação no console",
    "   - Funções podem aceitar parâmetros e retornar valores.",
    "   - Funções podem ser atribuídas a variáveis.",
    
    "5. Objetos e Arrays:",
    "   - Objetos: São coleções de pares chave-valor. Exemplo: { nome: 'João', idade: 30 }",
    "   - Arrays: São coleções ordenadas de valores. Exemplo: ['maçã', 'banana', 'laranja']",
    "   - Objetos podem ter métodos que são funções associadas a eles.",
    
    "6. JSON (JavaScript Object Notation):",
    "   - JSON.stringify(objeto); // Converte um objeto para string JSON",
    "   - JSON.parse(jsonString); // Converte uma string JSON de volta para objeto",
    "   - JSON é uma forma popular de armazenar e transmitir dados em formato texto.",
    
    "7. Estruturas de Controle:",
    "   - Condicionais: if, else, else if",
    "     if (idade >= 18) { console.log('Maior de idade'); }",
    "   - Laços de Repetição: for, while",
    "     for (let i = 0; i < 10; i++) { console.log(i); }",
    "   - Laço While:",
    "     let i = 0;",
    "     while (i < 5) { console.log(i); i++; }",
    
    "8. Funções de Array:",
    "   - .forEach() : Executa uma função para cada item no array.",
    "     ['a', 'b', 'c'].forEach(item => console.log(item));",
    "   - .map() : Cria um novo array com base em uma função aplicada a cada item.",
    "     let numeros = [1, 2, 3];",
    "     let dobrados = numeros.map(num => num * 2);",
    "   - .filter() : Cria um novo array com os itens que passam no teste de uma função.",
    "     let pares = [1, 2, 3, 4].filter(num => num % 2 === 0);",
    "   - .reduce() : Aplica uma função acumulativa a cada item.",
    "     let soma = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);",
    
    "9. Manipulação de Strings:",
    "   - .toLowerCase() : Converte para minúsculas",
    "   - .toUpperCase() : Converte para maiúsculas",
    "   - .length : Retorna o comprimento da string",
    "   - .substring() : Retorna parte da string",
    "     let nome = 'João';",
    "     console.log(nome.substring(0, 2)); // 'Jo'",
    
    "10. Manipulação de Objetos:",
    "   - Adicionar nova propriedade: objeto.novaPropriedade = valor;",
    "     let pessoa = { nome: 'João' };",
    "     pessoa.idade = 30;",
    "   - Acessar propriedade: pessoa.nome",
    "     console.log(pessoa.nome); // 'João'",
    
    "11. Manipulação de Arrays:",
    "   - Adicionar valor: array.push(valor);",
    "   - Remover valor: array.pop();",
    "   - Acessar valor: array[indice];",
    "   - Alterar valor: array[indice] = novoValor;",
    
    "12. Manipulação de Dados com JSON:",
    "   - JSON.parse(jsonString); // Para converter uma string JSON em um objeto",
    "   - JSON.stringify(objeto); // Para converter um objeto em uma string JSON"
];

// Exibe cada item do resumo completo no console
resumoCompleto.forEach(item => {
    console.log(item);
});
