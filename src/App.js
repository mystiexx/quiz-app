import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import FinalScreen from "./pages/FinalScreen";
import Questions from "./pages/Questions";
import Settings from "./pages/Settings";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Settings/>} />
                <Route path="/questions"  exact element={<Questions/>} />
                <Route path="/score"  exact element={<FinalScreen/> } />
            </Routes>
        </Router>
    );
}

export default App;
