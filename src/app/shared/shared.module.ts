import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';

import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { MaterialModule } from "../material.module";

@NgModule({
    declarations:[
        ProgressBarComponent
    ],
    imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        CommonModule 
    ],
    exports: [
        ProgressBarComponent
    ]
})
export class SharedModule {}