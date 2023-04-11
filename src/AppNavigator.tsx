import { HashRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import { ScrollToTop } from "./components"
import { About, Projects } from "./pages"

const AppNavigator = () => {
  return (
    <HashRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </HashRouter>
  )
}

export default AppNavigator
