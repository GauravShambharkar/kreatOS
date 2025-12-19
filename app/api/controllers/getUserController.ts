import { NextResponse as res } from "next/server"


export const getUserController = () => {
    return res.json({
        ok: true,
        msg: "User fetched successfully"
    })
}