import { getUserController } from "@/app/api/controllers/getUserController";
import { NextResponse } from "next/server";

export async function GET() {
    return getUserController()
}



