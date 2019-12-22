import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servercomp',
  templateUrl: './servercomp.component.html',
  styleUrls: ['./servercomp.component.css']
})
export class ServercompComponent implements OnInit {

  @Input() element: {
    type: string,
    name: string,
    content: string
  }
  constructor() { }

  ngOnInit() {
  }

}
