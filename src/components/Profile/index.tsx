import { useEffect, useState } from "react";
import style from "./Profile.module.scss"
import axios from "axios";
interface KeySettingsItf {
    OSRequiredApp: boolean,
    language: "ru" | "eu",
    clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"

interface ProfileIntf {
    avatar: string,
    login: string,
    bio: string,
    friends: number,
    statistics: number[],
    achievements: number[],
}

interface props {
    type: boolean,
    id?: number
}



function Profile({ type, id }: props) {
    const [Settings, setSettings] = useState<KeySettingsItf>(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
    const [Profile, setProfile] = useState<ProfileIntf | null>(null)


    useEffect(() => {
        axios.post("https://hubabuba.space/api/getProfile", { type: type, id: id }, {
            headers: { Authorization: `Bearer ${Settings.clientToken}` }
        }).then(res => {
            console.log(res.data);

            setProfile(res.data)

        });
    }, [])

    // Берем статиститку и ачивки с сервера и рендерим

    return (
        <section className={style.body}>
            <header className={style.header}>
                <img className={style.headerAvatar} src={Profile ? Profile.avatar : "Загрузка"} alt="Загрузка" />
                <div className={style.headerContent}>
                    <p className={style.headerNick}>{Profile ? Profile.login : "Загрузка"}</p>
                    <div className={style.headerBio}>{Profile ? Profile.bio : "Загрузка"}</div>
                </div>
                {type ? <img className={style.headerEdit} src="https://hubabuba.space/55-55-55-55-5555/assets/img/Pencil.png" alt="" /> : "-"}
            </header>
            <footer className={style.footer}>
                <div className={style.achievements}>
                    <div className={style.info}>Достижения</div>
                    {!Profile ? "Загрузка" : Profile.achievements.map((achieve, id) => (
                        <div key={id} className={style.achieve}>
                            <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                            <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                        </div>
                    ))}


                </div>
                <div className={style.statistics}>
                    <div className={style.info}>Статистика</div>
                    {!Profile ? "Загрузка" : Profile.achievements.map((achieve, id) => (
                        <div key={id} className={style.stat}>
                            <img className={style.statImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                            <p className={style.statTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                        </div>
                    ))}

                </div>
            </footer>
        </section >);
}

export default Profile;