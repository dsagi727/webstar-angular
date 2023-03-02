import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCharacterPageComponent } from './select-character-page.component';

describe('SelectCharacterPageComponent', () => {
  let component: SelectCharacterPageComponent;
  let fixture: ComponentFixture<SelectCharacterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCharacterPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
