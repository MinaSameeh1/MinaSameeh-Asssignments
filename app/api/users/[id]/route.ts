
import { NextRequest, NextResponse } from "next/server";

import schema from './../schema';

let users:{ id: number , name: string}[]=[

    { "id":0, "name": "Mina"},
    {"id":1,"name":"Mostafa"},
    {"id":2,"name":"John"}
];


export function GET(request:NextRequest,
    {params}:{params:{id:number}}){
        const {id}=params
    if(id >= users.length)
        return NextResponse.json({error:'User Not Found'},{status:404})
    return NextResponse.json(users[params.id]);
}
 export async function POST(request:NextRequest){
    
    
    
       const body = await request.json();
    const validation = schema.safeParse(body);
        if(!validation.success)
        return NextResponse.json({error:'Name is required'}, {status:400});
    return NextResponse.json({id:1,name:body.name},{status:201})
        }
        export function DELETE(request:NextRequest,
            {params}:{params:{id:number}}){
                
                if(params.id>10){
                    return NextResponse.json({error:'User Not Found'},{status:404})
                }
               
              
                return NextResponse.json({"msg":"deleted"},{status:200})
            }
    

export async function PUT(request: NextRequest,
    {params}:{params:{id:number}}){
      
        const body = await request.json();
        const validation = schema.safeParse(body);
        if(!validation.success){
            return NextResponse.json({error:'Name is required'},{status:400})
        }
       
        if(params.id>10)
            return NextResponse.json({error:'Not Found'},{status:404});
        
        return NextResponse.json({id:1, name:body.name})        
}


    