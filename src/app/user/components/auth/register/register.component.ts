import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatureSectionComponent } from '../../../shared/feature-section/feature-section.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  standalone:true,
  imports:[RouterModule,FeatureSectionComponent]
})
export class RegisterComponent {

}
