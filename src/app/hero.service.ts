import { Injectable } from '@angular/core';
import {HEROES} from './mock-hero';
import {Hero} from './hero';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

}
