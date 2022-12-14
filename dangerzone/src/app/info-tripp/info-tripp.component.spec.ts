import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrippComponent } from './info-tripp.component';

describe('InfoTrippComponent', () => {
  let component: InfoTrippComponent;
  let fixture: ComponentFixture<InfoTrippComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTrippComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTrippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
