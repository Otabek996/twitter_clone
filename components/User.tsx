import styles from "../styles/User.module.scss";
import Link from "next/link";
import Image from "next/image";

const User = () => {
    return (
        <>
            <section className={styles.profile}>
                <div className={styles.profile__container}>
                    <div className={styles.profile__header}>
                        <div className={styles.profile__icon}>
                            <Link className={styles.left__arrow} href='/'>
                                <Image src="/svg/left-arrow.svg" width={20} height={20} alt="Back Button"></Image>
                            </Link>
                        </div>
                        <div>
                            <Link className={styles.profile__title} href='/profile'>Otabek</Link>
                            <p className={styles.profile__tweets}>0 твитов</p>
                        </div>
                    </div>

                    <div className={styles.profile__main}>
                        <Image src="/img/profile-cover.jpg" width={598} height={199} alt=""/>
                        <div className={styles.profile__main__header}>
                            <Image className={styles.profile__img} src="/img/profile-img.jpg" width={135} height={135} alt=""/>
                            <button className={styles.change__profile}>Изменить профиль</button>
                        </div>
                        <div className={styles.profile__info}>
                            <h1 className={styles.profile__title}>Otabek</h1>
                            <p className={styles.profile__subtitle}>@Otabek_996</p>
                            <div className={styles.personal__information}>
                                <div className={styles.birthday}>
                                    <Image className={styles.birthday__icon} src="/svg/balloon.svg" width={19} height={19} alt="Birthday"/>
                                    <span>Дата рождения: 21 ноября 2002 г.</span>
                                </div>
                                <div className={styles.registration}>
                                    <Image className={styles.registration__icon} src="/svg/calendar.svg" width={19} height={19} alt="Registration"/>
                                    <span>Регистрация: декабрь 2015 г.</span>
                                </div>
                            </div>
                            <div className={styles.profile__subscribers}>
                                <Link className={styles.followers} href='#'><span className={styles.followers__numbers}>34</span>  <span className={styles.followers__text}>в читаемых</span></Link>
                                <Link className={styles.followers} href='#'><span className={styles.followers__numbers}>5</span>  <span className={styles.followers__text}>читателей</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default User;