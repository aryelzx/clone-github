import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/home";
import GlobalStyle from "./shared/utils/globalcss";
import { Redirect } from "./shared/utils/redirect";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Redirect />} />
        <Route path="users/:username" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
