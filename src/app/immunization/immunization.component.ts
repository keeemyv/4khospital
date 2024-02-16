import { Component } from '@angular/core';

@Component({
  selector: 'app-immunization',
  standalone: true,
  imports: [],
  templateUrl: './immunization.component.html',
  styleUrl: './immunization.component.scss'
})
export class ImmunizationComponent {
  onSubmit() {
    alert('Form has been submitted successfully!');
  }
}
