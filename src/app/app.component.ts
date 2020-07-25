import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome: string;
  exibirCaixa: boolean = false;
  valor: string;

  alterarNome(event): void {
    console.log(event.target.value);
    this.nome = event.target.value;
	}

  adicionar(nome): void {
    console.log(nome);
    this.nome = nome;
    this.exibirCaixa = true;
	}

  alterarValor(valor): void {
    this.valor = "Novo valor: " + valor;
	}
}