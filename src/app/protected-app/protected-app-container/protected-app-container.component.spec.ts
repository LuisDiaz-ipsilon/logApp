import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedAppContainerComponent } from './protected-app-container.component';

describe('ProtectedAppContainerComponent', () => {
  let component: ProtectedAppContainerComponent;
  let fixture: ComponentFixture<ProtectedAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtectedAppContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtectedAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
