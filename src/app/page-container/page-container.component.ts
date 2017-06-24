import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css']
})
export class PageContainerComponent implements OnInit {
  @Input() heading: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
