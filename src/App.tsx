import { Route, Routes } from "react-router-dom";
import FormScreen from "./screens/formScreen";
import TableScreen from "./screens/tableScreen";
import { NotFoundScreen } from "./screens/notFoundScreen";

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<FormScreen />} />
                <Route path='/destinos' element={<TableScreen />} />
                <Route path='*' element={<NotFoundScreen />} />
            </Routes>
        </div>
    );
}

export default App;