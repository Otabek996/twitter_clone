import styles from "../styles/Bookmarks.module.scss";
import Link from "next/link";
import Image from "next/image";

const Bookmark = () => {
    return (
        <>
            <section className={styles.bookmarks}>
                <div className={styles.bookmarks__container}>
                    <div className={styles.bookmarks__header}>
                        <h1 className={styles.bookmarks__title}>Закладки</h1>
                        <p className={styles.bookmarks__user}>@Otabek_996</p>
                    </div>
                    <div className={styles.bookmarks__body}>
                        <Image className={styles.bookmarks__cover} src="/img/bookmarks-cover.png" width={336} height={168} alt=""/>
                        <h1 className={styles.bookmarks__text}>Сохраняйте твиты <br/> на потом</h1>
                        <p className={styles.bookmarks__description}>Не теряйте из виду хорошие твиты! Добавляйте <br/> их в закладки, чтобы без труда возвращаться к <br/> ним в будущем.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bookmark;