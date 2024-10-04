import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component, ElementRef, HostListener, Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ae-glaucoma-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './glaucoma-cursor.component.html',
  styleUrl: './glaucoma-cursor.component.scss',
})
export class GlaucomaCursorComponent implements AfterViewInit {
  @Input() variant = '';
  private intervalId: any;
  private counter = 0;
  private boundsX = 0;
  private boundsY = 0;

  public position = {
    x: 0, y: 0,
  };

  @ViewChild('mouseContainer', { static: false }) mouseContainer!: ElementRef;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this._updateBounds();
  }

  @HostListener('mousemove', ['$event']) onMouseMove($event: MouseEvent) {
    this.position.x = $event.clientX - this.boundsX;
    this.position.y = $event.clientY - this.boundsY;
  }

  private _updateBounds() {
    const rect = this.mouseContainer.nativeElement.getBoundingClientRect();
    this.boundsX = rect.left;
    this.boundsY = rect.top;
  }
}
