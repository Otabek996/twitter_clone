import styles from "../styles/Messages.module.scss";
import Link from "next/link";
import Image from "next/image";

const Messages = () => {
    return (
        <>
            <section className={styles.messages}>
                <div className={styles.messages__container}>
                    <div className={styles.messages__header}>
                        <h1 className={styles.messages__title}>Сообщения</h1>
                        <div className={styles.messages__icons}>
                            <Image src="/svg/bx-cog.svg" width={20} height={20} alt=''/>
                            <Image src="/svg/bx-message-add.svg" width={20} height={20} alt=''/>
                        </div>
                    </div>

                    <div className={styles.messages__body}>
                        <h1 className={styles.messages__body__title}>Добро пожаловать <br/> во входящие!</h1>
                        <p className={styles.messages__body__subtitle}>Отправьте весточку или поделитесь твитами в личной переписке с другими пользователями Twitter.</p>
                        <button className={styles.messages__body__button}>Написать сообщение</button>
                    </div>
                </div>
            </section>

            <section className={styles.message__section}>
                <div className={styles.message__section__container}>
                    <div className={styles.message__section__body}>
                        <h1 className={styles.message__section__title}>Выберите <br/> сообщение</h1>
                        <p className={styles.message__section__subtitle}>Выберите одну из существующих переписок, начните новую или просто продолжайте осматриваться.</p>
                        <button className={styles.messages__body__button}>Новое сообщение</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Messages