import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page

//  [slug] file is for the dynamic routing inside blogpost folder sp any url corresponding to localhost:3000//blogpost/anyname will be automatically visible through slug...
const slug = () => {
  const router = useRouter();

  const [blog, setBlog] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [router.isReady]);

  console.log("************",blog);
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

export default slug;
