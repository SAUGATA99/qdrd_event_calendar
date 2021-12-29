import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
const { COMPONENT_DOM_READY, COMPONENT_RENDERED } = actionTypes;
import qdrd_calendar from "./calendar";
import qdrdAction from "./action";

const view = (state, { updateState }) => {
	return (
			<div id="calendar"></div>
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