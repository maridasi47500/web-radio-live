import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RadioService } from '../radio.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit,OnDestroy {

  constructor(private radio: RadioService, private route: ActivatedRoute,
	       private location: Location) { }
	       myradio:any;
	       btn1:any="Play";
	       status:any="Paused";
	       audio:any=new Audio();

  ngOnInit() {
	  const id = Number(this.route.snapshot.paramMap.get('id'));
	  this.myradio=this.radio.radios().filter(x=>x["id"]===String(id))[0]

  }
  ngOnDestroy() {
		  if (this.audio && !this.audio.paused){
			  this.audio.pause();
		  }
		  this.audio=new Audio();

  }
  ecoute(){
	  if (this.audio){
		  /*alert("hey");*/
	  this.audio.play();
	  }
  }
  webradio(){
	  if (this.btn1 === "Play"){
		  this.btn1="Pause";
		  this.status="Playing";
		  this.audio=new Audio();

		  this.audio.addEventListener('loadedmetadata', () => {
			  this.ecoute();});
		  this.audio.src=this.myradio.url;
		  this.audio.load();
	  }else{
		  this.btn1="Play";
		  this.status="Paused";
		  if (!this.audio.paused){
			  this.audio.pause();
		  }
		  this.audio=new Audio();
	  }
  }

}
