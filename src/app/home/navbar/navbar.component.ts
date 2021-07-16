import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

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
    this.scrollWindow = fromEvent(window, 'scroll').subscribe(() => 
      this.rederer.addClass(this.headerNav.nativeElement, 'nav-white')
    );
  }

  ngOnDestroy() {
    this.scrollWindow.unsubscribe();
  }
}
