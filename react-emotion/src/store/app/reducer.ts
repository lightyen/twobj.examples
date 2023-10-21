import { createReducer } from "@reduxjs/toolkit"
import * as ac from "./action"
import { AlertType } from "./alert"
import { getScreen, ScreenType } from "./screen"

const screen = getScreen()

function getMode(screen: ScreenType) {
	if (screen === "xs" || screen === "sm") return "mobile"
	if (screen === "md") return "tablet"
	return "desktop"
}

export interface AppStore {
	screen: ScreenType
	mode: "mobile" | "tablet" | "desktop"
	alert: {
		visible: boolean
		type: AlertType
		id?: string
		text?: string
	}
}

const init: AppStore = {
	screen,
	mode: getMode(screen),
	alert: {
		visible: false,
		type: "info",
	},
}

export const app = createReducer(init, builder =>
	builder
		.addCase(ac.onScreenUpdated, (state, { payload: screen }) => {
			state.screen = screen
			state.mode = getMode(screen)
		})
		.addCase(ac.closeAlert, state => {
			state.alert.visible = false
		})
		.addCase(ac.newAlert, (state, { payload }) => {
			state.alert.visible = true
			state.alert.type = payload.type
			state.alert.text = payload.text
			state.alert.id = payload.id
		}),
)
