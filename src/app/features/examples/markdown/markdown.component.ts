import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { MarkdownComponent } from 'ngx-markdown';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'ae-markdown',
  standalone: true,
  imports: [
    CardComponent,
    TabViewModule,
    MarkdownComponent,
  ],
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss',
})
export class MarkdownExampleComponent {

}
