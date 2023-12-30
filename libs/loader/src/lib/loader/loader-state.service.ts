import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderStateService {

  constructor() { }

  isLoading = signal<boolean>(false)
  enable() {
    return this.isLoading.set(true);
  }
  disable() {
    return this.isLoading.set(false)
  }
}
