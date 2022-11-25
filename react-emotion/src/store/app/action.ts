import { createAction } from "@reduxjs/toolkit"
import { nomalizeAlertOption, WeakAlertOption } from "./alert"

export const onScreen = createAction<{ event: MediaQueryListEvent; screen: "2xl" | "xl" | "lg" | "md" | "sm" | "xs" }>(
	"on_screen",
)
export const onScreenUpdated = createAction<"2xl" | "xl" | "lg" | "md" | "sm" | "xs">("on_screen_updated")

export const alert = createAction<WeakAlertOption>("alert")
export const closeAlert = createAction("closeAlert")
export const newAlert = createAction("newAlert", (option: WeakAlertOption) => {
	return { payload: nomalizeAlertOption(option) }
})

export default {
	alert,
	closeAlert,
}
