import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTeam from "./Component/CreateTeam.jsx";
import AllTeams from "./Component/AllTeams.jsx";
import Navbar from "./Component/Navbar.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<CreateTeam />} />
                <Route path="/teams" element={<AllTeams />} />
            </Routes>
        </Router>
    );
}

export default App;
