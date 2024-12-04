import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    const {imageslist} = body;
    try
    {
        await prisma.product.updateMany({
            data: {
                images: imageslist
            },
        }
        );
        return NextResponse.json({message: 'Images updated successfully'});

    }
    catch (e) {
        return NextResponse.error({message: 'Error updating images'});
    }


}