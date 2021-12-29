import {
    Calendar
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

function addDays(date, days) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

const qdrd_calendar = {
    calendarInstance: "",

    newCalender(calender_element) {
        console.log('initializing calendar');
        this.calendarInstance = new Calendar(calender_element, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            initialView: 'dayGridMonth',
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,listWeek'
            },
            events: [{ // this object will be "parsed" into an Event Object
                    title: 'The Title', // a property!
                    start: '2021-12-01', // a property!
                    end: '2021-12-02' // a property! ** see important note below about 'end' **
                },
                { // this object will be "parsed" into an Event Object
                    title: 'The Title', // a property!
                    start: '2021-12-28', // a property!
                    end: '2021-12-29' // a property! ** see important note below about 'end' **
                }
            ],
            eventClick: function(info) {
                alert('Event: ' + info.event.title);
                alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
                alert('View: ' + info.view.type);

                // change the border color just for fun
                info.el.style.borderColor = 'red';
            }
        });
    },

    get calendar() {
        return this.calendarInstance;
    },

    set calendar(value) {
        this.calendarInstance = value;
    },

    recurringDates(startDate, endDate, interval) {
        var date = startDate;
        var dates = [];

        while ((date = addDays(date, interval)) < endDate) {
            dates.push(date);
        }

        return dates;
    },
};

export default qdrd_calendar;