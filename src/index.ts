import { Aluno, TipoStatus } from "./aluno/aluno";
import { Pessoa } from "./pessoa/pessoa";

// 1. Dado a seguinte lista de números:  8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o filter

let listaNumeros: number[] = [
  8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3,
  12, 6, 4,
];

let impares = listaNumeros.filter((numero) => {
  if (numero % 2 !== 0) {
    return true;
  }
  return false;
});

console.log(
  "Os números impares são:\n",
  impares,
  "\n"
);

// 2. Some o valor total de todos números utilizando o reduce

let somaDosNumeros = listaNumeros.reduce(
  (valorInicial, valorAtual) => {
    return valorInicial + valorAtual;
  }
);

console.log(
  "O valor da soma dos números é:\n",
  somaDosNumeros,
  "\n"
);

// 3. Crie uma classe chamada Pessoa que contém os seguintes atributos: nome (string) e idade (number),
// que receba esses valores pelo construtor.
// Depois crie uma lista de Pessoa com algumas idades diferentes e por fim
// crie uma nova lista a partir dessa lista inicial utilizando o filter somente
// com as pessoas que possuem a idade menor que 23.

let listaDePessoas: Pessoa[] = [
  new Pessoa("Darlan", 36, 1500),
  new Pessoa("Patricia", 22, 1200),
  new Pessoa("Sergio", 64, 1000),
  new Pessoa("Eliane", 54, 800),
  new Pessoa("Arthur", 9, 1300),
  new Pessoa("Anna", 20, 900),
  new Pessoa("Paulo", 25, 1400),
  new Pessoa("Arrascaeta", 28, 1100),
];

let menoresDeVinteTres = listaDePessoas.filter(
  (pessoa) => {
    if (pessoa.idade < 23) {
      return true;
    }
    return false;
  }
);

console.log(
  "As pessoas com menos de 23 anos são:\n",
  menoresDeVinteTres,
  "\n"
);

// 4. Utilizando a lista de Pessoa criada na atividade 3,
// filtre somente as pessoas que possuem a idade menor que 30
// e calcule a média das idades das pessoas filtradas utilizando o reduce..

let menoresDeTrinta = listaDePessoas.filter(
  (pessoa) => pessoa.idade < 30
);

console.log(
  "As pessoas com menos de trinta anos são:"
);
console.log(menoresDeTrinta);

let somaDasIdades = menoresDeTrinta.reduce(
  (idadeInicial, pessoa) => {
    return idadeInicial + pessoa.idade;
  },
  0
);

console.log("A soma das idades é:");
console.log(somaDasIdades);

let mediaDasIdades =
  somaDasIdades / menoresDeTrinta.length;

console.log("A média das idades é:");
console.log(mediaDasIdades);

// 5. Utilizando a classe Pessoa da atividade 3,
// adicione mais um atributo chamado salario (number),
// faça receber esse valor pelo construtor.
// Depois filtre todas as pessoas que possuem o salário menor que
// R$1027,00 e crie uma nova lista somente com o nome e a idade da pessoa.

let salarioMenor = listaDePessoas.filter(
  (pessoa) => pessoa.salario < 1027
);
console.log(
  "As pessoas com salário menor que R$ 1.027,00 são:"
);
console.log(salarioMenor);

let novaListaDePessoas = salarioMenor.map(
  (pessoa) => {
    return {
      nome: pessoa.nome,
      idade: pessoa.idade,
    };
  }
);
console.log(novaListaDePessoas);

// 6. Esta atividade é para desafiar vocês. Lembram da atividade prática feita com o mentor na aula anterior?
//  Pois então, refaçam ela MASSSSSSSSSS sem olhar a call. A ideia aqui é vocês fazerem a atividade por conta
//  e tentando lembrar dos recursos utilizados durante o desenvolvimento da atividade.
// OBS: Não vamos ter como verificar se vocês vão olhar a call do mentor ou não, mas lembrem-se:
// Vocês vão estar se auto sabotando se olharem a call do mentor para conseguir resolver a atividade.

// a. Crie uma classe Aluno com os atributos Nome, Idade, Nota e Status.
// b. Crie uma lista com pelo menos 7 alunos.
// c. Depois crie uma lista de 10 elementos que sirva de gabarito de uma prova.
// d. Percorra a lista de alunos e aleatoriamente sorteie as respostas para os alunos
// (simulando como se o aluno estivesse marcando a resposta da pergunta).
// e. Contabilize a nota do aluno comparando a resposta que foi sorteada com o gabarito da prova.
// f. Cada acerto vale 1 ponto
// g. Atualize o status do aluno para aprovado caso o aluno tenha uma nota maior ou igual a 6
// e reprovado caso a nota for menor que 6.
// h. No final mostre os alunos aprovados, reprovados, média das notas, o melhor aluno
// (aluno com nota mais alta) e o pior aluno (aluno com a nota mais baixa).
// A saída precisa ser parecido com essa:

// i. Dicas
// i. As respostas do gabarito podem ser as seguintes letras: A, B, C
// ii. Para sortear as respostas dos alunos pode ser utilizado o Math.random()
// iii. Os métodos filter, map e reduce são bem úteis para resolver a atividade.

let turma: Aluno[] = [
  new Aluno("Darlan", 36),
  new Aluno("Guilherme", 30),
  new Aluno("Cassiano", 25),
  new Aluno("Lucas", 28),
  new Aluno("Emily", 21),
  new Aluno("Mayra", 30),
  new Aluno("Fernanda", 32),
];

let gabarito: string[] = [
  "A",
  "B",
  "C",
  "A",
  "C",
  "B",
  "C",
  "B",
  "A",
  "B",
];

turma.map((aluno) =>
  aluno.atribuirResposta(gabarito)
);

let aprovados = turma
  .filter(
    (aluno) =>
      aluno.status === TipoStatus.aprovado
  )
  .map((aluno) => {
    return {
      nome: aluno.nome,
      nota: aluno.nota,
    };
  });

console.log(
  `== Alunos aprovados == \n`,
  aprovados,
  `\n`
);

let reprovados = turma
  .filter(
    (aluno) =>
      aluno.status === TipoStatus.reprovado
  )
  .map((aluno) => {
    return {
      nome: aluno.nome,
      nota: aluno.nota,
    };
  });
console.log(
  `== Alunos reprovados ==\n`,
  reprovados,
  `\n`
);

let somaDasNotas = turma.reduce(
  (notaInicial, aluno) => {
    return notaInicial + aluno.nota!;
  },
  0
);
let mediaDaTurma = somaDasNotas / turma.length;
console.log(
  `== Média da turma ==\n\n`,
  `Média: ${mediaDaTurma.toFixed(2)}\n`
);

let melhorAluno = turma.reduce(
  (valorInicial, valorAtual) => {
    if (valorInicial.nota! > valorAtual.nota!) {
      return valorInicial;
    } else {
      return valorAtual;
    }
  }
);

console.log(
  `== Melhor aluno == \n\n Nome: ${melhorAluno.nome} - Nota: ${melhorAluno.nota}\n`
);

let piorAluno = turma.reduce(
  (valorInicial, valorAtual) => {
    if (valorInicial.nota! > valorAtual.nota!) {
      return valorAtual;
    } else {
      return valorInicial;
    }
  }
);
console.log(
  `== Pior aluno == \n\n Nome: ${piorAluno.nome} - Nota: ${piorAluno.nota}`
);
