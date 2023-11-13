import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Data from "@/models/Data";



export const POST = async (request) => {
    const body = await request.json();

    const newData = Data(body);

    console.log(body);

    const id = body.id

    console.log(id);

    try {
        await connect();

        await Data.findOneAndUpdate(
            { _id: id},
             { value: newData.value } 
          );
        // await newData.save()

        return new NextResponse("Data has been created", { status: 201 });
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 });
    }
}

export const GET = async (request) => {
    try {
      await connect();
  
      const data = await Data.find();
  
  
      return new NextResponse(JSON.stringify(data), { status: 200 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };