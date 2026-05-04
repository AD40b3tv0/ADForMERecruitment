import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly defaultOptions: Partial<Toastify.Options> = {
    duration: 5000,
    stopOnFocus: true,
    gravity: 'top',
    position: 'left',
    offset: {
      x: 50,
      y: 20
    }
  };

  private show(message: string, className: string, overrides: Partial<Toastify.Options> = {}) {
    Toastify({
      text: message,
      className,
      ...this.defaultOptions,
      ...overrides
    } as Toastify.Options).showToast();
  }

  info(text: string) {
    this.show(text, 'info');
  }

  error(text: string | Error) {
    if (text instanceof Error) {
      text = text.message;
    }
    this.show(text, 'error');
  }
}
