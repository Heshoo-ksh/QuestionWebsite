import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesPageComponent } from './yes-page.component';

describe('YesPageComponent', () => {
  let component: YesPageComponent;
  let fixture: ComponentFixture<YesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
