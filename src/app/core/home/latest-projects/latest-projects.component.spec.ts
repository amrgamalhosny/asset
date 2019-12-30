import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProjectsComponent } from './latest-projects.component';

describe('LatestProjectsComponent', () => {
  let component: LatestProjectsComponent;
  let fixture: ComponentFixture<LatestProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
