import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Vessel} from '../models/vessel.model';

@Injectable({
  providedIn: 'root'
})
export class VesselDetailStateService {
  vesselDetailState: BehaviorSubject<Vessel> = new BehaviorSubject<Vessel>(new Vessel());

  constructor() {
  }

  addVessel(vessel) {
    this.vesselDetailState.next(vessel);
  }

  getVessel() {
    return this.vesselDetailState.asObservable();
  }
}
