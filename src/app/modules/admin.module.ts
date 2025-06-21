import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminView } from "./admin-views/admin-view/admin-view";
import { AdminRoutingModule } from "./admin-routing.module";


@NgModule({
    declarations: [AdminView],
    imports: [CommonModule, AdminRoutingModule],
    exports: [AdminView],
    providers: []
})
export class AdminModule {}