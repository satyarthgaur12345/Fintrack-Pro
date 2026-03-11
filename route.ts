import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"

export async function POST(req: Request) {

  const session = await getSession()

  if (!session) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  try {

    const body = await req.json()

    return NextResponse.json(
      { message: "Reconciliation started" },
      { status: 201 }
    )

  } catch (error) {

    return NextResponse.json(
      { error: "Reconciliation failed" },
      { status: 500 }
    )
  }
}

export async function GET() {

  return NextResponse.json({ runs: [] })
}