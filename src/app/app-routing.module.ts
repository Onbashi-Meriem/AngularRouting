import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', component: HomeComponent,},
  { path: 'about', component: AboutComponent,},
  { path: 'about/:value', component: AboutComponent,},
  { path: 'about/:value/:id', component: AboutComponent,},
  { path: 'contact', component: ContactComponent,},
  { path: 'users', component:UsersComponent},
  { path: 'user/:id', component: UserEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
