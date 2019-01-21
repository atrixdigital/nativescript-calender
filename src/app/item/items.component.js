"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var item_service_2 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService, _calendarService) {
        this.itemService = itemService;
        this._calendarService = _calendarService;
        this.viewMode = 'Month';
        this.transitionMode = 'Rotate';
    }
    ItemsComponent.prototype.changeViewMode = function (mode) {
        this.viewMode = mode;
    };
    Object.defineProperty(ItemsComponent.prototype, "eventSource", {
        get: function () {
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemsComponent.prototype, "myItems", {
        get: function () {
            return this._listItems;
        },
        set: function (value) {
            this._listItems = value;
        },
        enumerable: true,
        configurable: true
    });
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
        this._events = this._calendarService.getCalendarEvents();
    };
    ItemsComponent.prototype.onDateSelected = function (args) {
        var calendar = args.object;
        var date = args.date;
        var events = calendar.getEventsForDate(date);
        this.myItems = events;
    };
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
            providers: [item_service_2.CalendarEventsService]
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, item_service_2.CalendarEventsService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3QywrQ0FBcUQ7QUFVckQ7SUFHSSx3QkFBb0IsV0FBd0IsRUFBUyxnQkFBc0M7UUFBdkUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXNCO1FBSTNGLGFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkIsbUJBQWMsR0FBRSxRQUFRLENBQUM7SUFMc0UsQ0FBQztJQVdoRyx1Q0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSx1Q0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBWSxLQUFLO1lBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCw0SUFBNEk7SUFDNUksaUhBQWlIO0lBRWpILGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUU3RCxDQUFDO0lBQ0QsdUNBQWMsR0FBZCxVQUFlLElBQWdDO1FBQzNDLElBQU0sUUFBUSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBTSxNQUFNLEdBQXlCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBM0NRLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9DQUFxQixDQUFDO1NBRXJDLENBQUM7eUNBSW1DLDBCQUFXLEVBQTBCLG9DQUFxQjtPQUhsRixjQUFjLENBNEMxQjtJQUFELHFCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudHNTZXJ2aWNlfSBmcm9tICcuL2l0ZW0uc2VydmljZSdcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIENhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhLCBSYWRDYWxlbmRhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBwcm92aWRlcnM6IFtDYWxlbmRhckV2ZW50c1NlcnZpY2VdXG5cbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSxwcml2YXRlIF9jYWxlbmRhclNlcnZpY2U6Q2FsZW5kYXJFdmVudHNTZXJ2aWNlKSB7IH1cblxuXG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICB2aWV3TW9kZSA9ICdNb250aCc7XG4gICAgdHJhbnNpdGlvbk1vZGUgPSdSb3RhdGUnO1xuXG5cbiAgICBwcml2YXRlIF9ldmVudHM6IEFycmF5PENhbGVuZGFyRXZlbnQ+O1xuICAgIHByaXZhdGUgX2xpc3RJdGVtczogQXJyYXk8Q2FsZW5kYXJFdmVudD47XG5cbiAgICBjaGFuZ2VWaWV3TW9kZShtb2RlKXtcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IG1vZGU7XG4gICAgfVxuXG4gICAgZ2V0IGV2ZW50U291cmNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnRzO1xuICAgIH1cblxuICAgIGdldCBteUl0ZW1zKCk6IEFycmF5PENhbGVuZGFyRXZlbnQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RJdGVtcztcbiAgICB9XG5cbiAgICBzZXQgbXlJdGVtcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9saXN0SXRlbXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2NhbGVuZGFyU2VydmljZS5nZXRDYWxlbmRhckV2ZW50cygpO1xuXG4gICAgfVxuICAgIG9uRGF0ZVNlbGVjdGVkKGFyZ3M6IENhbGVuZGFyU2VsZWN0aW9uRXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhbGVuZGFyOiBSYWRDYWxlbmRhciA9IGFyZ3Mub2JqZWN0O1xuICAgICAgICBjb25zdCBkYXRlOiBEYXRlID0gYXJncy5kYXRlO1xuICAgICAgICBjb25zdCBldmVudHM6IEFycmF5PENhbGVuZGFyRXZlbnQ+ID0gY2FsZW5kYXIuZ2V0RXZlbnRzRm9yRGF0ZShkYXRlKTtcbiAgICAgICAgdGhpcy5teUl0ZW1zID0gZXZlbnRzO1xuICAgIH1cbn1cblxuXG4iXX0=