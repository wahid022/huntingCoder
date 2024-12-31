import * as fs from "fs";

export default async function handler(req, res) {


  let data=await fs.promises.readdir("blogdata");// Reading the folder Diretory  and 
  let myFile;
  let allBlogs=[]; // An Array to store fileName

  for(let i=0;i<data.length;i++)
  {
    const item =data[i];
    const file= await fs.promises.readFile(('blogdata/' + item),'utf-8');
    allBlogs.push(JSON.parse(file))
    console.log(allBlogs)
  }
  res.status(200).json(allBlogs);

}