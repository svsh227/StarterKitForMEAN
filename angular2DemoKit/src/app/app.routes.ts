import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './components/testComponents/test.component';
// import { AppComponent } from './app.component'

const appRoutes: Routes = [
    { path: 'test', component: TestComponent },
    // { path: '', component: AppComponent }

];

export const routes = RouterModule.forRoot(appRoutes);