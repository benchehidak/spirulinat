import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req)  {
    let products = null;
    try {
        products = await prisma.product.findMany();
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error });
    }
    if (!products) {
        return NextResponse.json({ success: false, error: 'Products not found' });
    }
    return NextResponse.json({ success: true, products });
}