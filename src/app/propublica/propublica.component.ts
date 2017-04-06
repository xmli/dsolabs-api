import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../services/orgs.service';

@Component({
  selector: 'app-propublica',
  templateUrl: './propublica.component.html',
  styleUrls: ['./propublica.component.css'],
  providers: [ OrgsService ]
})
export class PropublicaComponent implements OnInit {

  /****************************/
  /*  ProPublica API          */
  /****************************/
  requestEIN: number = 954806856;
  propublicOrg = {
    id: null,
    ein: null,
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: ""
  };

  constructor(private orgsService: OrgsService) { }

  getProPublicaOrg() {
    this.orgsService.getProPublicaAPI(this.requestEIN).subscribe(
      data => {
        this.propublicOrg = data["organization"];
      },
      err => {
        console.error(err);
      })
  }
  
  ngOnInit() {
  }

}
