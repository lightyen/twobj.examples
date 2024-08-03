import { configureStore, Tuple } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootSaga from "~/store/saga"
import { app, AppStore } from "./app/reducer"
import { data, DataStore } from "./data/reducer"
import { intl, IntlStore } from "./i18n/reducer"

// https://vitejs.dev/guide/env-and-mode.html#env-files

interface RootStoreType {
	app: AppStore
	data: DataStore
	intl: IntlStore
}

export type RootStore = Readonly<RootStoreType>

export function makeStore() {
	const sagaMiddleware = createSagaMiddleware()
	const store = configureStore({
		reducer: {
			app,
			data,
			intl,
		},
		middleware: () => new Tuple(sagaMiddleware),
		devTools: import.meta.env.MODE === "development" ? { name: import.meta.env.VITE_APP_NAME } : false,
	})
	sagaMiddleware.run(rootSaga)
	return store
}

export const store = makeStore()
