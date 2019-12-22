import { Component, OnInit, Input,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-inputcomp',
  templateUrl: './inputcomp.component.html',
  styleUrls: ['./inputcomp.component.css']
})
export class InputcompComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  severCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  bluePrintedCreated=new EventEmitter<{serverName:string,serverContent:string}>();

  //serverElements=[];
  constructor() { }
  @Input('title') tit:string;

  ngOnInit() {
  }
  onAddServer() {
    this.severCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  /*  var temp={
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    }
    this.serverElements.push(temp);*/
  }
  onAddblueprint() { alert()
    this.bluePrintedCreated.emit({
      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  /*  let temp= {
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    };
    this.serverElements.push(temp);*/
  }


}
