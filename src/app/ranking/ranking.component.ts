import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { Key } from 'protractor';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  odiRank = {1:'England',2:'India',3:'Australia',4:'New Zealand', 5:'SouthAfrica', 6:'Srilanka',7:'Pakistan',8:'Bangladesh', 9:'WestIndies'};

  testRank = {1:'India',2:'New Zealand',3:'SouthAfrica',4:'England', 5:'Australia', 6:'Srilanka',7:'Pakistan',8:'WestIndies', 9:'Bangladesh'};
  
  

}
