import { Component } from '@angular/core';

//http HttpClientModule
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Portfolio';

  author = "nicoquagliata";
  dateStarted = new Date('June 13, 2019 23:39:00');

  

}
