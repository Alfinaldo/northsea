import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./dist/global.css";
import { store, persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { fetchDataRemelio } from "./app/features/remilioSlice";
import { fetchDataKillabears } from "./app/features/killabearsSlice";
import { Provider } from "react-redux";
import { fetchDataGoblin } from "./app/features/goblinSlice.js";
import { fetchDataPararel } from "./app/features/pararelSlice";
import { fetchDataPlooshies } from "./app/features/plooshiesSlice";
import { fetchDataLilpudgys } from "./app/features/lilpudgysSlice.js";
import { fetchDataSappySeals } from "./app/features/sappysealsSlice.js";
import { fetchDataDinosty } from "./app/features/dinostySlice.js";
import { fetchDataShrapnel } from "./app/features/shrapnelSlice.js";
import { fetchDataWassies } from "./app/features/wassiesSlice.js";
import { fetchDataPudgyPenguins } from "./app/features/pudgypenguinsSlice.js";
import { fetchDataRocks } from "./app/features/rocksSlice.js";
import { fetchCryptoNews } from "./app/features/cryptoNewsSlice.js";
import { fetchNftsNews } from "./app/features/nftsNewsSlice.js";

// import { fetchDataNfts } from './app/features/DatasNftsSlice.js'
import DarkModeContextProvider from "./context/ContextProvider";
// import { createPayment } from "./app/features/paymentSlice.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

store.dispatch(fetchDataRemelio());
store.dispatch(fetchDataKillabears());
store.dispatch(fetchDataGoblin());
store.dispatch(fetchDataPararel());
store.dispatch(fetchDataPlooshies());
store.dispatch(fetchDataLilpudgys());
store.dispatch(fetchDataSappySeals());
store.dispatch(fetchDataDinosty());
store.dispatch(fetchDataShrapnel());
store.dispatch(fetchDataWassies());
store.dispatch(fetchDataPudgyPenguins());
store.dispatch(fetchDataRocks());
// store.dispatch(fetchCryptoNews());
// store.dispatch(fetchNftsNews());
// store.dispatch(createPayment());

// store.dispatch(fetchDataNfts())

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <DarkModeContextProvider>
          <Router>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </Router>
        </DarkModeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
