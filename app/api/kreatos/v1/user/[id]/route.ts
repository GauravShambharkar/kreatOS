import { NextResponse as res } from "next/server"


export async function GET() {
    return res.json({
        ok: true,
        msg: "User details"
    },
        {
            status: 200
        })
}