import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

//  [slug] file is for the dynamic routing inside blogpost folder sp any url corresponding to localhost:3000//blogpost/anyname will be automatically visible through slug...

//here props is being passed from the below function from the export async function getServerSideProps(context)

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

// For SSR purpose api call is here .....
// This gets called on every request
// Now All the html content coming from API will be visible to view page source and is very good for SEO purpose ..

export async function getServerSideProps(context) {
  // Fetch data from external API
  // const router = useRouter();
  const { slug } = context.query;
  console.log("*********************", context.query);
  const res = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  const myBlog = await res.json();

  // Pass data to the page via props it will be passed to the abpve export slug function const slug = (props) => {
  return { props: { myBlog } };
}

export default slug;


// Now starting the Static Site generation noew 
