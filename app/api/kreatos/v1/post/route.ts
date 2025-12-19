import { NextRequest, NextResponse as res } from "next/server";

export async function GET() {
    return res.json(
        {
            success: true,
            msg: "Post fetched successfully"
        },
    );
}

export async function POST(req: NextRequest) {
    const { name } = await req.json();

    if (!name) {
        return res.json(
            {
                success: false,
                errMsg: "Name is required"
            },
            {
                status: 400
            }
        );
    }

    // Success case - return the created data
    return res.json(
        {
            success: true,
            data: { name }
        },
        { status: 201 }
    );
}


export async function PUT() { }
export async function PATCH() { }
export async function DELETE() { }
export async function OPTIONS() { }
