/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimateService } from './animate.service';

describe('Service: Animate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimateService]
    });
  });

  it('should ...', inject([AnimateService], (service: AnimateService) => {
    expect(service).toBeTruthy();
  }));
});
