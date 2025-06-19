import { useEffect, useState } from "react";
import style from "./Messenger.module.scss"
import axios from "axios";

interface KeySettingsItf {
    OSRequiredApp: boolean,
    language: "ru" | "eu",
    clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"

function Messenger() {
    const [Settings, setSettings] = useState<KeySettingsItf>(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
    const [FriendsChat, setFriendsChat] = useState<number[]>([])


    useEffect(() => {
        setSettings(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))

        axios.get("https://hubabuba.space/api/getFriendChatList", {
            headers: { Authorization: `Bearer ${Settings.clientToken}` }
        }).then(res => {
            console.log(res.data);
            setFriendsChat(res.data ? res.data : [])
        });
    }, [])

    return (
        <section className={style.body}>
            <nav className={style.nav}>
                <div className={style.page}>
                    <img className={style.pageImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p>
                        Аноним {FriendsChat}
                    </p>
                </div>

            </nav>
            <main className={style.main}>
                <header className={style.header}>
                    <img className={style.headerAvatar} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p className={style.headerTitle}>Аноним</p>
                </header>
                <div className={style.chat}>
                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Ты знал что скоро завезут мессенджер на сайте?</p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>


                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Что? Нет, а какой он будет?</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Точно не знаю, но вроде планку держат на telegram</p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line2}>
                        <div className={style.messHe}>
                            <p className={style.messHeSend}>Думаешь будет что-то похожее?</p>
                            <p className={style.messHeTime}>12:12</p>
                        </div>
                    </div>

                    <div className={style.line1}>
                        <div className={style.messMe}>
                            <p className={style.messMeSend}>Блин, не знаю, но вроде все выглядит более чем круто для alpha версии, будем ждать новости в группе{")"} </p>
                            <p className={style.messMeTime}>12:12</p>
                        </div>
                    </div>

                </div>
                <input className={style.input} placeholder="Сюда можно что-то писать? " type="text" />
            </main>
        </section>
    );
}

export default Messenger;