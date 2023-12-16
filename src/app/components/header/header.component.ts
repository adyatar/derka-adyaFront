import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDropdownVisible: boolean = false;

  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    if (!event.target.closest('#user-dropdown') && !event.target.closest('#dropdown-button')) {
      this.isDropdownVisible = false;
    }
  }

}
