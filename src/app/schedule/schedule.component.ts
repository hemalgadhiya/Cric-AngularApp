import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  date:string[]=[];
  team1:string[]=[];
  team2:string[]=[];
  teams:string[]=[];
  matches:string[];
  filterd_matches;
  public latitude;
  public longitude;
  public time;
  public offset;
  //timezone:any;
  constructor(private http:HttpClient) { 
    let mom = moment();
  }
  selectevalue=''
  
  ngOnInit() {
    this.getLocation();
    const apiCall = this.http.get("https://cricapi.com/api/matches?apikey=rLfdquaGCne1gyEV9NKt402beM83");
    apiCall.subscribe((data)=> {
      
      this.matches = data['matches'];
      
      this.getallTeam();
      this.filterd_matches=this.matches;
      //this.getDate();
      var mat = this.matches[0]
      console.log(this.matches)
      console.log("got the response")
      //this.timezone = '+0000';
      
      //this.SetTimeZone();
    })
  }

  // getDate():string[]{
  // //console.log(this.matches[0])
  //   for(let match of this.matches){
  //     //this.date.push(match['date'])
  //     console.log(typeof(match['date']));
  //   }
  //   this.date=this.date.map(date=>date.slice(0,10));
  // //console.log(this.date);
  
  // return this.date
  // };

  getTeam1(){
    for(let match of this.matches){
      this.team1.push(match['team-1'])
    }
    //console.log(this.team1);
    //return this.team1;
  }
  getTeam2(){
    for(let match of this.matches){
      this.team2.push(match['team-2'])
    }
  }  

  filterMatches(value){
    this.selectevalue = value;
    if(this.selectevalue == 'Full Schedule'){
      this.filterd_matches = this.matches;
    }else{
      this.filterd_matches = this.matches.filter(match => ( match['team-1']) == this.selectevalue || match['team-2']==this.selectevalue)
    }
    //this.filterd_matches = this.matches.filter(match => ( match['team-1']) == this.selectevalue || match['team-2']==this.selectevalue)
  }
  // setTimezone(value){
  //   if(value=="GMT"){
  //     this.timezone = "+0000"
  //   }
  //   else if(value=="New York"){
  //     this.timezone = "-0400"
  //   }

  // }
  getallTeam(){
    this.getTeam1();
    this.getTeam2();
    this.teams = this.team1.concat(this.team2)
    this.teams = this.teams.filter((item,position)=>{
      return this.teams.indexOf(item)==position
    })
  }

  SetTimeZone(){
    const timeapicall=this.http.get("https://maps.googleapis.com/maps/api/timezone/json?location=" + this.latitude + "," + this.longitude + "&timestamp=" + this.time + "&key=AIzaSyDUikRh-fOS8H6fB1HrBk0ckDBN2FjTDpc");
    timeapicall.subscribe((res) => {
      this.offset = (res['rawOffset']/3600).toString();
      console.log(res)
    })
  }
  
  getLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position:Position)=>{
          console.log("Latitude: " + position.coords.latitude + "longitude: " + position.coords.longitude);
          this.time = Math.trunc(position.timestamp/10000);
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        this.SetTimeZone();

      })
    }
  }
  }
