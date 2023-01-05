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

            <section className={styles.search}>
                <div className={styles.search__container}>
                    <div className={styles.search__header}>
                        <div className={styles.search__icon}>
                            <Image className={styles.search__icon__dots} src="/svg/bx-search.svg" width={22} height={19} alt=''/>
                        </div>
                        <input className={styles.search__input} type="text" placeholder="Поиск в Твиттере"/>
                    </div>

                    <div className={styles.search__body}>
                        <div className={styles.current__topics__card}>
                            <h1 className={styles.topics__card__title}>Актуальные темы для вас</h1>
                        </div>
                    </div>

                    <div className={styles.read__container}>
                    <div className={styles.read__card}>
                        <h1 className={styles.read__card__title}>Кого читать</h1>

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

export default List;