import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit, OnDestroy {
  title = '';
  iconUrl = '';
  componentDestroyed$: Subject<any>;

  constructor(private readonly activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.componentDestroyed$ = new Subject<any>();
    this.activatedRoute.data.pipe(
      takeUntil(this.componentDestroyed$)
    ).subscribe(data => {
      this.title = data && data.pageTitle ? data.pageTitle : '';
      this.iconUrl = data && data.iconUrl ? data.iconUrl : '';
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
