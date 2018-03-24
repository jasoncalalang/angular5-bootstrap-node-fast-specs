import {getTestBed, TestBed} from '@angular/core/testing';
import {TileModule} from './tile.module';
import {TileComponent} from './tile.component';

require('should');

describe('tile component should show', () => {
  let element;

  it('name');
  it('price');
  it('vendor');
  it('button');

  // it('something', () => {
  //   element.querySelector('mat-card-title[rel=card-title]').textContent.should.containEql('1');
  // });

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [TileModule]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TileComponent);
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });
});
