// Aula 05 - Estrutura de repetição "for"
// 1. Descreva para que serve o comando "for".
// O comando for é uma estrutura de controle utilizada em várias linguagens de programação para realizar iterações sobre uma sequência de valores, como listas, arrays ou intervalos numéricos. Em essência, ele permite que você execute um bloco de código repetidamente, com a variável de controle assumindo diferentes valores a cada iteração
// 2. Como o comando "for" define o início de uma repetição?
// for (inicialização; condição; iteração)
// 3. Como o comando "for" determina o fim da execução?
// O comando for determina o fim da execução com base na condição que é avaliada antes de cada iteração do loop
// 4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// Dentro da estrutura de repetição for, a alteração do valor da variável de controle ocorre de maneira definida pela parte de iteração do loop.
// 5. Implemente o código do slide de número 18.
// for (let i = 0; i < 10; i++) {
//   console.log("Testando uma frase");
// }
// 6. Implemente o código do slide de número 26.
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// 7. Implemente o código do slide de número 36.
// for (let i = 0 ; i<10; i++){
//   if(i == 5){
//     break;
//   }
//   console.log(i)
// }
// 8. Implemente o código do slide de número 38.
// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }
// 9. Implemente o código do slide de número 44.
// let nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];
// for (let n of nomes) {
//   console.log(n);
// }
// 10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// 11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// 12. Elabore um programa que calcule a soma dos números de 1 a 100.
// Função para calcular a soma dos números de 1 a 100
// function calcularSoma(): number {
//   let soma: number = 0;
//   for (let i = 1; i <= 100; i++) {
//     soma += i;
//   }
//   return soma;
// }
// const resultado: number = calcularSoma();
// console.log(`A soma dos números de 1 a 100 é: ${resultado}`);
// 13. Desenvolva um programa que exiba todos os números pares de 1 a 50.
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 14. Faça um programa que calcule o produto dos números de 1 a 5.
// let produto = 1;
// for (let i = 1; i <= 5; i++) {
//   produto *= i;
//   console.log(`O produto dos números de 1 a 5 é: ${produto}`);
// }
// 15. Crie um programa que exiba a tabuada do 7.
// const numero = 7;
// console.log(`Tabuada do ${numero}:`);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero} x ${i} = ${numero * i}`);
// }
// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
// const notas = [7.5, 8.0, 6.0, 9.5, 7.0];
// let total = 0;
// const quantidadeNotas = notas.length;
// for (let i = 0; i < quantidadeNotas; i++) {
//   total += notas[i];
// }
// const media = total / quantidadeNotas;
// console.log(`A média das ${quantidadeNotas} notas é: ${media.toFixed(2)}`);
// 17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
// const numeros = [15, 22, 8, 10, 35, 2, 50, 27, 13, 5];
// let maior = numeros[0];
// let menor = numeros[0];
// for (let i = 1; i < numeros.length; i++) {
//   if (numeros[i] > maior) {
//     maior = numeros[i];
//   }
//   if (numeros[i] < menor) {
//     menor = numeros[i];
//   }
// }
// console.log(`O maior valor digitado é: ${maior}`);
// console.log(`O menor valor digitado é: ${menor}`);
// 19. Faça um programa que exiba os números ímpares de 1 a 100.
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior
// ou igual a 7).
// const notas = [6.5, 7.2, 8.0, 5.5, 9.0];
// const notaMinimaAprovacao = 7;
// let quantidadeAprovados = 0;
// for (let i = 0; i < notas.length; i++) {
//   if (notas[i] >= notaMinimaAprovacao) {
//     quantidadeAprovados++;
//   }
// }
// console.log(`Quantidade de alunos aprovados: ${quantidadeAprovados}`);
// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
// function somaDosDigitos(numero: number): number {
//   let soma = 0;
//   const numeroComoString = Math.abs(numero).toString();
//   for (const digito of numeroComoString) {
//     if (digito >= "0" && digito <= "9") {
//       soma += parseInt(digito, 10);
//     }
//   }
//   return soma;
// }
// const numero = 203201;
// const resultado = somaDosDigitos(numero);
// console.log(`A soma dos dígitos de ${numero} é: ${resultado}`);
// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
// function exibirDivisores(numero: number): void {
//   console.log(`Divisores de ${numero}:`);
//   for (let i = 1; i <= numero; i++) {
//     if (numero % i === 0) {
//       console.log(i);
//     }
//   }
// }
// function main(): void {
//   const numero: number = parseInt(
//     prompt("Digite um número inteiro:") || "0",
//     10
//   );
//   if (!isNaN(numero)) {
//     exibirDivisores(numero);
//   } else {
//     console.log("Por favor, digite um número válido.");
//   }
// }
// main();
// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
// let alturas: number[] = [1.75, 1.68, 1.8, 1.65, 1.7];
// let somaAlturas: number = 0;
// for (let i = 0; i < alturas.length; i++) {
//   somaAlturas += alturas[i];
// }
// let mediaAlturas: number = somaAlturas / alturas.length;
// console.log(`A média de altura é: ${mediaAlturas.toFixed(2)} metros`);
// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos, utilize a palavra "FizzBuzz".
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
// function somaDigitosPares(numero: number): number {
//   let soma: number = 0;
//   let digito: number;
//   while (numero > 0) {
//     digito = numero % 10;
//     if (digito % 2 === 0) {
//       soma += digito;
//     }
//     numero = Math.floor(numero / 10);
//   }
//   return soma;
// }
// let numero: number = 123456;
// let resultado: number = somaDigitosPares(numero);
// console.log(`A soma dos dígitos pares do número ${numero} é: ${resultado}`);
// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.
// function inverteNumero(numero: number): number {
//   let numeroInvertido: number = 0;
//   while (numero > 0) {
//     let digito: number = numero % 10;
//     numeroInvertido = numeroInvertido * 10 + digito;
//     numero = Math.floor(numero / 10);
//   }
//   return numeroInvertido;
// }
// let numero: number = 789;
// let numeroInvertido: number = inverteNumero(numero);
// console.log(`O número ${numero} invertido é: ${numeroInvertido}`);
