import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss'],
})
export class PaperComponent implements OnInit {
  items = [
    {}, {}, {}, {}, {}, {}, {}, {}, {},
  ];

  constructor() { }

  ngOnInit() {}

}
