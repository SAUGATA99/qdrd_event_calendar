import {actionTypes} from '@servicenow/ui-core';
import qdrd_calendar from "./calendar";

var qdrdCalendar = qdrd_calendar;

export default {
	actionHandlers: {
		[actionTypes.COMPONENT_DOM_READY]: (coeffects) => {
            console.log(coeffects.state.qdrdCalendar1);
			var calender_element = coeffects.host.shadowRoot.childNodes[1];
			qdrdCalendar.newCalender(calender_element);
		},
		[actionTypes.COMPONENT_RENDERED]: (coeffects) => {
            console.log(coeffects.state.qdrdCalendar1);
			qdrdCalendar.calendar.createSchedules([
                    {
                        id: "1",
                        calendarId: "1",
                        title: "my schedule",
                        category: "time",
                        dueDateClass: "",
                        start: "2021-12-18T22:30:00+09:00",
                        end: "2021-12-19T02:30:00+09:00",
                    },
                    {
                        id: "2",
                        calendarId: "1",
                        title: "second schedule",
                        category: "time",
                        dueDateClass: "",
                        start: "2021-12-18T17:30:00+09:00",
                        end: "2021-12-19T17:31:00+09:00",
                        isReadOnly: true, // schedule is read-only
                    },
                ]);
                qdrdCalendar.calendar.on({
                    clickMore: function(e) {
                      console.log("clickMore", e);
                    },
                    clickSchedule: function(e) {
                      console.log("clickSchedule", e);
                    }
                });
		},
    }
}