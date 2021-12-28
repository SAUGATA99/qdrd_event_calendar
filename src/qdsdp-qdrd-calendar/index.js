import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
const { COMPONENT_DOM_READY, COMPONENT_RENDERED } = actionTypes;
import qdrd_calendar from "./calendar";

const view = (state, { updateState }) => {
	return (
		<div>
			<div id="menu">
				<span id="menu-navi">
					<button
						type="button"
						class="btn btn-default btn-sm move-today"
						data-action="move-today"
					>
						Today
					</button>
					<button
						type="button"
						class="btn btn-default btn-sm move-day"
						data-action="move-prev"
					>
						<i
							class="calendar-icon ic-arrow-line-left"
							data-action="move-prev"
						></i>
					</button>
					<button
						type="button"
						class="btn btn-default btn-sm move-day"
						data-action="move-next"
					>
						<i
							class="calendar-icon ic-arrow-line-right"
							data-action="move-next"
						></i>
					</button>
				</span>
				<span id="renderRange" class="render-range"></span>
			</div>
			<div id="calendar"></div>
		</div>
	);
};

createCustomElement("qdsdp-qdrd-calendar", {
	renderer: { type: snabbdom },
	view,
	styles,
	actionHandlers: {
		[COMPONENT_DOM_READY]: (coeffects) => {
			var calender_element = coeffects.host.shadowRoot.childNodes[1];
			calendar.newCalender(calender_element);
		},
		[COMPONENT_RENDERED]: (coeffects) => {
			console.log("calendar: ", qdrd_calendar.calendar());
			var calendar = qdrd_calendar.calendar();
			calendar.createSchedules([
				{
					id: "1",
					calendarId: "1",
					title: "my schedule",
					category: "time",
					dueDateClass: "",
					start: "2018-01-18T22:30:00+09:00",
					end: "2018-01-19T02:30:00+09:00",
				},
				{
					id: "2",
					calendarId: "1",
					title: "second schedule",
					category: "time",
					dueDateClass: "",
					start: "2018-01-18T17:30:00+09:00",
					end: "2018-01-19T17:31:00+09:00",
					isReadOnly: true, // schedule is read-only
				},
			]);
		},
	},
});
