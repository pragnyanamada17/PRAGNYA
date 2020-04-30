import { Component, OnInit } from '@angular/core';
import { HttpClientService , DiagnosticCentre } from '../service.service';
@Component({
  selector: 'app-add-Test',
  templateUrl: './add-Test.component.html',
  styleUrls: ['./add-Test.component.css']
})
export class AddCentreComponent implements OnInit {
  
  user: DiagnosticCentre = new DiagnosticCentre("","","");
  centersList: any;
  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(){
     
     this.getCenterNames();
  }
  createTest(): void {

    this.httpClientService.createTest(this.user)
        .subscribe( data => {
          alert(" added successfully.");
        });

  };
  

  getCenterNames(): any {

    let cntname = new Array();
  
   return  this.httpClientService.getCenterNames()
    .subscribe( data => {
      data.forEach(element => {
        cntname.push(element.centreName);
      });
      this.centersList = cntname;
    });
  }
}
