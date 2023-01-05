import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import Twitter from "twitter-lite";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import TextareaAutosize from 'react-textarea-autosize';
import React, { useState } from 'react';
// import state from "../state";
// import TextareaAutosize from 'react-circular-progressbar';
// import { debug } from "console";


const Home = () => {
    // const [input, setInput] = useState<string>('')
    const [inputOne, setInputOne] = useState('');
    console.log(inputOne);
    const tweetInputLength = inputOne.length

    return (
        <>
            <section className={styles.home}>
                <div className={styles.home__container}>
                    <div className={styles.home__header}>
                        <h1 className={styles.home__title}>Последние твиты</h1>
                        <img className={styles.home__stars} src="/svg/homeStars.svg" width={20} height={20} alt=""></img>
                    </div>

                    <div className={styles.home__tweet}>
                        <div className={styles.home__account}>
                            <Link className={styles.home__account__link} href="/profile">
                                <Image src="/img/userImg.jpg" width={48} height={48} alt=""/>
                            </Link>
                        </div>
                        <div className={styles.home__tweet__space}>
                            <form>
                                <input
                                    className={styles.tweet__space__input}
                                    name='input1' 
                                    value={inputOne} 
                                    onChange={(event) => setInputOne(event.target.value)}
                                    type="text"
                                    placeholder="Что происходит?"
                                    id="tweet-input"
                                    />
                                <div>
                                    <div className={styles.tweet__space__icons}>
                                        <img className={styles.tweet__space__icon} src="/svg/tweet-space-img.svg" alt="" width={20} height={20}/>
                                        <img className={styles.tweet__space__icon} src="/svg/tweet-space-gif.svg" alt="" width={20} height={20}/>
                                        <img className={styles.tweet__space__icon} src="/svg/tweet-space-something.svg" alt="" width={20} height={20}/>
                                        <img className={styles.tweet__space__icon} src="/svg/tweet-space-emoji.svg" alt="" width={20} height={20}/>
                                        <img className={styles.tweet__space__icon} src="/svg/tweet-space-time.svg" alt="" width={20} height={20}/>
                                    </div>

                                    <div>
                                        <div className={styles.tweet__numbers} style={{}}>
                                            <CircularProgressbar
                                            value={tweetInputLength}
                                            minValue={0}
                                            maxValue={260}
                                            // text={`${66}`}
                                            
                                            styles={buildStyles({
                                                // Rotation of path and trail, in number of turns (0-1)
                                                rotation: 0,

                                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                strokeLinecap: 'butt',

                                                // Text size
                                                textSize: '35px',

                                                // How long animation takes to go from one percentage to another, in seconds
                                                pathTransitionDuration: 0.1,

                                                // Can specify path transition in more detail, or remove it entirely
                                                // pathTransition: 'none',

                                                // Colors
                                                pathColor: `rgba(0, 152, 199, ${tweetInputLength / 100})`,
                                                textColor: '#f88',
                                                trailColor: '#d6d6d6',
                                                backgroundColor: '#3e98c7',
                                            })}
                                            />
                                        </div>

                                        <div className={styles.add__tweet}>
                                            <span className={styles.add__tweet__icon}>+</span>
                                        </div>

                                        <button
                                            // disabled={!input}
                                            className={styles.tweet__space__button}
                                            >Твитнуть</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className={styles.home__body}>
                        <div className={styles.home__body__tweet}>
                            <div className={styles.tweet__img}>
                                <Image className={styles.account__user__img} src="/img/newyorktime.png" width={48} height={48} alt=''/>
                            </div>

                            <div className={styles.tweet__body}>
                                <div className={styles.tweet__body__top}>
                                    <div className={styles.tweet__body__top__left}>
                                        <h1 className={styles.account__title}>The New York Times</h1>
                                        <p className={styles.account__nickname}>@nytimes</p>
                                        <span className={styles.dot}> · </span>
                                        <p className={styles.tweet__time}>24 мин</p>
                                    </div>
                                    <div className={styles.tweet__body__top__right}>
                                        <button className={styles.tweet__button} type='button'>···</button>
                                    </div>
                                </div>

                                <div className={styles.tweet__body__medium}>
                                    <text className={styles.tweet__text}>“How do you think this looks to the rest of the world?” 
                                        President Biden asked, noting the historic nature of the failure by the Republican-led 
                                        House to elect a speaker, which has not happened on the first roll call vote since 1923.
                                    </text>
                                    <Image className={styles.tweet__img} src="/img/newyorktimesImgjpg.jpg" width={504} height={264} alt=''/>
                                </div>

                                <div className={styles.tweet__body__bottom}>
                                    <div className={styles.bottom__icon}>
                                        <div className={styles.comment__box}>
                                            <div>
                                                <Image className={styles.comment__icon} src="/svg/comment.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.comment__number}>0</p>
                                        </div>

                                        <div className={styles.retweet__box}>
                                            <div>
                                                <Image className={styles.retweet__icon} src="/svg/retweet.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.retweet__number}></p>
                                        </div>

                                        <div className={styles.like__box}>
                                            <div>
                                                <Image className={styles.like__icon} src="/svg/heart.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.like__number}></p>
                                        </div>

                                        <div className={styles.share__box}>
                                            <div>
                                                <Image className={styles.share__icon} src="/svg/share.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.share__number}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.home__body__tweet}>
                            <div className={styles.tweet__img}>
                                <Image className={styles.account__user__img} src="/img/npr.jpg" width={48} height={48} alt=''/>
                            </div>

                            <div className={styles.tweet__body}>
                                <div className={styles.tweet__body__top}>
                                    <div className={styles.tweet__body__top__left}>
                                        <h1 className={styles.account__title}>NPR</h1>
                                        <p className={styles.account__nickname}>@NPR</p>
                                        <span className={styles.dot}> · </span>
                                        <p className={styles.tweet__time}>35 мин</p>
                                    </div>
                                    <div className={styles.tweet__body__top__right}>
                                        <button className={styles.tweet__button} type='button'>···</button>
                                    </div>
                                </div>

                                <div className={styles.tweet__body__medium}>
                                    <text className={styles.tweet__text}>A Tesla driver has been arrested and charged with intentionally driving off a cliff 
                                    in Northern California in an attempt to kill his family, police said. All four passengers, including two kids, survived.
                                    </text>
                                </div>

                                <div className={styles.tweet__body__bottom}>
                                    <div className={styles.bottom__icon}>
                                        <div className={styles.comment__box}>
                                            <div>
                                                <Image className={styles.comment__icon} src="/svg/comment.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.comment__number}>0</p>
                                        </div>

                                        <div className={styles.retweet__box}>
                                            <div>
                                                <Image className={styles.retweet__icon} src="/svg/retweet.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.retweet__number}></p>
                                        </div>

                                        <div className={styles.like__box}>
                                            <div>
                                                <Image className={styles.like__icon} src="/svg/heart.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.like__number}></p>
                                        </div>

                                        <div className={styles.share__box}>
                                            <div>
                                                <Image className={styles.share__icon} src="/svg/share.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.share__number}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.home__body__tweet}>
                            <div className={styles.tweet__img}>
                                <Image className={styles.account__user__img} src="/img/forbeslogo.jpg" width={48} height={48} alt=''/>
                            </div>

                            <div className={styles.tweet__body}>
                                <div className={styles.tweet__body__top}>
                                    <div className={styles.tweet__body__top__left}>
                                        <h1 className={styles.account__title}>Forbes</h1>
                                        <p className={styles.account__nickname}>@Forbes</p>
                                        <span className={styles.dot}> · </span>
                                        <p className={styles.tweet__time}>37 мин</p>
                                    </div>
                                    <div className={styles.tweet__body__top__right}>
                                        <button className={styles.tweet__button} type='button'>···</button>
                                    </div>
                                </div>

                                <div className={styles.tweet__body__medium}>
                                    <text className={styles.tweet__text}>On TikTok, Chinese State Media Pushes Divisive Videos About U.S. 
                                    </text>
                                    <Image className={styles.tweet__img} src="/img/forbesimg.jpg" width={504} height={264} alt=''/>
                                </div>

                                <div className={styles.tweet__body__bottom}>
                                    <div className={styles.bottom__icon}>
                                        <div className={styles.comment__box}>
                                            <div>
                                                <Image className={styles.comment__icon} src="/svg/comment.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.comment__number}>0</p>
                                        </div>

                                        <div className={styles.retweet__box}>
                                            <div>
                                                <Image className={styles.retweet__icon} src="/svg/retweet.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.retweet__number}></p>
                                        </div>

                                        <div className={styles.like__box}>
                                            <div>
                                                <Image className={styles.like__icon} src="/svg/heart.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.like__number}></p>
                                        </div>

                                        <div className={styles.share__box}>
                                            <div>
                                                <Image className={styles.share__icon} src="/svg/share.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.share__number}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.home__body__tweet}>
                            <div className={styles.tweet__img}>
                                <Image className={styles.account__user__img} src="/img/twplogo.jpg" width={48} height={48} alt=''/>
                            </div>

                            <div className={styles.tweet__body}>
                                <div className={styles.tweet__body__top}>
                                    <div className={styles.tweet__body__top__left}>
                                        <h1 className={styles.account__title}>The Washington Post</h1>
                                        <p className={styles.account__nickname}>@washingtonpost</p>
                                        <span className={styles.dot}> · </span>
                                        <p className={styles.tweet__time}>45 мин</p>
                                    </div>
                                    <div className={styles.tweet__body__top__right}>
                                        <button className={styles.tweet__button} type='button'>···</button>
                                    </div>
                                </div>

                                <div className={styles.tweet__body__medium}>
                                    <text className={styles.tweet__text}>Review: Tom Hanks plays a cantankerous widower in a spotty Hollywood redo of “A Man Called Ove” 
                                    </text>
                                    <Image className={styles.tweet__img} src="/img/twpimg.webp" width={504} height={264} alt=''/>
                                </div>

                                <div className={styles.tweet__body__bottom}>
                                    <div className={styles.bottom__icon}>
                                        <div className={styles.comment__box}>
                                            <div>
                                                <Image className={styles.comment__icon} src="/svg/comment.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.comment__number}>0</p>
                                        </div>

                                        <div className={styles.retweet__box}>
                                            <div>
                                                <Image className={styles.retweet__icon} src="/svg/retweet.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.retweet__number}></p>
                                        </div>

                                        <div className={styles.like__box}>
                                            <div>
                                                <Image className={styles.like__icon} src="/svg/heart.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.like__number}></p>
                                        </div>

                                        <div className={styles.share__box}>
                                            <div>
                                                <Image className={styles.share__icon} src="/svg/share.svg" width={19} height={19} alt=''/>
                                            </div>
                                            <p className={styles.share__number}></p>
                                        </div>
                                    </div>
                                </div>
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

                    <div className={styles.search__body}>
                        <div className={styles.current__topics__card}>
                            <h1 className={styles.topics__card__title}>Актуальные темы для вас</h1>

                            <div className={styles.topic__card}>
                                <div className={styles.topic__card__text}>
                                    <p className={styles.topic__card__subtitle}>Актуальные темы: Узбекистан</p>
                                    {/* <Image src="/svg/dots.svg" width={20} height={20} alt=''/> */}
                                    <p className={styles.topic__card__icon}>...</p>
                                </div>
                                <h4 className={styles.topic__card__name}>New Year 2023</h4>
                            </div>

                            <p className={styles.topic__card__more}>Показать еще</p>
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

export default Home