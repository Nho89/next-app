import { NextResponse } from "next/server"; //creación de respuestas HTTP dentro de API Routes

export async function GET(request:Request) {
    const user = [
        {
            id: 1, name: "Nhoe", email: "nhoe@gmail.com"
        },
        {
            id: 2, name: "Nhoe2", email: "nhoe2@gmail.com"
        }
    ]
    return NextResponse.json(user);
    
}