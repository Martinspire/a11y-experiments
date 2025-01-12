import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'ae-shake-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shake-cursor.component.html',
  styleUrl: './shake-cursor.component.scss',
})
export class ShakeCursorComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);

  @Input() multiplier = 5;
  @Input() speed = 200;
  showRealCursor = false;

  private intervalId: any;
  private counter = 0;
  private boundsX = 0;
  private boundsY = 0;

  public position = {
    x: 0, y: 0,
  };

  @ViewChild('fakeCursor', { static: false }) fakeCursor!: ElementRef;
  @ViewChild('fakeContainer', { static: false }) fakeContainer!: ElementRef;

  ngAfterViewInit() {
    this._updateBounds();
  }

  @HostListener('mousemove', ['$event']) onMouseMove($event: MouseEvent) {
    this.position.x = $event.clientX - this.boundsX;
    this.position.y = $event.clientY - this.boundsY;
    if (!this.intervalId && !this.showRealCursor) {
      this._startShaking();
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._startShaking();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._stopShaking();
  }

  @HostListener('window:scroll') onScroll() {
    this._updateBounds();
  }

  @HostListener('document:keydown.escape') onKeydownHandler() {
    this._stopShaking();
  }


  ngOnDestroy(): void {
    this._stopShaking();
  }

  private _updateBounds() {
    const rect = this.fakeContainer.nativeElement.getBoundingClientRect();
    this.boundsX = rect.left;
    this.boundsY = rect.top;
  }

  private _startShaking() {
    this.intervalId = setInterval(() => {
      const shake = 20;
      const randomMultiplier = 0.5;
      const x = (Math.random() - randomMultiplier) * shake * this.multiplier;
      const y = (Math.random() - randomMultiplier) * shake * this.multiplier;
      this.fakeCursor.nativeElement.style.left = `${this.position.x + x}px`;
      this.fakeCursor.nativeElement.style.top = `${this.position.y + y}px`;
      this.counter++;
    }, this.speed); // adjust the interval as needed
    this.showRealCursor = false;
  }

  private _stopShaking() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.fakeCursor.nativeElement.style.left = `${this.position.x}px`;
      this.fakeCursor.nativeElement.style.top = `${this.position.y}px`;
      this.counter = 0;
    }
    this.showRealCursor = true;
  }
}
