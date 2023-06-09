import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    // get specific params passed to the function
    // const name = searchParams.get('name')
    // const instrument = searchParams.get('instrument')

    // get all the params passed to the route
    const obj = Object.fromEntries(searchParams.entries())

    return NextResponse.json(obj)
}
