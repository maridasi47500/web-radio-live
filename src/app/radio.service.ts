import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  constructor() { }
  radios(){
	  var hey= [
		  {
			  "id":"",
			  "pic":"https://www.mistralfm.com/upload/design/6025466e09f425.52059146.png",
			  "url":"http://mistralfm.ice.infomaniak.ch/mistralfm-high.mp3",
			  "title":"Mistral FM",
			  "language":"français",
			  "genres":"French Music, Pop",
			  "location":"",
			  "official_website":"",
		  },
		  {
			  "id":"",
			  "pic":"https://metis.fm/media/cache/nav_logo/uploads/media/metisfm/logo_metis_50.jpg",
			  "url":"http://metisfmguyane.ice.infomaniak.ch/metisfmguyane-64.aac",
			  "title":"Métis FM",
			  "language":"français",
			  "genres":"French Music, Pop",
			  "location":"",
			  "official_website":"https://metis.fm/",
		  },
		  {
			  "id":"",
			  "pic":"https://www.cheriefmguyane.fr/media/cache/nav_logo/uploads/media/cheriefmguyanefr/LOGO_CHERIE-FM_RVB-AVEC-CLAIM-65.gif",
			  "url":"http://cheriefmguyane.ice.infomaniak.ch/cheriefmguyane-64.aac",
			  "title":"Chérie FM",
			  "language":"français",
			  "genres":"French Music, Pop",
			  "location":"",
			  "official_website":"https://www.cheriefmguyane.fr/",
		  },
		  {
			  "id":"",
			  "pic":"https://nrjguyane.fm/media/cache/nav_logo/uploads/media/nrjguyanefm/NRJlogo_50.jpg",
			  "url":"http://nrjguyane.ice.infomaniak.ch/nrjguyane-64.mp3",
			  "title":"NRJ guyane",
			  "language":"français",
			  "genres":"French Music, Pop",
			  "location":"",
			  "official_website":"https://nrjguyane.fm/",
		  },
		  {
			  "id":"",
			  "pic":"https://static2.mytuner.mobi/media/tvos_radios/z3n4yqqzqsvu.jpg",
			  "url":"http://srv2.streaming-ingenierie.fr:8162/;stream.nsv",
			  "title":"Ouest FM guyane",
			  "language":"français",
			  "genres":"French Music, Pop",
			  "location":"",
			  "official_website":"",
		  },
	  ];
	  for (var i = 0;i<hey.length;i++){
		  hey[i]["id"] = String(i + 1);
	  }
	  return hey;

  }
}
