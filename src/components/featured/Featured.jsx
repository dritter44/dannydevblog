import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Danny Dev here</b> This is how I became a dev!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>Top Post</h1>
                    <p className={styles.postDesc}>This post is a post about a blog post</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured