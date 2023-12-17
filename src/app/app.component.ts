import { Component, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { Subscription } from 'rxjs';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnDestroy {
  private themeSubscription!: Subscription;

constructor(private themeService: ThemeService, private renderer: Renderer2) { }

  ngOnInit(): void {
    initFlowbite();
    this.themeSubscription = this.themeService.getDarkMode().subscribe(isDark => {
      if (isDark) {
        this.renderer.addClass(document.documentElement, 'dark');
      } else {
        this.renderer.removeClass(document.documentElement, 'dark');
      }
    });
  }
  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  title = 'e-ADK';
}
