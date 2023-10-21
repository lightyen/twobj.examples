import { eventChannel } from "redux-saga"

export const documentVisibilityChanged = eventChannel<boolean>(emit => {
	function listener() {
		switch (document.visibilityState) {
			case "hidden":
				emit(false)
				break
			case "visible":
				emit(true)
				break
			default:
				console.log("what the heck", document.visibilityState)
		}
	}
	window.addEventListener("visibilitychange", listener)
	return () => {
		window.removeEventListener("visibilitychange", listener)
	}
})
