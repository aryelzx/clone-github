import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./components/home";
import { Redirect } from "./shared/utils/redirect";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="users/" element={<Redirect />} />
        <Route path={`users/:username`} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
