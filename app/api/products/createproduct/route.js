import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req)  {
    const body = await req.json();
    const product = await prisma.product.create({
        data: {
            name: body.name,
            description: body.description,
            price: body.price,
            brand: body.brand || null,
            weight: body.weight || null,
            volume: body.volume || null,
            color: body.color || null,
            tags: body.tags || null,
            images: body.images || null,
            qte: body.qte || null,
            keywords: body.keywords || null,
            metaTitre: body.metaTitre || null,
            metaDescription: body.metaDescription || null,
            slug: body.slug || null,
            canonical: body.canonical || null,
            robots: body.robots || null,
            categories: body.categories || null,
            subcategories: body.subcategories || null,
        },
    });
    return NextResponse.json({ success: true, product });
}