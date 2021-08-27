import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HeaderGS',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toOpenAndCloseMenuLeft() {
    let add: (...tokens: string[]) => void, remove: (...tokens: string[]) => void;
    // @ts-ignore
    ({classList: {add, remove}} = document.getElementById("menu-left"));

    let statusBar = false;
    if (!statusBar) {
      add("menu-left-open");
      statusBar = true;
    } else {
      remove("menu-left-open");
      statusBar = false;
    }
  }

}
