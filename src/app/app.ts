import { Component, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrontTutorials');
  showHeaderFooter = signal(true);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Ocultar header y footer en páginas de autenticación
        const authRoutes = ['/', '/signup'];
        this.showHeaderFooter.set(!authRoutes.includes(event.url));
      });
  }
}
