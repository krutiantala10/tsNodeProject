import express from 'express';
import { tokenAdmin } from '../../helper/tokenAdmin';
import { showAllReview, showReview } from '../../controller/admin/review.controller';
const reviewRoute = express.Router();

reviewRoute.get('/showall-review', tokenAdmin, showAllReview);
reviewRoute.get('/show-cart', tokenAdmin, showReview);

export default reviewRoute