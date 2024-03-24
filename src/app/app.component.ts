import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, AboutComponent, AboutComponent],
})
export class AppComponent {
  title = 'snail.id';
  linkedinLink = 'https://www.linkedin.com/in/matilda-snail-422823287';
  githubLink = 'https://github.com/JulySnail';
  showAboutComponent: boolean = false;
  toggleAboutComponent() {
    this.showAboutComponent = !this.showAboutComponent;
  }
}
