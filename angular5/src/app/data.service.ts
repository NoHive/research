import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['get some money', 'have fun']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(aGoal){
    this.goals.next(aGoal);
  }

}
