import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = import.meta.env.VITE_REACT_APP_API_KEY_OPENSEA;
 
export const fetchDataNfts = createAsyncThunk('datas/fetchDataNfts', async (collectionId) => {
    try {
        const response = await axios.get(`https://api.opensea.io/api/v2/collection/${collectionId}/nfts`, {
            headers : {
                'Accept' : 'application/json',
                'X-API-KEY' : apiKey
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.response?.data || error.message);
        throw error;
    }
})



const datasSliceNfts = createSlice({
    name : 'datas',
    initialState : {
        data : [],
        cart : [],
        checkout: [],
        isButtonDisabled : false,
        total : 0,
        showLoader : true,
    },
    reducers : {
        clearData: (state) => {
            return {
              ...state,
              data: [],
            };
          },
          addToCart : (state, action) => {
           const newItem = action.payload
           const existingItemIndex = state.cart.findIndex((item) => item.identifier === newItem.identifier)
         
          
           if(existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity += 1
                state.isButtonDisabled = true

           } else {
                state.cart.push({...newItem, quantity : 1})
                state.isButtonDisabled = false
             
           }
                // state.total += parseFloat(newItem.price) || 0;
          },
          addNewObject: (state, action)=> {
          state.checkout = action.payload
          },
          UpdateTotal: (state) => {
            state.total = state.checkout.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price_idr;
              }, 0);
          },
          incerementQuantity: (state, action) => { 
            const { identifier } = action.payload

             // Temukan indeks item di dalam keranjang
            const itemIndex = state.cart.findIndex(item => item.identifier === identifier)
            const itemIndexData = state.data.findIndex(item => item.identifier === identifier)
            
            // Jika item ditemukan, buat objek status baru dengan kuantitas bertambah 1
            if (itemIndex !== -1) {
                const updatedQuantity = state.cart[itemIndex].quantity + 1;
                const updatedPrice = state.cart[itemIndex].price / state.cart[itemIndex].quantity * updatedQuantity;

                state.cart[itemIndex] = {
                    ...state.cart[itemIndex],
                    quantity: updatedQuantity,
                    price: updatedPrice
                };
               
            }
           
            if(itemIndexData !== -1) {
                const updatedQuantity = state.data[itemIndexData].quantity + 1;
                const updatedPrice = state.data[itemIndexData].price / state.data[itemIndexData].quantity * updatedQuantity;

                state.data[itemIndexData] = {
                    ...state.data[itemIndexData],
                    quantity: updatedQuantity,
                    price: updatedPrice
                };
            }

        },
        decrementQuantity: (state, action) => {
            const { identifier } = action.payload;

             //* Temukan indeks item di dalam keranjang
            const itemIndex = state.cart.findIndex(item => item.identifier === identifier);
        
             //* Jika item ditemukan dan kuantitasnya lebih besar dari 1, buat objek state baru dengan kuantitas dikurangi 1
            if (itemIndex !== -1 && state.cart[itemIndex].quantity > 1) {
                const updatedQuantity = state.cart[itemIndex].quantity - 1;
                const updatedPrice = state.cart[itemIndex].price / state.cart[itemIndex].quantity * updatedQuantity;

                state.cart[itemIndex] = {
                ...state.cart[itemIndex],
                quantity: updatedQuantity,
                price: updatedPrice
            };
              
            }
            //* Temukan indeks item di dalam state data
            const itemIndexData = state.data.findIndex(item => item.identifier === identifier);

            if(itemIndexData !== -1 && state.data[itemIndexData].quantity > 1) {
                const updatedQuantity = state.data[itemIndexData].quantity - 1;
                const updatedPrice = state.data[itemIndexData].price / state.data[itemIndexData].quantity * updatedQuantity;

                state.data[itemIndexData] = {
                    ...state.data[itemIndexData],
                    quantity: updatedQuantity,
                    price: updatedPrice
                };
            }

            return state;
        },
          deleteCartByIdentifier : (state, action) => {
            const newItem = action.payload
            state.cart = state.cart.filter((item) => item.identifier !== newItem)
            state.total = state.cart.reduce((total, item) => total + parseFloat(item.price || 0) * item.quantity, 0);
            state.isButtonDisabled = false
          },
          removeFromCheckoutByIdentifier : (state, action) => {
            const identifierToRemove = action.payload;
            state.checkout = state.checkout.filter(item => item.identifier !== identifierToRemove)
            state.total = state.checkout.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.price_idr;
              }, 0);
            
        },

          clearAllCartItem : (state) => {
            return {
                ...state,
                cart: [],
                checkout: [],
                total : 0,
                isButtonDisabled : false,
            }
          },
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchDataNfts.pending, (state) => {
            state.showLoader = true
        })
        .addCase(fetchDataNfts.fulfilled, (state, action) => {
            state.showLoader = false;
            let currrentIndex = 0;
            let currentPrice = 0.01;
            let step = 0.01;

            const addObject = action.payload.nfts.map((item) => {
            const selectedToken = tokenData[currrentIndex]
             currrentIndex = (currrentIndex + 1) % tokenData.length

             if(selectedToken) {
                item.chain = selectedToken
             }
            const selectedPrice = parseFloat(currentPrice.toFixed(2))
            currentPrice += step
            if(selectedPrice) {
                item.price = selectedPrice
                item.quantity = 1
            }
                item.desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima, est et suscipit magni dolores nisi sequi porro reiciendis quisquam qui impedit ducimus, facilis laboriosam sint velit accusamus? Asperiores, ipsa.'
                return item;
            })
            state.data = state.data.concat(addObject)
          })
        .addCase(fetchDataNfts.rejected, (state) => {
            state.showLoader = false
        })
    }
})

// let currentIndex = 0;
const tokenData = [
  { name: 'ripple', 'symbol': 'XRP', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=029' },
  { name: 'cardano', 'symbol': 'ADA', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=029' },
  { name: 'dogecoin', 'symbol': 'DOGE', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=029' },
  { name: 'tron', 'symbol': 'TRX', logo: 'https://cryptologos.cc/logos/tron-trx-logo.png?v=029' },
  { name: 'uniswap', 'symbol': 'UNI', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png?v=029' },
  { name: 'fantom', 'symbol': 'FTM', logo: 'https://cryptologos.cc/logos/fantom-ftm-logo.png?v=029' },
  { name: 'decentraland', 'symbol': 'MANA', logo: 'https://cryptologos.cc/logos/decentraland-mana-logo.png?v=029' },
];

//     const generateSequentialTokens = () => {
//         const selectedToken = tokenData[currentIndex];
//         currentIndex = (currentIndex + 1) % tokenData.length;
  
//     return selectedToken;
//   };

 
  

//   let currentPrice = 1.00;
//   const generateSequentialPrice = () => {
//     const step = 0.01; // Menentukan langkah perubahan harga
  
//     const generatedPrice = currentPrice.toFixed(2); // Membulatkan harga menjadi dua desimal
//     currentPrice += step; // Menambahkan langkah ke harga saat ini
  
//     return generatedPrice;
//   };
// export const selectCollectionById = (state, id) => {
//     return state.datas_Nft?.data.find((item) => item.identifier === id)
// }


export const { clearData } = datasSliceNfts.actions;

export const { addToCart, addNewObject, UpdateTotal, removeFromCheckoutByIdentifier, deleteCartByIdentifier, clearAllCartItem, setButtonDisable, incerementQuantity, decrementQuantity} = datasSliceNfts.actions;

export default datasSliceNfts.reducer;








