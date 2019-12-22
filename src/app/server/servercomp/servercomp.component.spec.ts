import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServercompComponent } from './servercomp.component';

describe('ServercompComponent', () => {
  let component: ServercompComponent;
  let fixture: ComponentFixture<ServercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
