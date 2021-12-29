import {actionTypes} from '@servicenow/ui-core';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default {
	actionHandlers: {
		[actionTypes.COMPONENT_DOM_READY]: (coeffects) => {
            console.log(coeffects.state.qdrdCalendar1);
			var calender_element = coeffects.host.shadowRoot.childNodes[0];
			var calendarObj = new Calendar(calender_element, {
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
            calendarObj.render();
		},
		[actionTypes.COMPONENT_RENDERED]: (coeffects) => {
           
		},
    }
}