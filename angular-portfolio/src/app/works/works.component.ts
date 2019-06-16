import { Component, OnInit } from '@angular/core';

import { Work } from '../work';

//http HttpClientModule
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  work: Work = {
    id: 1,
    name: 'my first website',
    url: 'http://www.website.com',
    description: 'work description configurated by me for you to see whats happening',
    imageUrl: '../assets/images/thumbnail2.svg'
  };

  constructor (private httpService: HttpClient) {

  }
  arrWorks: string[];

  ngOnInit () {
    this.httpService.get('./assets/works.json').subscribe(
      data => {
        this.arrWorks = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


}
