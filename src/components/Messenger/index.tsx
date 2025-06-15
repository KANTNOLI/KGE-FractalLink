import style from "./Messenger.module.scss"

function Messenger() {
    return (
        <section className={style.body}>
            <header className={style.header}>
                <img className={style.headerAvatar} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                <p className={style.headerTitle}>KANTNOLI</p>
            </header>



            <main className={style.chat}></main>
        </section>
    );
}

export default Messenger;