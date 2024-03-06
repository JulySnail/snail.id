import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snail.id';
  linkedinLink = 'https://www.linkedin.com/in/matilda-snail-422823287';
  githubLink = 'https://github.com/JulySnail';
}
