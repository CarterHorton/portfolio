import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryHyperlink } from './primary-hyperlink';

describe('PrimaryHyperlink', () => {
  let component: PrimaryHyperlink;
  let fixture: ComponentFixture<PrimaryHyperlink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryHyperlink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryHyperlink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
