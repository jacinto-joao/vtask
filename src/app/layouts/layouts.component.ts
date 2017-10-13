import { Component, OnInit } from '@angular/core';

@Component({
    selector: 've-layouts',
    template: `
    <!-- top navbar-->
    <ve-header class="topnavbar-wrapper"></ve-header>
    <!-- Main section-->
    <main id="main">
      <!-- Page section -->
      <router-outlet></router-outlet>
      <!-- Page footer-->
      <ve-footer></ve-footer>
   </main>
    `
})

export class LayoutsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}