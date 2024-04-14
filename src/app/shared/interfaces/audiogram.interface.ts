import { AudiogramType } from '@shared/types/audiogram.type';

export interface AudiogramGroupInterface {
  label: string;
  value: string;
  items: AudiogramCollectionInterface[];
}
export interface AudiogramCollectionInterface {
  label: string;
  value: string;
  audiogram: AudiogramType;
}

export interface AudioFileInterface {
  filename: string;
  label: string;
  duration: number;
}

export interface AudioPlayer {
  currentFile?: AudioFileInterface;
  currentTime?: number;
  error: string;
  isPlaying: boolean;
  loop: boolean;
  volume: number;
}
