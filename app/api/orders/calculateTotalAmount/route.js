import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { validationResult } from 'express-validator';

const prisma = new PrismaClient();

export async function POST(req)  {
    const body = await req.json();
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return NextResponse.json({ success: false, errors: errors.array() });
    }

    const { id } = body;

    //find the order
    const order = await prisma.order.findUnique({
        where: { id }
    });

    //console.log(order)

    const orderItems = order.products;

    //for each product get the quantity ordered
    const productQuantities = orderItems.map(item => item.quantity);

    console.log(productQuantities)

    //for each product get the price
    const productPrices = await Promise.all(orderItems.map(async item => {
        const product = await prisma.product.findUnique({
            where: { id: item.productId }
        });
        return product.price;
    }));

    console.log(productPrices)

    //multiply the quantity by the price
    const productTotals = productQuantities.map((quantity, index) => quantity * productPrices[index]);

    console.log(productTotals)

    //add all the products total
    const totalAmount = productTotals.reduce((acc, curr) => acc + curr, 0);

    //return the total
    return NextResponse.json({ success: true, totalAmount });
}