import { Component } from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { ChangelogCardConfig } from '@shared/constants/cards.constants';

/**
 * TODO: add changelog from markdown file
 */
@Component({
  selector: 'ae-changelog',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './changelog.component.html',
  styleUrl: './changelog.component.scss',
})
export class ChangelogComponent {
  ChangelogCardConfig = ChangelogCardConfig;
}
