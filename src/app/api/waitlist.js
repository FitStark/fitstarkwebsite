import Airtable from "airtable";

export async function POST() {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  const records = await base(process.env.AIRTABLE_TABLE_NAME).create([
    { fields: { Name: name, Email: email } },
  ]);

  console.log(records);
}
