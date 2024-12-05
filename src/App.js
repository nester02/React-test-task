import './App.css'
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/pages/Users/Users";
import EditUser from "./components/pages/EditUser/EditUser";
import Header from "./components/Header/Header";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Header />
              <Routes>
                  <Route path="/" element={<Users />} />
                  <Route path="/edit-user/:id" element={<EditUser />} />
              </Routes>
          </Router>
      </Provider>
  )
}

export default App
