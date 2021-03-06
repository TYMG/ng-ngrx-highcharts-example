import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartBarComponent } from './highchart-bar.component';

describe('HighchartBarComponent', () => {
  let component: HighchartBarComponent;
  let fixture: ComponentFixture<HighchartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighchartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighchartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
