import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonStateService {

  constructor() { }

  buttonDisabled = signal<boolean>(true)
  enable() {
    return this.buttonDisabled.set(false);
  }
  disable() {
    return this.buttonDisabled.set(true)
  }

}
