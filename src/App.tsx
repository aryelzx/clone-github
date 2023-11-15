import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Aside } from "./components/aside";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="users">
          <Route path={`:username`} element={<Aside />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
