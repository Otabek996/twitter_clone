import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import Helmet from "react-helmet";
import React, { useState } from "react";

const navigation = [
    { id: 1, title: 'Главная', path: '/', icon: '/svg/home01.svg' },
    { id: 2, title: 'Обзор', path: '/explore', icon: '/svg/explore01.svg' },
    { id: 3, title: 'Уведомления', path: '/notifications', icon: '/svg/notifications01.svg' },
    { id: 4, title: 'Сообщения', path: '/messages', icon: '/svg/messages01.svg' },
    { id: 5, title: 'Закладки', path: '/bookmarks', icon: '/svg/bookmarks01.svg' },
    { id: 6, title: 'Списки', path: '/lists', icon: '/svg/lists01.svg' },
    { id: 7, title: 'Профиль', path: '/profile', icon: '/svg/profile01.svg' },
    { id: 8, title: 'Еще', path: '#', icon: '/svg/more.svg' }
]

const Navbar = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Twitter</title>
                <link rel="icon" href="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" />
                <meta name="description" content="Twitter" />
            </Helmet>
            <nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <div className={styles.navbar__logo}>
                        <Link className={styles.logo__link} href='/'>
                            <Image className={styles.logo__img} src="/svg/twitter-logo.svg" width={35} height={30} alt="Twitter" />
                        </Link>
                    </div>

                    <div className={styles.navbar__menu}>
                        <ul className={styles.menu__list}>
                            {navigation.map(({ id, title, path, icon }) => (
                                <li className={styles.menu__item} key={id}>
                                    <Link className={styles.menu__link} key={id} href={path}>
                                        <Image className={styles.menu__icon} src={icon} width={28} height={28} alt="" />
                                        <span>{title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.navbar__button}>
                        <button className={styles.btn__tweet}>Твитнуть</button>
                    </div>
                </div>

                <div className={styles.navbar__account}>
                    <div className={styles.account__info}>
                        <div className={styles.account__img}>
                            <Image className={styles.profile__img} src="/img/userImg.jpg" width={40} height={40} alt=""/>
                        </div>
                        <div className={styles.profile__info}>
                            <h4 className={styles.account__title}>Otabek</h4>
                            <p className={styles.account__nickname}>@Otabek_996</p>
                        </div>
                        <div className={styles.account__menu}>
                            <Image src="/svg/dots.svg" width={28} height={28} alt=""/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;