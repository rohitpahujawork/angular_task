import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequetlyAskedComponent } from './frequetly-asked.component';

describe('FrequetlyAskedComponent', () => {
  let component: FrequetlyAskedComponent;
  let fixture: ComponentFixture<FrequetlyAskedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequetlyAskedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequetlyAskedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
