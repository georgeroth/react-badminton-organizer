import { Routes, Route } from "react-router-dom";
import './App.css';
import Rounds from './Rounds'
import Setup from './Setup'
import Header from './Header'

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/rounds"
          element={<Rounds />}
        />
          <Route
          path="/setup"
          element={<Setup />}
        />
          <Route
          path="/"
          element={<Setup />}
        />
      </Routes>
    </div>
  );
}

export default App;
