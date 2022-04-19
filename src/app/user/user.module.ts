import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./user.routes";
import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "./authentication.service";

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        FormsModule
    ],
    providers: [
        
    ]
})
export class UserModule { }