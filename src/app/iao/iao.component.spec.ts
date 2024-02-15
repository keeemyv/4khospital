import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaoComponent } from './iao.component';

describe('IaoComponent', () => {
  let component: IaoComponent;
  let fixture: ComponentFixture<IaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
