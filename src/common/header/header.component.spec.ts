import {getTestBed, TestBed} from '@angular/core/testing';
import {HeaderModule} from './header.module';
import {HeaderComponent} from './header.component';

require('should');

describe('the header should show', () => {
  let element;

  it.skip('an image', () => {
    element.querySelector('img[src]').should.not.be.empty();
  });

  it('Home', () => {
    element.querySelector('a[rel=home-label]').textContent.should.containEql('Home (current)');
  });

  it('Features', () => {
    element.querySelector('a[rel=features-label]').textContent.should.containEql('Features');
  });

  it('Pricing', () => {
    element.querySelector('a[rel=pricing-label]').textContent.should.containEql('Pricing');
  });

  it('Shopping Cart', () => {
    element.querySelector('a[rel=shoppingcart-label]').textContent.should.containEql('Shopping Cart');
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
