import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/sections/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoaderInterceptor } from './interceptor/loader.interceptor';
import { ProfileComponent } from './components/sections/profile/profile.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ProjectComponent } from './components/project/project.component';
import { IconDemoComponent } from './components/icons/icon-demo.component';
import { IconGitHubComponent } from './components/icons/icon-git-hub.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    SpinnerComponent,
    ProfileComponent,
    HeroImageComponent,
    PortfolioComponent,
    ProgressBarComponent,
    FilterPipe,
    ProjectsComponent,
    ProjectComponent,
    IconDemoComponent,
    IconGitHubComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
