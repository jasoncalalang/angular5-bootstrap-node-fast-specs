import {getTestBed, TestBed} from '@angular/core/testing';
import {HeaderModule} from './header.module';
import {HeaderComponent} from './header.component';

require('should');

describe('the header should show', () => {
  let element;

  it('something', () => {
    element.querySelector('mat-toolbar[rel="header"]').textContent.should.containEql('Something');
  });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HeaderModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});
