import * as fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const dirPath = path.join(process.cwd(), "contactdata");
      
      // Ensure the directory exists
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }

      // Read the directory to count files
      const files = await fs.promises.readdir(dirPath);

      // Save the data
      const filePath = path.join(dirPath, `${files.length + 1}.json`); // Created a new File and added to contactdata folder..
      await fs.promises.writeFile(filePath, JSON.stringify(req.body, null, 2)); // writing the file with the data

      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
