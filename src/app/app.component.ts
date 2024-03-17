import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageComponent } from '@shared/components/page/page.component';
import { HeaderComponent } from './core/header/header.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    PageComponent,
  ],
  selector: 'ae-app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'a11y-experiments';
}
