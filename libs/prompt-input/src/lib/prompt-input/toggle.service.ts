import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  constructor() { }

  toggle = signal<boolean>(false)

  public show() {
    return this.toggle.set(true);
  }
  public hide() {
    return this.toggle.set(false)
  }


}
