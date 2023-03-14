import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  Component1Data:any;
  constructor(private dataSharing : DataSharingService) {
    this.dataSharing.sharingData.subscribe(datas=>{
      this.Component1Data = datas;
    })
   }

  ngOnInit(): void {
  }
  onSubmit(data:any) { 
    this.dataSharing.sharingData.next(data.value);
  }
}
