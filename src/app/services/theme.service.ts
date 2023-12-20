import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() { }

  private darkMode = new BehaviorSubject<boolean>(true);

  toggleDarkMode(): void {
    this.darkMode.next(!this.darkMode.value);
  }

  getDarkMode() {
    return this.darkMode.asObservable();
  }
}
