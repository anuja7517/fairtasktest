import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairBasbordComponent } from './fair-basbord.component';

describe('FairBasbordComponent', () => {
  let component: FairBasbordComponent;
  let fixture: ComponentFixture<FairBasbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairBasbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairBasbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
