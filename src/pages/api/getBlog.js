import * as fs from "fs";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Here We are Working on Server Side ...

//  Note : Here req is coming from the url here or from the client To the server But Response is being given from the server to the client

export default async function handler(req, res) {
  try {
    // Here We are just finding the path of the file using readFile function
    const file = await fs.readFile(`${process.cwd()}/blogdata/${req.query.slug}.json`,"utf8");

    // Here We are Reading the file from blogdata folder and whatever we are writing in url will be fetched as a req
    //  and with the help of req.query.slug we can fetched the file_name inside blogdata folder and show the json data to the browser.

    // Eg : the URL : http://localhost:3000/api/blogs?slug=how-to-learn-javascript  ,
    // this will return { slug: 'how-to-learn-javascript' } in req.query

    //  Here file is a JSON string and to convert the JSON string into JSON Object  we use JSON.parse
    const data = JSON.parse(file);
    // console.log("wahi",data);
    //   console.log("wahi",req.query)
    res.status(200).json(data);

    
  } catch (err) {
    //  So Finally The Summarizing the step ... Here on Hitting a Particular Url /Api the server is giving the data to client from the JSON data stored in blogdata

    console.log(err);
    return res.status(404).json({ error: "File not found/Internal Server Error" });
  }
}
