import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Answer } from './models/anwer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularHttp';
  public pregunta = '';
  public respuesta?: Answer;

  constructor(private appService: AppService) {
  }

  onSubmit() {
    this.appService.obtenerRespuesta().subscribe(res => this.respuesta = res);
  }
}
