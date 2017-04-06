import { Component, OnInit } from '@angular/core';
import { OrgsService } from '../services/orgs.service';

@Component({
  selector: 'app-guidestar',
  templateUrl: './guidestar.component.html',
  styleUrls: ['./guidestar.component.css'],
  providers: [ OrgsService ]
})
export class GuidestarComponent implements OnInit {

  constructor(private orgsService: OrgsService) { }

  /****************************/
  /*  GuideStar Detail API    */
  /****************************/
  requestID: number = 7831216;
  guidestarOrg = {
    organization_id: null,
    ein: null,
    organization_name: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    zip: "",
    mission: ""
  }

  /****************************/
  /*  GuideStar Search API    */
  /****************************/  
  searchParams = {
    organization_id: null,
    ein: null,
    organization_name: "",
    city: "",
    state: "",
    zip: "",
    participation: ""
  }
  guideStarSearchResults:SearchResults;
  gsSearched:boolean = false;
  currPage: number = 1;

  ngOnInit() {
  }

  getGuideStarOrg() {
    this.orgsService.getGuideStarAPI(this.requestID).subscribe(
      data => {
        this.guidestarOrg = data;
      },
      err => {
        console.error(err);
      })
  }

  //
  submitParams() {
    let stringParams = this.stringifyParams(this.searchParams);
    console.log("Calling Search API..." + stringParams);
    this.orgsService.getGuideStarSearchAPI(stringParams, this.currPage).subscribe(
      data => {
        this.guideStarSearchResults = data;
        this.gsSearched = true;
      },
      err => {
        console.error(err);
      })
  }

  stringifyParams(params:GuideStarSearchParams) {
      let stringParam = "?q=";
      for (var key in params) {
          if (params.hasOwnProperty(key)) {
              if(params[key] !== "" && params[key] !== null) {
                  // console.log(key + " -> " + params[key]);
                  stringParam += (key + ":" + params[key] + "&");
              }
          }
      }
      if(stringParam === "?q=") stringParam = "";
      else stringParam = stringParam.slice(0, -1);

      return stringParam;
  }

  prevPage():void {
    if(this.currPage > 1) {
      this.currPage--;
      this.submitParams();
    }
  }
  nextPage(): void {
      this.currPage++;
      this.submitParams();
  }
}


interface SearchResults {
  total_hits: number,
  showing: string,
  hits: GuideStarOrg[]
}

interface GuideStarOrg { 
    organization_id: number,
    ein: number,
    organization_name: string,
    address_line1: string,
    address_line2: string,
    city: string,
    state: string,
    zip: string,
    mission: string
}

interface GuideStarSearchParams{
  organization_id: number,
  ein: number,
  organization_name: string,
  city: string,
  state: string,
  zip: string,
  participation: string
}
