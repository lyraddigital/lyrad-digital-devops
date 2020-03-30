import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../shared/page-layout.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  courses$: Observable<Array<Course>>;
  componentDestroyed$: Subject<any>;

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.componentDestroyed$ = new Subject<any>();
    this.courses$ = this.activatedRoute.data.pipe(
      takeUntil(this.componentDestroyed$),
      map(data => data.courses)
    );
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
