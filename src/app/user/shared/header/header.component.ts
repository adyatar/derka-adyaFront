import { Component, HostListener } from '@angular/core';
import { ThemeService } from "../../../services/theme.service";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports:[RouterModule]
})
export class HeaderComponent {

  constructor(private themeService: ThemeService) { }

  private isDropdownVisible: boolean = false;

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }

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
