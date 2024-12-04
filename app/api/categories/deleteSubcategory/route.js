import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

const prisma = new PrismaClient();

export async function DELETE(req) {
    const body = await req.json();
    const existingSubcategory = await prisma.subcategory.findFirst({
        where: {
            nom: body.name,
            categoryId: body.categoryId
        },
    });
    if (!existingSubcategory) {
        return NextResponse.json({ success: false, error: "Subcategory doesn't exist" });
    }
    try {
        await prisma.subcategory.delete({
            where: {
                id_subcat: existingSubcategory.id_subcat,
            },
        });

        return NextResponse.json({ success: true, message: "Subcategory deleted", subcategory: body.name });
    }
    catch (e) {
        return NextResponse.json({ success: false, error: e });
    }
}