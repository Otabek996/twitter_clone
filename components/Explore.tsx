import styles from "../styles/Explore.module.scss";
import Link from "next/link";
import Image from "next/image";

const Explores = () => {
    return (
        <>
            <section className={styles.explore}>
                <div className={styles.explore__container}>
                    <div className={styles.explore__header}>
                        <input className={styles.explore__header__input} type="text" placeholder="Поиск в Твиттере"/>
                        <button className={styles.explore__header__setting}>
                            <Image src="/svg/bx-cog.svg" width={20} height={20} alt=''/>
                        </button>
                    </div>
                    
                    <div className={styles.explore__body}>
                        <h1 className={styles.explore__title}>Актуальные темы для вас</h1>
                        <div className={styles.explore__subtitle__box}>
                            <div className={styles.explore__subtitle__header}>
                                <p className={styles.explore__subtitle__header__title}>Актуальные темы: Узбекистан</p>
                                <p className={styles.explore__subtitle__header__dots}>...</p>
                            </div>
                            <div className={styles.explore__subtitle__body}>
                                <h5 className={styles.explore__subtitle__body__title}>New Year 2023</h5>
                            </div>
                        </div>
                    </div>

                    <div className={styles.explore__footer}>
                        <p className={styles.explore__footer__title}>Показать еще</p>
                    </div>
                </div>
            </section>

            <section className={styles.read}>
            <div className={styles.read__container}>
                    <div className={styles.read__card}>
                        <h1 className={styles.read__card__title}>Кого читать</h1>

                        <div className={styles.read__card__body}>
                            <div className={styles.read__card__user}>
                                <Image className={styles.read__card__img} src="/img/userOne.jpg" width={48} height={48} alt=''/>
                                <div className={styles.card__user__text}>
                                    <h1 className={styles.card__user__title}>Shibetoshi Nakamot</h1>
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
            </section>
        </>
    )
}

export default Explores