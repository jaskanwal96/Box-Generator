import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxGeneratorComponent } from './box-generator.component';

describe('BoxGeneratorComponent', () => {
  let component: BoxGeneratorComponent;
  let fixture: ComponentFixture<BoxGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
