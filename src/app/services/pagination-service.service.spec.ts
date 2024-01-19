/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PaginationServiceService } from './pagination-service.service';

describe('Service: PaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationServiceService]
    });
  });

  it('should ...', inject([PaginationServiceService], (service: PaginationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
