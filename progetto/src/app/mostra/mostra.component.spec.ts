import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraComponent } from './mostra.component';

describe('MostraComponent', () => {
  let component: MostraComponent;
  let fixture: ComponentFixture<MostraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
