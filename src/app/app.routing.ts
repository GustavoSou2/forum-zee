import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateAccountComponent} from './views/create-account/create-account.component';
import {PanelComponent} from "./views/panel/panel.component";
import {LoginComponent} from "./views/login/login.component";
import {PostComponent} from "./views/post/post.component";


const APP_ROUTES: Routes = [
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  {
    path: 'panel',
    component: PanelComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'post',
    component: PostComponent
  }

  /* {
      path: 'home',
      component: MainScreenComponent
  },
  {
      path: 'form',
      component: FormAddComponent
  }
*/
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
