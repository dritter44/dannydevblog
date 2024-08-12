 import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Danny Dev blog" width={50} height={50} />
                    <h1 className={styles.logoText}>Danny Dev Blog</h1>
                </div>
                <p className={styles.desc}>This is an info paragraph. This is an info paragraph.
                This is an info paragraph.This is an info paragraph.This is an info paragraph.
                This is an info paragraph.This is an info paragraph.This is an info paragraph.
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.lists}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href="/" className={styles.listItem} >Homepage</Link>
                    <Link href="/" className={styles.listItem} >Blog</Link>
                    <Link href="/" className={styles.listItem} >About</Link>
                    <Link href="/" className={styles.listItem} >Contact</Link>
                </div>
                <div className={styles.lists}>
                    <span className={styles.listTitle}>Tags</span>
                    <Link href="/" className={styles.listItem} >Style</Link>
                    <Link href="/" className={styles.listItem} >Fashion</Link>
                    <Link href="/" className={styles.listItem} >Coding</Link>
                    <Link href="/" className={styles.listItem} >Travel</Link>
                </div>
                <div className={styles.lists}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href="/" className={styles.listItem} >Facebook</Link>
                    <Link href="/" className={styles.listItem} >Instagram</Link>
                    <Link href="/" className={styles.listItem} >Tiktok</Link>
                    <Link href="/" className={styles.listItem} >YouTube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer