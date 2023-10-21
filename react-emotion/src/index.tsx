import { ThemeProvider } from "@emotion/react"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { LocaleProvider, StoreProvider } from "~/store/Provider"
import { App } from "./App"
import { GlobalStyles } from "./GlobalStyles"

const rootEl = document.getElementById("root")

if (rootEl) {
	const root = createRoot(rootEl)
	root.render(
		<StrictMode>
			<GlobalStyles />
			<StoreProvider>
				<LocaleProvider>
					<ThemeProvider theme={{ colors: { primary: "#abcaca9f" } }}>
						<App />
					</ThemeProvider>
				</LocaleProvider>
			</StoreProvider>
		</StrictMode>,
	)
}
