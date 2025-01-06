import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";

//  [slug] file is for the dynamic routing inside blogpost folder sp any url corresponding to localhost:3000//blogpost/anyname will be automatically visible through slug...

//here props is being passed from the below function from the export async function getStaticProps(context)

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  // console.log("************",blog);
  //  Here we are displaying the common data for the url -- localhost:3000//blogpost/anyname
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

// This gets called on every request
// Now All the html content coming from API will be visible to view page source and is very good for SEO purpose ..

export async function getStaticPaths() {
  return {

    //  Here Paths array syntax is written because it contains url for different pages thats why this is not the case for only single indivdual url or page ..
      paths: [
          // See path selection below
          { params: {slug:'how-to-learn-flask'} },
          { params: {slug:'how-to-learn-javascript'} },
          { params: {slug:'how-to-learn-nextjs'} }
      ],

      // See the fallback section below 
      fallback: true
  };
}


export async function getStaticProps(context) {
  const { slug } = context.params;
  // Here including [slug].js logic in SSG(static Site Generation..)
  // Here We are just finding the path of the file using readFile function
    const myBlog = await fs.promises.readFile(`${process.cwd()}/blogdata/${slug}.json`,"utf8");
  
  // Pass data to the page via props it will be passed to the abpve export slug function const slug = (props) => {
  return { props: { myBlog:JSON.parse(myBlog) } };
}

export default slug;

// Now starting the Static Site generation noew
