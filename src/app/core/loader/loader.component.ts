import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'pro-glove-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  loading = false;

  constructor(
    private loadingService: LoaderService
  ) { }

  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this.loadingService.loadingSub
      .pipe(delay(0))
      .subscribe((loading: boolean) => {
        this.loading = loading;
      });
  }
}
