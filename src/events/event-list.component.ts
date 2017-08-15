import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
@Component({
    selector: "event-list",
    template: `
    <div>
        <h1>Eventos</h1>
        <hr/>
        <div class="row">
            <event-thumbnail *ngFor="let event of events" [event]="event" class="col-md-5"></event-thumbnail>
        </div>
        </div>`
})

export class EventListComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }
}