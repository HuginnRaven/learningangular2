import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { EventAppComponent } from "./app.component";
import { EventListComponent } from "./events/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [EventAppComponent, EventListComponent, EventThumbnailComponent, EventDetailsComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventAppComponent]
})

export class AppModule { }