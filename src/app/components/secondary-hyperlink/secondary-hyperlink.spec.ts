import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryHyperlink } from './secondary-hyperlink';

describe('SecondaryHyperlink', () => {
  let component: SecondaryHyperlink;
  let fixture: ComponentFixture<SecondaryHyperlink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryHyperlink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryHyperlink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
