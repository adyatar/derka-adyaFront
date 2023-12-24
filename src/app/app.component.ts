import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

constructor(private router:Router) {
  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    window.scrollTo(0, 0);
  });
}

  ngOnInit(): void {
    initFlowbite();
  }


  title = 'e-ADK';
}
