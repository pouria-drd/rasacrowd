import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
    const { params } = context
    const data = params;

    const response = NextResponse.json({
        data
    });

    return response;
}