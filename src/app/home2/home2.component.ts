import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home2.component.html',
  styleUrl: './home2.component.scss'
})
export class Home2Component {
  showDemographicOptions: boolean = false;
}
