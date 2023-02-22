import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/Blog.module.css";
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(5)
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blog/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data);
  };


  return (
    <>
      <main className={styles.main}>
        <div className={styles.blogs}>
          <h2>All Blogs</h2>
          <InfiniteScroll
            dataLength={blogs.length}
            next={fetchData}
            hasMore={props.allCount !== blogs.length}
            loader={<h4>Loading...</h4>}>
            {blogs.map((blogItem) => {
              return (
                <div className={styles.blogItem} key={blogItem.slug}>
                  <Link href={`./blogpost/${blogItem.slug}`}>
                    <h3>{blogItem.title}</h3>
                  </Link>
                  <p>{blogItem.metadesc}</p>
                  <Link href={`./blogpost/${blogItem.slug}`}>
                    <button className={styles.button}>Read More</button>
                  </Link>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps(context) {
  let myFile;
  let allBlogs = [];
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  for (let index = 0; index < 15; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return { props: { allBlogs, allCount } }
}

// export async function getServerSideProps(context) {
//   let data = await fetch("http://localhost:3000/api/blog");
//   let allBlogs = await data.json();
//   return { props: {allBlogs} }
// }

export default Blogs;