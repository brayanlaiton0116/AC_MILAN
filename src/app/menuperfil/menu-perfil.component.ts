import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.css'],
})
export class MenuPerfilComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  menu: boolean = false;

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('rememberedData');
    this.router.navigate(['/login']);
  }
}
