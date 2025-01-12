import { Component } from '@angular/core';

@Component({
  selector: 'ae-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
}
