import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  @Input() data$: any;
  
  constructor() {}

  ngOnInit(): void {}
}
