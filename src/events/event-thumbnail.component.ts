import { Component, Input } from "@angular/core";
import { ToastrService } from "../common/toastr.service";

@Component({
    selector: "event-thumbnail",
    templateUrl: "event-list.html"
})

export class EventThumbnailComponent {
    @Input() event: any;

    constructor(private toastr: ToastrService) {

    }

    showNotification(eventName) {
        this.toastr.success(eventName);
    }
}