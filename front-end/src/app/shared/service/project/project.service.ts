import { Injectable } from '@angular/core';
import { Projcet } from './project';

@Injectable({providedIn: 'root'})
export class ProjectService {
  public porjects: Projcet[];
  constructor() { }
}
