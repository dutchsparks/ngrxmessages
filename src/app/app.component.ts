import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './app.state';
import { Observable } from 'rxjs';
import { Message } from './models/messages.model'
import { PRESIDENT } from './actions/message.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  message$: Observable<Message[]>

  constructor (private store: Store<AppState>){}                 
  ngOnInit() {
    this.message$ = this.store.select('message')
  }

messagePresident () {
  this.store.dispatch({type: 'ATHELETE'});               
}

messageAthlete () {
  this.store.dispatch({type: 'ATHELETE'});
}

}
