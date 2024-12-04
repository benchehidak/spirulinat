import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req)  {
    const body = await req.json();
    const product = await prisma.product.findUnique({
        where: {
            id: body.id
        }
    });
    if (product) {
        product.rating.push(body.rating);
        const updatedProduct = await prisma.product.update({
            where: {
                id: body.id
            },
            data: {
                rating: product.rating
            }
        });
        return NextResponse.json({ success: true, product: updatedProduct });  
    }
    return NextResponse.json({ success: false, message: 'Product not found' });
}