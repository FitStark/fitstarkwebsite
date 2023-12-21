import Airtable from "airtable";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email } = await req.formData();
  try {
    const base = new Airtable({
      apiKey: process.env.AIRTABLE_API_KEY,
    }).base(process.env.AIRTABLE_BASE_ID);

    const records = await base(process.env.AIRTABLE_TABLE_NAME).create([
      { fields: { Name: name, Email: email } },
    ]);

    console.log(records);
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ ok: true }, { status: 200 });
}
