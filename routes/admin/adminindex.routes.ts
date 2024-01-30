import express from 'express';
import adminRoute from './admin.routes';
import productRoute from './product.routes';
import cartRoute from './cart.routes';
import orderRoute from './order.routes';
import reviewRoute from './review.routes';
const admin = express.Router();

admin.use('/', adminRoute);
admin.use('/product', productRoute)
admin.use('/cart', cartRoute);
admin.use('/order', orderRoute);
admin.use('/review', reviewRoute);

export default admin