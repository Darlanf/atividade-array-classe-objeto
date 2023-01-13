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

export enum TipoStatus {
  aprovado = "Aprovado",
  reprovado = "Reprovado",
}

export class Aluno {
  nome: string;
  idade: number;
  nota?: number;
  status?: TipoStatus;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  atribuirStatus() {
    if (this.nota! >= 6) {
      this.status = TipoStatus.aprovado;
    } else {
      this.status = TipoStatus.reprovado;
    }
  }

  atribuirResposta(gabarito: string[]) {
    this.nota = 0;

    let alternativas: string[] = ["A", "B", "C"];

    let assinaladas = [];

    for (let resposta of gabarito) {
      let respostaDoAluno =
        Math.floor(Math.random() * 10) % 3;
      assinaladas.push(
        alternativas[respostaDoAluno]
      );

      if (
        resposta === gabarito[respostaDoAluno]
      ) {
        this.nota += 1;
      }
    }

    this.atribuirStatus();
    // console.log(`Aluno ${this.nome}`);
    // console.log(`Gabarito ${gabarito}`);
    // console.log(`Assinaladas ${assinaladas}`);
    // console.log(`Nota ${this.nota}`);
    // console.log(`Situação ${this.status}\n`);
  }
}
