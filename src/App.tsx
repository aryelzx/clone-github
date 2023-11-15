import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Aside } from "./components/aside";
import { Redirect } from "./pages/redirect";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="users/" element={<Redirect />} />
        <Route path={`users/:username`} element={<Aside />} />
      </Routes>
    </Router>
  )
}

export default App
