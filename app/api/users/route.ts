import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//CRUD 
let users:{ id: number , name: string}[]=[

    { "id":0, "name": "Martina"},
    {"id":1,"name":"Asem"},
    {"id":2,"name":"Shafek"}
];
export function GET(request:NextRequest){
 return NextResponse.json(users)
}

export async function POST(request:NextRequest){

   const body = await request.json();
   const validation = schema.safeParse(body)
   if(!validation.success)
    return NextResponse.json({error:' Name is Required'},{status:400})
    users.push(body)
 return NextResponse.json({id:1,name:body.name}, {status:201}) 
}