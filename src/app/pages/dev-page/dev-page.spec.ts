import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevPage } from './dev-page';

describe('DevPage', () => {
  let component: DevPage;
  let fixture: ComponentFixture<DevPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
