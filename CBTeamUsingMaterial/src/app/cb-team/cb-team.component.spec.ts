import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbTeamComponent } from './cb-team.component';

describe('CbTeamComponent', () => {
  let component: CbTeamComponent;
  let fixture: ComponentFixture<CbTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
