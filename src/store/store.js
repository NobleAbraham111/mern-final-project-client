import { configureStore } from "@reduxjs/toolkit"; 
import authReduser from './auth-slice';




const store = configureStore({
    reducer: {
        auth: authReduser,
        
    },
});
export default store;