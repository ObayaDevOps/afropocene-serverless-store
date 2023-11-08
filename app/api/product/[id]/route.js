import { NextResponse } from "next/server"

import { 
  initialize as initializeProductModule,
} from "@medusajs/product"

export async function GET(
  request, 
  { params }) {
  
  const { id } = params
  const productService = await initializeProductModule()

  const data = await productService.list({
    id,
  })

  return NextResponse.json({ product: data[0] })
}