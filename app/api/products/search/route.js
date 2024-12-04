import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
  const prisma = new PrismaClient();
  const body = await req.json();
  console.log(body, "body")
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { brand: { contains: body.search } },
        { desc: { contains: body.search } },
        { tags: {   has: body.search  } },
        { title: { contains: body.search } },
        { slug: { contains: body.search } },
        { categories : { has: body.search } },
        // { weight: { contains: body.search } },
      ],
    },
  });
  console.log(products, "products")
  // return NextResponse.json({ success: true, products });
  return NextResponse.json({ success: true, products: JSON.stringify(products, (_, v) => typeof v === 'bigint' ? v.toString() : v) });
  

}
