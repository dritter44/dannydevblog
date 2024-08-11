import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>8/10/24 - </span>
                    <span className={styles.category}>Culture</span>
                </div>
                <Link href="/">
                    <h1>This Posts Title</h1>
                </Link>
                <p className={styles.desc}>
                    This is post description text. This is post description text. This is post description text.
                    This is post description text.This is post description text.This is post description text.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
};

export default Card;