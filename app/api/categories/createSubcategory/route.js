import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req)  {
    const body = await req.json();
    const existingSubcategory = await prisma.subcategory.findFirst({
        where: {
            nom: body.name,
            categoryId: body.categoryId
        },
    });
    if(existingSubcategory){
        return NextResponse.json({success:false,error:"Subcategory already exists"});
    }
    try{
        await prisma.subcategory.create({
            data: {
                nom: body.name,
                categoryId: body.categoryId
            },
        });
        
        return NextResponse.json({success:true, message:"Subcategory created", subcategory:body.name});
    }
    catch(e){
        return NextResponse.json({success:false,error:e});
    }

}