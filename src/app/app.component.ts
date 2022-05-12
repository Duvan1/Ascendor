import { Component } from '@angular/core';
import { UsersService } from 'src/lib/services/users.service';
('../lib/users.service');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoading = false;
  public src: string = '';
  public data$: any;
  public suggestion: any;
  public showSuggestion: boolean = false;

  constructor(private apiRest: UsersService) {}

  onChange(word: string) {
    if (this.data$ && word) {
      if (this.data$.length > 0) {
        this.suggestion = this.data$.filter(
          (d: { login: string }) => d.login.search(word) != -1
        );
        this.showSuggestion = this.suggestion ? true : false;
      }
    } else {
      this.showSuggestion = false;
    }
  }

  search(value: any): any {
    this.isLoading = true;
    this.showSuggestion = false;

    if (value.length > 3)
      this.apiRest.searchTrack({ q: value }).subscribe(
        (res) => {
          this.data$ = res.items;
          console.log(this.data$.length);

          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          console.error(err);
        }
      );
    else {
      this.isLoading = false;
    }
  }
}
