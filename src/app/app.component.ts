import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';

  reproducirNota(nota:string): void{
    const audio = new Audio();
    audio.src = '../assets/sonidos/note'+nota+'.wav';
    audio.load();
    audio.play();
  }
}
