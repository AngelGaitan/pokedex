import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainer.slice'
export default configureStore({
reducer: {
    // acá van los estados globales 
    trainer
}

})



