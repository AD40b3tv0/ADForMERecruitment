import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { map, Subject, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  imports: [MatIcon, MatButton],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  private router = inject(Router);
  private countdownCanceled = new Subject<void>();
  private time = 10;

  countdown = toSignal(
    timer(0, 1000).pipe(
      takeUntil(this.countdownCanceled),
      map((index) => this.time - index),
      tap((timeLeft) => timeLeft === 0 && this.router.navigateByUrl('/')),
    )
  );

  redirectedCanceled = toSignal(
    this.countdownCanceled.pipe(map(() => true)),
    {initialValue: false}
  );

  public cancelRedirection() {
    this.countdownCanceled.next();
  }
}
