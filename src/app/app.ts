import { Component, signal } from '@angular/core';
import { Dashboard } from './layout/dashboard/dashboard';

@Component({
  imports: [Dashboard],
  selector: 'nex-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('nexora');
}
