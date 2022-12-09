import styles from "../styles/Lists.module.scss";
import Link from "next/link";
import Image from "next/image";

const List = () => {
    return (
        <>
            <section className={styles.list}>
                <div className={styles.list__container}>
                    <div className={styles.list__header}>
                        <div className={styles.list__header__top}>
                            <div className={styles.list__links}>
                                <Link className={styles.list__button} href="/">
                                    <Image src="/svg/left-arrow.svg" width={20} height={20} alt="Back Button"/>
                                </Link>
                                <div className={styles.list__texts}>
                                    <h4 className={styles.list__title}>Списки</h4>
                                    <p className={styles.list__user}>@Otabek_996</p>
                                </div>
                            </div>
                            <div className={styles.list__menu}>
                                <button className={styles.list__menu__button}>
                                    <Image src="/svg/list-add.svg" width={20} height={20} alt=""/>
                                </button>
                                <button className={styles.list__menu__button}>
                                    <Image src="/svg/dots.svg" width={20} height={20} alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.list__header__bottom}>
                            <h4 className={styles.list__header__bottom__title}>Закрепленные Списки</h4>
                            <p className={styles.list__header__bottom__subtitle}>Здесь пока ничего нет. Закрепите здесь свои любимые Списки, чтобы <br/> быстро получать к ним доступ.</p>
                        </div>
                    </div>
                    <div className={styles.list__body}>
                        <h2 className={styles.list__body__title}>Ваши Списки</h2>
                        <p className={styles.list__body__subtitle}>Вы пока не создали и не начали читать ни одного Списка. Когда вы это <br/> сделаете, они появятся здесь.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default List;