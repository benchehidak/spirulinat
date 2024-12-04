import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req)  {
    const body = await req.json();
    const existingCategory = await prisma.category.findFirst({
        where: {
            nom: body.name,
        },
    });
    if(existingCategory){
        return NextResponse.json({success:false,error:"Category already exists"});
    }
    try{
        await prisma.category.create({
            data: {
                nom: body.name,
            },
        });
        
        return NextResponse.json({success:true, message:"Category created", category:body.name});
    }
    catch(e){
        return NextResponse.json({success:false,error:e});
    }

}
