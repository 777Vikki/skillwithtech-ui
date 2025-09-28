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
    this.http.get('https://raw.githubusercontent.com/777Vikki/skillwithtech-db/master/skillWithTech.json?ts=' + new Date().getTime())
      .subscribe(d => {
        console.log(d);
      });

    this.http.get<any>("https://777vikki.github.io/skillwithtech-db/blob/master/skillWithTech.json")
      .subscribe(data => {
        console.log("Fetched JSON:", data);
      });

  }
}
