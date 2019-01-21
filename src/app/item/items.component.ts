import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { CalendarEventsService} from './item.service'
import { CalendarEvent, CalendarSelectionEventData, RadCalendar } from "nativescript-ui-calendar";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    providers: [CalendarEventsService]

})
export class ItemsComponent implements OnInit {


    constructor(private itemService: ItemService,private _calendarService:CalendarEventsService) { }


    items: Item[];
    viewMode = 'Month';
    transitionMode ='Rotate';


    private _events: Array<CalendarEvent>;
    private _listItems: Array<CalendarEvent>;

    changeViewMode(mode){
        this.viewMode = mode;
    }

    get eventSource() {
        return this._events;
    }

    get myItems(): Array<CalendarEvent> {
        return this._listItems;
    }

    set myItems(value) {
        this._listItems = value;
    }

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.

    ngOnInit(): void {
        this.items = this.itemService.getItems();
        this._events = this._calendarService.getCalendarEvents();

    }
    onDateSelected(args: CalendarSelectionEventData) {
        const calendar: RadCalendar = args.object;
        const date: Date = args.date;
        const events: Array<CalendarEvent> = calendar.getEventsForDate(date);
        this.myItems = events;
    }
}


