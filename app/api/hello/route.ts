import { NextResponse } from "next/server"; //creación de respuestas HTTP dentro de API Routes

export async function GET(request:Request) {
    return NextResponse.json({data: "hello"})
    
}