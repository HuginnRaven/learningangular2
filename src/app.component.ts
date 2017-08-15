import { Component } from "@angular/core";

@Component({
    selector: "event-app",
    template: "<a routerLink='/events'>Lista</a><router-outlet></router-outlet>"
})

export class EventAppComponent {

}