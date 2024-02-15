import { Component } from '@angular/core';

@Component({
  selector: 'app-iao',
  standalone: true,
  imports: [],
  templateUrl: './iao.component.html',
  styleUrl: './iao.component.scss'
})
export class IaoComponent {
  onSubmit() {
    alert('Form has been submitted successfully!');
  }
}
