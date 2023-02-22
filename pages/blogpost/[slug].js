import React, { useState } from "react";
import styles from "../../styles/Blogpost.module.css";
import * as fs from 'fs';

const Slug = (props) => {
  const [blog, setBlog] = useState(props.blogPost);
  function createMarkup(c) {
    return { __html: c }
  }
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog && blog.title}</h1>
      {blog && <div className={styles.description} dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </main>
  );
};

export async function getStaticPaths() {
  let blogs = await fs.promises.readdir("blogdata");
  blogs = blogs.map((item)=>{
    return { params: { slug: item.split(".")[0] } };
  })
  return {
    paths: blogs,
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let blogPost = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8',);
  return { props: { blogPost: JSON.parse(blogPost) } };
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query;
//   let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   let blogPost = await data.json();
//   return { props: { blogPost } };
// }

export default Slug;
