import { PrismaClient } from '@prisma/client';
import { stat } from 'fs';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const categories = await prisma.category.findMany();
        //console.log('Categories:', categories);
        const result = [];

        const allProducts = await prisma.product.findMany();
    
        for (const category of categories) {
          const productsCount = allProducts.filter(product => product.categories.includes(category.id_cat)).length;
          //console.log('Products Count for Category:', category.id_cat, productsCount);
    
          const subcategories = await prisma.subcategory.findMany({
            where: { categoryId: category.id_cat },
          });
          //console.log('Subcategories for Category:', category.id_cat, subcategories);
    
          const subcategoriesWithCount = [];
    
          for (const subcategory of subcategories) {
            const subProductsCount = allProducts.filter(product => product.subcategories.includes(subcategory.id_subcat)).length;
            //console.log('Products Count for Subcategory:', subcategory.id_subcat, subProductsCount);
    
            subcategoriesWithCount.push({
              ...subcategory,
              productCount: subProductsCount,
            });
          }
    
          result.push({
            ...category,
            productCount: productsCount,
            subcategories: subcategoriesWithCount,
          });
        }
    
        //console.log('Final Result:', result);
        return NextResponse.json(result);
      } catch (error) {
        //console.error('Error:', error);
        return NextResponse.json({ error: error },{status: 500});
      }
}