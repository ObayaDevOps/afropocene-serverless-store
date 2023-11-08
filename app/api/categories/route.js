import { NextResponse } from "next/server"

import { 
  initialize as initializeProductModule,
} from "@medusajs/product"

export async function GET(request) {
  const productService = await initializeProductModule()

  const data = await productService.listCategories()

  return NextResponse.json({ categories: data })
}