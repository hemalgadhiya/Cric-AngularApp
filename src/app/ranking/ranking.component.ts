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
  
  odiRank = ['England','India','Australia','New Zealand', 'SouthAfrica', 'Srilanka','Pakistan','Bangladesh', 'WestIndies','Afghanistan'];
  testRank = ['India','New Zealand','SouthAfrica','England', 'Australia', 'Srilanka','Pakistan','WestIndies', 'Bangladesh','Afghanistan'];

  t20Rank = ['Pakistan','England','SouthAfrica','Australia', 'India', 'New Zealand','Afghanistan','Srilanka', 'WestIndies','Bangladesh'];
  
  

}
