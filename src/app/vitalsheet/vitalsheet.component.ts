import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-vitalsheet',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './vitalsheet.component.html',
  styleUrl: './vitalsheet.component.scss',
})
export class VitalsheetComponent {
  constructor() {}

  submittedVitals: any[] = [];
  formData: any = {};
  addMode: boolean = false;
  addModder: boolean = false;
  bpStatus2: string = '';

  ngOnInit() {
    const storedData = localStorage.getItem('submittedVitals');
    if (storedData) {
      this.submittedVitals = JSON.parse(storedData);
    }
  }

  toggleAddModder() {
    this.addMode = !this.addMode;
  }

  AddMode() {
    this.addMode = true;
  }

  cancelAdd() {
    this.addMode = false;
  }
  submitVital() {
    this.submittedVitals.push({ ...this.formData });
    localStorage.setItem(
      'submittedVitals',
      JSON.stringify(this.submittedVitals)
    );
    this.formData = {}; // Clear the form\
    alert('Vital sheet submitted successfully!');
    this.addModder = false;
    this.addMode = false;
  }

  deleteRow(index: number) {
    this.submittedVitals.splice(index, 1);
    localStorage.setItem(
      'submittedVitals',
      JSON.stringify(this.submittedVitals)
    );
  }

  calculateBPStatus(systolic: number, diastolic: number): string {
    if (
      systolic >= 121 &&
      systolic <= 129 &&
      diastolic >= 60 &&
      diastolic <= 80
    ) {
      return 'Elevated';
    } else if (
      systolic >= 90 &&
      systolic <= 120 &&
      diastolic >= 60 &&
      diastolic <= 80
    ) {
      return 'Normal';
    } else {
      return 'Irregular';
    }
  }

  getBPStatusColor(bpStatus: string): string {
    switch (bpStatus) {
      case 'Normal':
        return 'green';
      case 'Elevated':
        return 'orange';
      case 'Irregular':
        return 'red';
      default:
        return ''; // You can set a default color if needed
    }
  }

  getTemperatureColor(temperature: number): string {
    if (temperature >= 36.1 && temperature <= 37.5) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getPRColor(pr: number): string {
    if (pr >= 60 && pr <= 100) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getRRColor(rr: number): string {
    if (rr >= 12 && rr <= 16) {
      return 'green';
    } else {
      return 'red';
    }
  }

  getO2SATColor(o2sat: number): string {
    if (o2sat >= 95 && o2sat <= 100) {
      return 'green';
    } else {
      return 'red';
    }
  }

}
