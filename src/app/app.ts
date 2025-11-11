import { Component, inject, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  http = inject(HttpClient);

  ngOnInit() {
    // const api = 'https://vivekmaurya.github.io/data-api/subject-list.json'
    // this.http.get('https://777vikki.github.io/skillwithtech-data/subject-list.json?ts=' + new Date().getTime())
    //   .subscribe(d => {
    //     console.log(d);
    //   });

  }
}
