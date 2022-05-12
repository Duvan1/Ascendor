import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  @Input() isLoading: boolean | undefined;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();
  public src: string = '';
}
