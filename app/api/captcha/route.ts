import { NextResponse } from "next/server"
import { generateRandomCode } from "@/app/helpers/CaptchaHelper";

export async function GET() {
    const code = generateRandomCode();

    const response = NextResponse.json({
        captcha: code
    });

    return response;
}
