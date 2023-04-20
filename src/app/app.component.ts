import { Component, OnInit } from '@angular/core';
import './extensions/array.extension'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-teste';
  numero!: number;
  // arr: any[] = ['a', 'b', 'c', 'd'];
  arr = new Array().fill(null);

  ngOnInit() {
    this.arr = this.criarArray();
    const resultadoArray = this.arr.NuloOuNaoPossuiItens();

    this.numero = 123456789;
    const resultado = this.numero.SeparadorMilhares();

    const array = new Array<Teste>();
    const item = new Teste();
    item.id = 1;
    item.nome = 'teste';

    const item2 = new Teste();
    item2.id = 123;
    item2.nome = 'teste';
    
    array.push(item, item2);

    const resultado2 = array.PossuiItemComIdZeroOuInvalido();

    // if (!Array.prototype.removeLast) {
    //   Array.prototype.removeLast = function () {
    //     this.pop();

    //     return this;
    //   };
    // }

    // const result = arr.removeLast();

    // console.log(arr);
    // console.log(result);
  }

  criarArray() {
    return [];
  }
}

export class Teste {
  public id: number | undefined;
  public nome: string | undefined;
}
