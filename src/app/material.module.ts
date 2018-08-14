import { NgModule } from "@angular/core";
import {    MatButtonModule, 
            MatCheckboxModule,
            MatIconModule, 
            MatFormFieldModule, 
            MatInputModule,
            MatStepperModule, 
            MatRadioModule,
            MatListModule} from '@angular/material'

@NgModule({
    exports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatStepperModule,
        MatRadioModule,
        MatListModule
    ],
    imports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatIconModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatStepperModule,
        MatRadioModule,
        MatListModule
    ]
})
export class MaterialModule {}