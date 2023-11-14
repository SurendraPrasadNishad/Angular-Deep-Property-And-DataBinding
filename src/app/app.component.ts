import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title='LearnComponentAndDataBindDeep';
  serverElements = [{type:'server',name:'TestServer',content:'This is a test server'}];

 //from cockpit getting ServerName and ServerContent ie:from inside componenmt to outside component
onServerAdded(serverData:{serverName:string,serverContent:string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
  });
}

onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
});
}
}


