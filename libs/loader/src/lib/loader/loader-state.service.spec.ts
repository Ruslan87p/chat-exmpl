import { TestBed } from '@angular/core/testing';

import { LoaderStateService } from './loader-state.service';

describe('LoaderStateService', () => {
  let service: LoaderStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.enable()
    expect(service.enable).toBeTruthy();
  });

  it('should be created', () => {
    service.disable()
    expect(service.disable).toBeTruthy();
  });
});
