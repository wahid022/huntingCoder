import React, { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css' 
import Link from 'next/link';
import * as fs from "fs";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them


const Blog = (props) => {

  const [blogs,setBlogs]=useState(props.allBlogs);

  // console.log("bloggs *******************_______________________________",blogs);
  
  return <div className={styles.container}>
    <main className={styles.main}> 
      {blogs.map((blogitem)=>{
        return <div key={blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
        <p className={styles.blogItemp}>{blogitem.metadesc.substr(0, 140)}...</p>      </div>
      })} 
  </main>
</div>
};



 
// This gets called on every request
export async function getStaticProps(context) {
  //   Here Writing the logic of api/blog.js so that the data will be ready as static html, so no need to call the Api By the server 
  //  Here Directly Reading the file ...

  let data=await fs.promises.readdir("blogdata");// Reading the folder Diretory
    let allBlogs=[]; // An Array to store fileName
  
    for(let i=0;i<data.length;i++)
    {
      const item =data[i];
      const file= await fs.promises.readFile(('blogdata/' + item),'utf-8');
      allBlogs.push(JSON.parse(file))
    }
  
    return { props: { allBlogs } }
}

export default Blog;