import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import CollectionNfts from "./pages/CollectionNfts";
import DetailCollection from "./pages/DetailCollection";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/northsea/" element={<Home />} />
        <Route
          path="/northsea/collection/:collectionId"
          element={<CollectionNfts />}
        />
        <Route
          path="/northsea/collection/:collectionId/detail/:id"
          element={<DetailCollection />}
        />
        <Route path="/northsea/register" element={<Register />}></Route>
        <Route path="/northsea/login" element={<Login />}></Route>
      </Routes>
    </main>
  );
}

export default App;
