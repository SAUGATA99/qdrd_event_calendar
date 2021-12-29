import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
const { COMPONENT_DOM_READY, COMPONENT_RENDERED } = actionTypes;
import qdrd_calendar from "./calendar";
import qdrdAction from "./action";

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
	setInitialState() {
        return {
            qdrdCalendar1: 'Hello'
        };
    },
	...qdrdAction
});