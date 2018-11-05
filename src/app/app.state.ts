import { Message } from './models/messages.model';

export interface AppState {
  readonly message: Message[];
}