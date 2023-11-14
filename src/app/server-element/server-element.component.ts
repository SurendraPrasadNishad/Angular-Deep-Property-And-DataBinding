import { Component, OnInit,Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
  //When particular comnponent css applied to particular component html ie:default(Emulated)
  //then it work only for that particular component but if put (ViewEncapsulation.None) then it applied gobally
  //but if applied (ViewEncapsulation.Native or shadowDom) then work for only that particular component on 
  //the basic of native browser
})
export class ServerElementComponent implements OnInit {
  //js object for type defination
@Input() element:{
  name:string;
  type:string;
  content:string;
}
  constructor() { }

  ngOnInit(): void {
  }

}
