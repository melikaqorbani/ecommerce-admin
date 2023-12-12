import { Product } from "@/lib/models/product";
import clientPromise from "@/lib/mongodb";
import { mongooseConnect } from "@/lib/mongoose";
import mongoose from "mongoose";

export default async function handler(req, res){
    const {method} = req;
    await mongooseConnect;
    if (method ==='POST'){
        const {title,description,price} = req.body;
        const productDoc = await Product.create({
            title,description,price,
        })
        res.json(productDoc);
    }
}