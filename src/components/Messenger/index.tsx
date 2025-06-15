import style from "./Messenger.module.scss"

function Messenger() {
    return (
        <section className={style.body}>
            <nav className={style.nav}>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>

                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        ads
                    </p>
                </div>
            </nav>
            <main className={style.main}>
                <header className={style.header}>
                    <img className={style.headerAvatar} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p className={style.headerTitle}>KANTNOLI</p>
                </header>
                <div className={style.chat}>
                    <div className={style.messMe}>
                        <p className={style.messMeSend}>sadasdasddasasdasddsasdads</p>
                        <p className={style.messMeTime}>12:12</p>
                    </div>
                </div>
                <input type="text" />
            </main>
        </section>
    );
}

export default Messenger;