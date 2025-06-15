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
                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>


                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>
                    
                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>
                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>
                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>
                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi ad, numquam earum ex expedita aliquid nulla dolorem</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>
                </div>
                <input className={style.input} type="text" />
            </main>
        </section>
    );
}

export default Messenger;