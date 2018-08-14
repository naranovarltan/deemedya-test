import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormStepOneComponent } from "./form/form-step-one/form-step-one.component";
import { FormStepTwoComponent } from "./form/form-step-two/form-step-two.component";

const routes: Routes = [
    { path: '', redirectTo: 'form/steps/one', pathMatch: 'full' },
    { path: 'form/steps/one', component: FormStepOneComponent },
    { path: 'form/steps/two', component: FormStepTwoComponent }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}