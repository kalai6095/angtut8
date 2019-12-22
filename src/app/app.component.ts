import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtut8';
  serverElements=[{
    type: 'server',
    name: 'Sample ',
    content: 'Sample Content'
  }];

  onServerAdded(serverData:{newServerName:string,newServerContent:string}) {
      var temp={
        type: 'server',
        name: serverData.newServerName,
        content: serverData.newServerContent
      }
      this.serverElements.push(temp);
    }
    onAddblueprintAdded(serverData:{newServerName:string,newServerContent:string}) {
      alert("hi"+ serverData.newServerName);
      let temp= {
        type: 'blueprint',
        name: serverData.newServerName,
        content: serverData.newServerContent
      };
      this.serverElements.push(temp);
    }
  
}
