import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component, ElementRef, OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule,
} from '@angular/forms';
import {
  AudioFileInterface,
  AudioPlayer, AudiogramGroupInterface,
} from '@interfaces/audiogram.interface';
import { CardComponent } from '@shared/components/card/card.component';
import {
  AudioFiles,
  AudiogramDefault,
  Audiograms,
} from '@shared/constants/audiogram.constants';
import { AudiogramType } from '@shared/types/audiogram.type';
import { Chart } from 'chart.js/auto';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'ae-hearing-loss',
  standalone: true,
  imports: [
    ButtonModule,
    CardComponent,
    CommonModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SliderModule,
    ToolbarModule,
  ],
  templateUrl: './hearing-loss.component.html',
  styleUrl: './hearing-loss.component.scss',
})
export class HearingLossComponent implements OnInit, AfterViewInit {
  @ViewChild('audiogram', { read: ElementRef }) audiogram!: ElementRef;
  chart!: Chart;
  experimentConfig!: FormGroup;
  currentData!: AudiogramType;
  audiograms: AudiogramGroupInterface[] = Audiograms;

  sliderMin = -140;
  sliderMax = 0;
  sliderStep = 1;
  sliders = [
    '125hz',
    '250hz',
    '500hz',
    '750hz',
    '1000hz',
    '1500hz',
    '2000hz',
    '3000hz',
    '4000hz',
    '6000hz',
    '8000hz',
  ];

  player: AudioPlayer = {
    currentTime: 0,
    error: '',
    isPlaying: false,
    loop: true,
    volume: 100,
  };

  audioFiles: AudioFileInterface[] = AudioFiles;

  private _audio = new Audio();
  private _audioContext = new AudioContext();
  private _filters: BiquadFilterNode[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this._setAudioFilters();
  }

  ngOnInit(): void {
    this.experimentConfig = this.formBuilder.group({ selectedAudiogram: new FormControl('') });
    this.sliders.forEach((slider: string) => {
      this.experimentConfig.addControl(slider, new FormControl(0));
    });
    this.currentData = AudiogramDefault;
    this._registerEvents();
  }

  ngAfterViewInit() {
    this.chart = new Chart(this.audiogram.nativeElement, {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Hearing Loss (dB)',
            data: this.currentData,
            borderWidth: 1,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
          },
        ],
        labels: this.sliders,
      },
      options: {
        responsive: true,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Frequency (Hz)',
            },
          },
          y: {
            min: -140,
            max: 0,
            ticks: { stepSize: 10 },
            title: {
              display: true,
              text: 'Hearing Loss (dB)',
            },
          },
        },
      },
    });
  }

  setAudiogram($event: any): void {
    const audiogram = $event.value as AudiogramType;
    this.currentData = audiogram;
    this._updateSliders();
    this.chart.data.datasets[0].data = audiogram;
    this.chart.update();
    this._updateFilters();
  }

  private _updateData(): void {
    this.chart.data.datasets[0].data = this.currentData;
    this.chart.update();
  }

  private _updateSliders(): void {
    this.sliders.forEach((slider: string, index: number) => {
      this.experimentConfig.get(slider)?.setValue(this.currentData[index]);
    });
  }

  updateFromSliders(): void {
    this.sliders.forEach((slider: string, index: number) => {
      this.currentData[index] = this.experimentConfig.get(slider)?.value;
    });
    this._updateData();
    this._updateFilters();
  }

  play(): void {
    if (this.player.currentFile) {
      this._audio.play();
      this._audio.loop = this.player.loop;
      this.player.isPlaying = true;
    }
  }

  pause(): void {
    this._audio.pause();
    this.player.isPlaying = false;
  }

  changeVolume(): void {
    this._audio.volume = this.player.volume / 100;
  }

  toggleMute(): void {
    if (this.player.volume === 0) {
      this.player.volume = 100;
    } else {
      this.player.volume = 0;
    }
  }

  toggleLoop(): void {
    this.player.loop = !this.player.loop;
    this._audio.loop = this.player.loop;
  }

  changeAudioFile(file: AudioFileInterface): void {
    if (this.player.isPlaying) {
      this.pause();
    }
    this._audio.src = `assets/audio/samples/${file.filename}`;
    this._audio.load();
    this.play();
  }

  private _setAudioFilters() {
    const source = this._audioContext.createMediaElementSource(this._audio);
    this.sliders.forEach((slider: string, index: number) => {
      this._filters[index] = this._audioContext.createBiquadFilter();
      this._filters[index].type = 'peaking';
      this._filters[index].frequency.value = Math.round(parseInt(slider, 10));
      this._filters[index].Q.value = 1;
      this._filters[index].gain.value = 0;
    });
    for (let i = 0; i < this._filters.length - 1; i++) {
      this._filters[i].connect(this._filters[i + 1]);
    }
    // Connect the source to the first filter
    source.connect(this._filters[0]);
    // Connect the last filter to the destination
    this._filters[this._filters.length - 1].connect(this._audioContext.destination);
  }

  private _updateFilters() {
    this._filters.forEach((filter: BiquadFilterNode, index: number) => {
      filter.gain.value = this.currentData[index] / 10;
    });
  }

  private _registerEvents() {
    this._audio.addEventListener('error', (error) => {
      this.player.error = 'An error occurred while loading the audio file.';
      console.error(error);
    });

    this._audio.addEventListener('timeupdate', () => {
      this.player.currentTime = Math.round(this._audio.currentTime);
    });

    this._audio.addEventListener('ended', () => {
      this.player.isPlaying = false;
    });
  }
}
