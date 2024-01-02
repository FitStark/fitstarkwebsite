import Airtable from "airtable";
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

/* export async function POST(req) {
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  base(process.env.AIRTABLE_TABLE_NAME)
    .select({
      // Selecting the first 3 records in Grid, Filtered by Name:
      maxRecords: 3,
      view: "Grid, Filtered by Name",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log("Retrieved", record.get("Name"));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  return NextResponse.json({ ok: true }, { status: 200 });
} */
