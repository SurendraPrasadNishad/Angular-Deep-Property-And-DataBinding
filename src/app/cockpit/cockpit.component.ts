import { Component, OnInit ,EventEmitter,Output,ElementRef,ViewChild} from '@angular/core';
import { NgModule } from '@angular/compiler/src/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  providers:[NgModel]
})
export class CockpitComponent implements OnInit {
  //making custom event serverCreated so making properties serverCreated and blueprintCreated
  //new EventEmitter<> make event imported from @angular/core'; it is generic type so <{eventData}>
  //for calling constructor of the eventemitter() which created and store  on serverCreated
  //for passing out of component use decorator @Output()
 @Output('serCreated') serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
 @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();;
  newServerName = '';
  newServerContent = '';
 debugger
  port:any;
  //secondway of local reference
  @ViewChild('cockpit') portNumber:ElementRef;
  onAddPortNumber(portNumber:HTMLInputElement){
    //getting value first way for local reference
    this.port=portNumber.value;
     //getting value second way for local reference
     this.port=this.portNumber.nativeElement.value;

  }
  constructor() { 
    
  }

  ngOnInit(): void {
  }
  onAddServer(){
    //emit new event of serverCreated type and pass object emit(object)
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
  onAddBlueprint(){
    //emit new event of serverCreated type and pass object emit(object)
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
  }
   }


