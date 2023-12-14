import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loader = signal(false);

  get loader() {
    return this._loader;
  }

  show() {
    this._loader.set(true);
  }

  hide() {
    this._loader.set(false);
  }
}
