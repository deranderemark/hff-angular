import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenHydrogenComponent } from './green-hydrogen.component';

describe('GreenHydrogenComponent', () => {
  let component: GreenHydrogenComponent;
  let fixture: ComponentFixture<GreenHydrogenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenHydrogenComponent]
    });
    fixture = TestBed.createComponent(GreenHydrogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
