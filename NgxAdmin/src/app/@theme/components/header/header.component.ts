import {Component, OnDestroy, OnInit} from '@angular/core';
import { NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {LayoutService} from '../../../@core/utils';
import {Subject} from 'rxjs';
import {NbAuthService} from "@nebular/auth";

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  userMenu = [{title: 'Perfil'}, {title: 'Salir', link: 'auth/logout'}];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private authService: NbAuthService
  ) {
  }

  ngOnInit() {

    this.user = {name: 'Nick'};
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
