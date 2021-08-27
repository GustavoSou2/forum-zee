import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'CardPostGS',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.css']
})
export class CardPostComponent implements OnInit {
// Directives
  @Input() id: string = '';
  @Input() username: string = '';
  @Input() datepost: string = '';
  @Input() description: string = '';
  @Input() likes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
