import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GreenHydrogenComponent } from './pages/green-hydrogen/green-hydrogen.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'green-hydrogen', component: GreenHydrogenComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }, // Error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
