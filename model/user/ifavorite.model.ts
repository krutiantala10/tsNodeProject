// import mongoose from "mongoose";

// export interface Ifavorite {
//     user?: mongoose.Schema.Types.ObjectId,
//     cartItem?:mongoose.Schema.Types.ObjectId,
//     isDelete?:Boolean;
    
// }

const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})

const favouriteModel = mongoose.model('favourites', favouriteSchema);
export default favouriteModel