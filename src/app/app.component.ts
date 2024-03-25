import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortraitComponent } from './portrait/portrait.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, PortraitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snail.id';
  linkedinLink = 'https://www.linkedin.com/in/matilda-snail-422823287';
  githubLink = 'https://github.com/JulySnail';

  showHomeComponent: boolean = true;

  onngInit() {

  }
}