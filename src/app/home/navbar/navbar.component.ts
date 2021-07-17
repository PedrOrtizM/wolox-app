import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public scrollWindow: Subscription | any;
  @ViewChild('headerNav') headerNav: ElementRef | any;


  constructor(private rederer: Renderer2) { }

  public ngOnInit(): void {
    this.subscribeScroll();
  }

  public subscribeScroll() {
    this.scrollWindow = fromEvent(window, 'scroll')
      .pipe(map(() => document.documentElement.scrollTop > 80))
      .subscribe((addClass) => {
        addClass ?
          this.rederer.addClass(this.headerNav.nativeElement, 'nav-white') :
          this.rederer.removeClass(this.headerNav.nativeElement, 'nav-white');  
      });
  }

  ngOnDestroy() {
    this.scrollWindow.unsubscribe();
  }
}
