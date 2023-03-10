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

            <section className={styles.search}>
                <div className={styles.search__container}>
                    <div className={styles.search__header}>
                        <div className={styles.search__icon}>
                            <Image className={styles.search__icon__dots} src="/svg/bx-search.svg" width={22} height={19} alt=''/>
                        </div>
                        <input className={styles.search__input} type="text" placeholder="Поиск в Твиттере"/>
                    </div>

                    <div className={styles.read__container}>
                    <div className={styles.read__card}>
                        <h1 className={styles.read__card__title}>Вам может понравиться</h1>

                        <div className={styles.read__card__body}>
                            <div className={styles.read__card__user}>
                                <Image className={styles.read__card__img} src="/img/userOne.jpg" width={48} height={48} alt=''/>
                                <div className={styles.card__user__text}>
                                    <h1 className={styles.card__user__title}>Shibetoshi Nakamoto </h1>
                                    <p className={styles.card__user__nickname}>@BillyM2k</p>
                                </div>
                                <button className={styles.read__card__button}>Читать</button>
                            </div>
                            <div className={styles.read__card__user}>
                                <Image className={styles.read__card__img} src="/img/userTwo.jpg" width={48} height={48} alt=''/>
                                <div className={styles.card__user__text}>
                                    <h1 className={styles.card__user__title}>Premier League</h1>
                                    <p className={styles.card__user__nickname}>@premierleague</p>
                                </div>
                                <button className={styles.read__card__button}>Читать</button>
                            </div>
                            <div className={styles.read__card__user}>
                                <Image className={styles.read__card__img} src="/img/userThree.jpg" width={48} height={48} alt=''/>
                                <div className={styles.card__user__text}>
                                    <h1 className={styles.card__user__title}>The White House</h1>
                                    <p className={styles.card__user__nickname}>@WhiteHouse</p>
                                </div>
                                <button className={styles.read__card__button}>Читать</button>
                            </div>
                        </div>

                        <div className={styles.read__card__footer}>
                            <p className={styles.read__card__footer__text}>Показать еще</p>
                        </div>
                    </div>

                    <div className={styles.search__body}>
                        <div className={styles.current__topics__card}>
                            <h1 className={styles.topics__card__title}>Актуальные темы для вас</h1>
                        </div>
                    </div>

                    <div className={styles.documentation}>
                        <a className={styles.documentation__twitter} href="https://twitter.com/ru/tos">Условия предоставления услуг <br/> </a>
                        <a className={styles.documentation__twitter} href="https://twitter.com/ru/privacy">Политика конфиденциальности <br/> </a>
                        <a className={styles.documentation__twitter} href="https://help.twitter.com/ru/rules-and-policies/twitter-cookies">Политика в отношении файлов cookie <br/> </a>
                        <a className={styles.documentation__twitter} href="https://help.twitter.com/ru/resources/accessibility">Специальные возможности <br/> </a>
                        <div className={styles.documentation__advertising}>
                            <a className={styles.documentation__twitter} href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Информация о рекламе</a>
                            <a className={styles.documentation__twitter} href="#">Еще...</a>
                        </div>
                        <p className={styles.documentation__twitter}>© Twitter, Inc., 2023.</p>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default User;