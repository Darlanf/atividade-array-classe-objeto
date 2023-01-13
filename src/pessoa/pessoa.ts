// 3. Crie uma classe chamada Pessoa que contém os seguintes atributos: nome (string) e idade (number),
// que receba esses valores pelo construtor.
// Depois crie uma lista de Pessoa com algumas idades diferentes e por fim
// crie uma nova lista a partir dessa lista inicial utilizando o filter somente
// com as pessoas que possuem a idade menor que 23.

export class Pessoa {
  nome: string;
  idade: number;
  salario: number;

  constructor(
    nome: string,
    idade: number,
    salario: number
  ) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}
