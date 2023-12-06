import Airtable from "airtable";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    // Initialize Airtable
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_BASE_ID
    );

    try {
      // Add record to Airtable
      const records = await base(process.env.AIRTABLE_TABLE_NAME).create([
        { fields: { Name: name, Email: email } },
      ]);
      res.status(200).json({ message: "Email added to waitlist", records });
    } catch (error) {
      console.error("Error saving to Airtable:", error);
      res.status(500).json({ error: "Error saving to Airtable" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
