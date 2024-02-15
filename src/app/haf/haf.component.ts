import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-haf',
  standalone: true,
  imports: [
    NavbarComponent,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  templateUrl: './haf.component.html',
  styleUrl: './haf.component.scss',
})
export class HAFComponent {
  @ViewChild('formDirective') formDirective!: FormGroupDirective;

  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    // Initialize your form here
    this.myForm = this.fb.group({
      // Define your form controls here
    });
  }

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
