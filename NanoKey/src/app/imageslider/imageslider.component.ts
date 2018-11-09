import { Component, OnInit } from '@angular/core';
import {Http, HttpModule} from '@angular/http'
import { Image } from '../interfaces/image';
import {map} from 'rxjs/operators';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
@Component({
    selector: 'app-imageslider',
    templateUrl: './imageslider.component.html',
    styleUrls: ['./imageslider.component.css']
  })
  
  export class ImagesliderComponent implements OnInit { 
    constructor (private http: Http) { }
    IMAGES: Image[];
    ngOnInit() {
       this.http.get('src/assets/images/images.json').pipe(map(data => data.json())).subscribe(result => {
        this.IMAGES=result; console.log(this.IMAGES);
       })
    } 

   }
   