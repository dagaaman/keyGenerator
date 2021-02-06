import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-copy-block',
  templateUrl: './copy-block.component.html',
  styleUrls: ['./copy-block.component.scss']
})
export class CopyBlockComponent implements OnInit {
 @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }
}
