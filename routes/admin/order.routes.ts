import express from 'express';
import { tokenAdmin } from '../../helper/tokenAdmin';
import { getAllOrders, showSpecificOrder} from '../../controller/admin/order.controller';
const orderRoute = express.Router();

orderRoute.get('/showall-order', tokenAdmin, getAllOrders);
orderRoute.get('show-order', tokenAdmin, showSpecificOrder);

export default orderRoute;