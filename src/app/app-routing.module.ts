import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CampaignComponent } from './pages/campaign/campaign.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GreenHydrogenComponent } from './pages/green-hydrogen/green-hydrogen.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'campaign', component: CampaignComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'green-hydrogen', component: GreenHydrogenComponent },
  { path: 'impressum', component: ImpressumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
