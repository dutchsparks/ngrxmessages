import { Message } from '../models/messages.model'
import * as messageActions from '../actions/message.actions'

const initialMessage = {
    text: 'Hello there',
    adressee: 'anyone'
};


export function messageReducer(state: Message[] = [initialMessage], action: messageActions.Actions ) {
    switch (action.type) {
        case messageActions.PRESIDENT: {
            return [...state, action.payload]       //returns een array met daarin de hele bestaande state array en voegt de action payload aan toe.
        }
        case messageActions.ATHLETE: {
            return [...state, action.payload]       //returns een array met daarin de hele bestaande state array en voegt de action payload aan toe.
        }

        default: {
            return state;
        }
    }
}