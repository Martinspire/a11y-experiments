import {
  AfterViewInit,
  Component, ElementRef,
  ViewChild,
} from '@angular/core';
import { CardComponent } from '@shared/components/card/card.component';
import { DummyExampleGraphValues } from '@shared/constants/graphs.constants';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'ae-graph',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent implements AfterViewInit {
  @ViewChild('graph', { read: ElementRef }) graph!: ElementRef;
  chart!: Chart;

  ngAfterViewInit() {
    this.chart = new Chart(this.graph.nativeElement, {
      type: 'bar',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow',
          'Green',
          'Purple',
          'Orange',
        ],
        datasets: [
          {
            label: '# of Votes',
            data: DummyExampleGraphValues,
            borderWidth: 1,
          },
        ],
      },
      options: { scales: { y: { beginAtZero: true } } },
    });
  }
}
