import express from "express";
import { Order } from "../models/order.js";

const router = express.Router();

/* TEST ROUTES:
"curl -X GET 'http:localhost:5001/')"
"curl -X POST 'http:localhost:5001/')"
"curl -X PATCH 'http:localhost:5001/')"
"curl -X DELETE 'http:localhost:5001/2')"
*/

router.get("/", (req, res) => {
    Order.find()
        .then((orders) => res.json(orders))
        .catch((err) => res.status(404).json(err));

    // get our Orders
});
router.post("/", (req, res) => {
    const newOrder = new Order({
        items: req.body.items,
        name: req.body.name,
        address: req.body.address,
    });

    newOrder.save()
        .then((order) => res.json("Your order has been processed."))
        .catch((err) => res.status(422).json(err));
});
router.patch("/", (req, res) => {
    res.json('PATCH Success');
});
router.delete("/:orderId", (req, res) => {
    const id = req.params.orderId;
    Order.findOneAndDelete(id)
        // we want to be 100% certain that the id will be deleted from the db.
        // therefore, we pass order through the cb and explicitly define the id
        // with {id: order._id}
        .then((order) => res.json({ id: order._id}))
        .catch((err) => res.status(404).json(err));
});


export const orders = router;
