import { Action } from '@ngrx/store';
import { Message } from '../models/messages.model';

export const PRESIDENT = 'President';
export const ATHLETE = 'Athlete';

export class President implements Action {
    readonly type = PRESIDENT;
    constructor(public payload: Message){}
}

export class Athlete implements Action {
    readonly type = ATHLETE;
    constructor(public payload: Message){}
}

export type Actions = President | Athlete;
