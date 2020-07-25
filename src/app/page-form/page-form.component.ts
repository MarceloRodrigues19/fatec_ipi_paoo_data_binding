import { Component } from '@angular/core';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent {

  faculdade: string;

  adicionarFaculdade (faculdadeInput) : void {
    console.log(faculdadeInput.value);
  }

}