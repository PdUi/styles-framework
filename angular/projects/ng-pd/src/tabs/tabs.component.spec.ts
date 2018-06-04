import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdTabsComponent } from './tabs.component';

describe('PdTabsComponent', () => {
  let component: PdTabsComponent;
  let fixture: ComponentFixture<PdTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
