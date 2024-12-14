import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminRemediesComponent } from './admin-remedies/admin-remedies.component';
import { AdminHealthTipsComponent } from './admin-health-tips/admin-health-tips.component';
import { AdminUserDetailsComponent } from './admin-user-details/admin-user-details.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminRemedyFormComponent } from './admin-remedy-form/admin-remedy-form.component';
import { AdminHealthTipFormComponent } from './admin-health-tip-form/admin-health-tip-form.component';

// Updated routes configuration
const routes: Routes = [
  { path: '', redirectTo: '/admin-panel', pathMatch: 'full' },
  { path: 'admin-panel', component: AdminPanelComponent },

  // Admin Product Routes
  { path: 'admin-product', component: AdminProductComponent },
  { path: 'admin-product-form', component: AdminProductFormComponent },
 
// Admin Health Tips Routes
{ path: 'admin-health-tips', component: AdminHealthTipsComponent },
{ path: 'admin-health-tip-form', component: AdminHealthTipFormComponent }, // Singular form path


  // Admin Remedies Routes
  { path: 'admin-remedies', component: AdminRemediesComponent },
  { path: 'admin-remedies-form', component:AdminRemedyFormComponent},  


  // Other admin routes
  { path: 'admin-user-details', component: AdminUserDetailsComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
