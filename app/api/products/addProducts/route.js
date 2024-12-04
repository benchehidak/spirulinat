import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
  const products = await req.json();
  try {
    const createdProducts = await prisma.product.createMany({
      data: products,
    });
    console.log('products', products);
    return NextResponse.json({ success: true, createdProducts}, { status: 200 });
  } catch (error) {
    console.log('Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}