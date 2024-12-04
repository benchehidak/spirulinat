import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req) {
    const body = await req.json();
    const product = await prisma.product.findUnique({
        where: {
            id: body.id
        }
    });
    if (!product) {
        return NextResponse.json({ success: false, error: 'Product not found' });
    }
    
    const { id, ...dataWithoutId } = body;

    try {
        const updatedProduct = await prisma.product.update({
            where: {
                id: id
            },
            data: dataWithoutId
        });
        return NextResponse.json({ success: true, updatedProduct }, { status: 200 });
    } catch (error) {
        console.log('Error:', error); // Debug line
        return NextResponse.json({ success: false, error: error.message });
    }
}