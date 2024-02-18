import { NextResponse } from "next/server"

export async function GET() {
    const response = NextResponse.json({
        hello: "hello"
    });

    return response;
}

export async function POST(request: Request) {
    const data = await request.json();

    const response = NextResponse.json({
        data
    });

    return response;
}
