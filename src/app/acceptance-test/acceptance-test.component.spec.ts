import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptanceTestComponent } from './acceptance-test.component';

fdescribe('AcceptanceTestComponent', () => {
  let component: AcceptanceTestComponent;
  let fixture: ComponentFixture<AcceptanceTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptanceTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptanceTestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it('should have acceptance-test class', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p.acceptance-test').textContent).toContain('acceptance-test works!');

  });





});
