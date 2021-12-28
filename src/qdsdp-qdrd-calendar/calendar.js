import Calendar from "tui-calendar";

const qdrd_calendar = {
	calendarInstance: "",

	get calendar() {
		return calendarInstance;
	},

	newCalender: (calender_element) => {
		this.calendarInstance = new Calendar(calender_element, {
			defaultView: "month",
			taskView: true,
			template: {
				popupIsAllDay: function () {
					return "All Day";
				},
				popupStateFree: function () {
					return "Free";
				},
				popupStateBusy: function () {
					return "Busy";
				},
				titlePlaceholder: function () {
					return "Subject";
				},
				locationPlaceholder: function () {
					return "Location";
				},
				startDatePlaceholder: function () {
					return "Start date";
				},
				endDatePlaceholder: function () {
					return "End date";
				},
				popupSave: function () {
					return "Save";
				},
				popupUpdate: function () {
					return "Update";
				},
				popupDetailDate: function (isAllDay, start, end) {
					var isSameDate = moment(start).isSame(end);
					var endFormat = (isSameDate ? "" : "YYYY.MM.DD ") + "hh:mm a";

					if (isAllDay) {
						return (
							moment(start).format("YYYY.MM.DD") +
							(isSameDate ? "" : " - " + moment(end).format("YYYY.MM.DD"))
						);
					}

					return (
						moment(start).format("YYYY.MM.DD hh:mm a") +
						" - " +
						moment(end).format(endFormat)
					);
				},
				popupDetailLocation: function (schedule) {
					return "Location : " + schedule.location;
				},
				popupDetailUser: function (schedule) {
					return "User : " + (schedule.attendees || []).join(", ");
				},
				popupDetailState: function (schedule) {
					return "State : " + schedule.state || "Busy";
				},
				popupDetailRepeat: function (schedule) {
					return "Repeat : " + schedule.recurrenceRule;
				},
				popupDetailBody: function (schedule) {
					return "Body : " + schedule.body;
				},
				popupEdit: function () {
					return "Edit";
				},
				popupDelete: function () {
					return "Delete";
				},
			},
			useDetailPopup: true,
			useCreationPopup: true,
		});
	},
};
export default qdrd_calendar;
