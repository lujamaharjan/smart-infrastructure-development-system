import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeshowComponent } from "./components/homeshow/homeshow.component"
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VotemeComponent } from './components/user/voteme/voteme.component';
import { NoticeComponent } from './components/notice/notice.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [
  { path: "", component: HomeshowComponent },
  { path: "voteme", component: VotemeComponent },
  { path: "login", component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: "notice", component: NoticeComponent },
  { path: "result", component: ResultComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
