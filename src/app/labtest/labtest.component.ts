import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labtest',
  standalone: true,
  imports: [],
  templateUrl: './labtest.component.html',
  styleUrl: './labtest.component.scss',
})
export class LabtestComponent {
  constructor(public router: Router) {}
  refreshPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }

  onSubmit(): void {
    this.refreshPage();
    alert('Form has been submitted successfully!');
  }
}
