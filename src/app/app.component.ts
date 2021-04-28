import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toLinkedIn(): void {
    window.open('https://linkedin.com/in/bwsimiyu');
  }

  toGithub(): void {
    window.open('https://github.com/bwsimiyu');
  }

  toTwitter(): void {
    window.open('https://twitter.com/bwsimiyu');
  }
}
