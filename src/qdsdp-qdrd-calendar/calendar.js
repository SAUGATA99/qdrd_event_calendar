import Calendar from "tui-calendar";

function addDays(date, days) {
    var newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
}

function testDetailPopup(){
    alert('here we go');
}

const qdrd_calendar = {
	calendarInstance: "",

    newCalender(calender_element) {
	    this.calendarInstance = new Calendar(calender_element, {
			defaultView: "month",
			taskView: true,           
			useDetailPopup: true,
			useCreationPopup: true,
            template: {
                monthDayname: function(dayname) {
                    return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
                },
                popupSave: function() {
                    return 'Save';
                },
                popupUpdate: function() {
                    return 'Update';
                },
                popupDetailDate: function(isAllDay, start, end) {
                    var isSameDate = moment(start).isSame(end);
                    var endFormat = (isSameDate ? '' : 'YYYY.MM.DD ') + 'hh:mm a';
        
                    if (isAllDay) {
                        return moment(start).format('YYYY.MM.DD') + (isSameDate ? '' : ' - ' + moment(end).format('YYYY.MM.DD'));
                    }
        
                    return (moment(start).format('YYYY.MM.DD hh:mm a') + ' - ' + moment(end).format(endFormat));
                },
                popupDetailLocation: function(schedule) {
                    return 'Location : ' + schedule.location;
                },
                popupDetailUser: function(schedule) {
                    return 'User : ' + (schedule.attendees || []).join(', ');
                },
                popupDetailState: function(schedule) {
                    return 'State : ' + schedule.state || 'Busy';
                },
                popupDetailRepeat: function(schedule) {
                    return 'Repeat : ' + schedule.recurrenceRule;
                },
                popupDetailBody: function(schedule) {
                    return 'Body : ' + schedule.body;
                }
            }
        })
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