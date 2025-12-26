
export interface FrameConfig {
  name: string;
  message: string;
  image: string | null;
}

export enum GeneratorType {
  PROFILE = 'PROFILE',
  GREETING = 'GREETING'
}
