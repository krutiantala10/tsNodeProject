// import mongoose from "mongoose";
// import { IOrder } from "../model/iOrder.model";

// const orderSchema = new mongoose.Schema<IOrder>({
//     items: [
//         {
//             cartItem: {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: 'products',
//             },
//             quntity: {
//                 type: Number,
//                 default: 1
//             },
//             productImage: [{
//                 type: String
//             }],
//             title: {
//                 type: String,
//                 require: true
//             },
//             price: {
//                 type: Number,
//                 required: true
//             },
//         }],
//         totalPrice: {
//             type: Number,
//         },
//         isDelete: {type: Boolean,default: false}
//     });

//     const ordercollection = mongoose.model<IOrder>('order',orderSchema);
//     export default ordercollection;