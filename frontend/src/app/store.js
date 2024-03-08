import { configureStore } from "@reduxjs/toolkit";
import remilioReducer from './features/remilioSlice';
import killabearsReducer from './features/killabearsSlice'
import goblinReducer from './features/goblinSlice'
import pararelReducer from './features/pararelSlice'
import plooshiesReducer from './features/plooshiesSlice'
import lilpudgyReducer from './features/lilpudgysSlice'
import sappyReducer from './features/sappysealsSlice'
import dinostyReducer from './features/dinostySlice'
import shrapnelReducer from './features/shrapnelSlice'
import wassiesReducer from './features/wassiesSlice'
import pudgypenguinsReducer from './features/pudgypenguinsSlice'
import rocksReducer from './features/rocksSlice'
import datasReducer from './features/DatasNftsSlice'
import paymentReducer from './features/paymentSlice'
import cryptoNewsReducer from './features/cryptoNewsSlice'
import nftsNewsReducer from './features/nftsNewsSlice'

import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer } from "redux-persist";

const persistCartConfig = {
    key: 'cart',
    storage
}

const persistedCart = persistReducer(persistCartConfig, datasReducer)


export const store = configureStore({
    reducer : {
        datas_remelio : remilioReducer,
        datas_killabears : killabearsReducer,
        datas_goblin : goblinReducer,
        datas_pararel : pararelReducer,
        datas_plooshies : plooshiesReducer,
        datas_lilpudgy : lilpudgyReducer,
        datas_sappy : sappyReducer,
        datas_dinosty : dinostyReducer,
        datas_shrapnel : shrapnelReducer, 
        datas_wassies : wassiesReducer,
        datas_pudgypenguins : pudgypenguinsReducer,
        datas_rocks : rocksReducer,
        datas_CyptoNews : cryptoNewsReducer,
        datas_nftsNews : nftsNewsReducer,
        datas_Nft : persistedCart,
        payment : paymentReducer,
    }
})

export const persistor = persistStore(store)



