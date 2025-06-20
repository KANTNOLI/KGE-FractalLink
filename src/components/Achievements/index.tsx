import { useEffect, useState } from "react";
import style from "./Achievements.module.scss"
import axios from "axios";

interface KeySettingsItf {
    OSRequiredApp: boolean,
    language: "ru" | "eu",
    clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"


interface AchievesIntf {
    desc: string
    id: number
    img: string
    title: string
}

interface UserAchievesIntf {
    allAchieve: AchievesIntf[]
    earned_achievements: number[]
    selected_achievements: number[]
}


function Achievements() {
    const [Settings, setSettings] = useState<KeySettingsItf>(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
    const [updateState, setUpdateState] = useState<boolean>(true)

    const [AllAchieves, setAllAchieves] = useState<AchievesIntf[]>([])
    const [HaveAchieves, setHaveAchieves] = useState<number[]>([])
    const [activeAchi, setactiveAchi] = useState<number[]>([])

    // готово
    const stateActive = (id: number) => {
        const match = activeAchi.find(value => value === id);
        return match !== undefined ? style.chooseOn : style.chooseOff;
    }

    // готово
    const HandleChooseState = (id: number) => {
        const match = activeAchi.find(value => value == id);
        if (match !== undefined) {
            const newArray = activeAchi.filter((value) => value !== id);
            setactiveAchi([...newArray])
        } else {
            if (activeAchi.length < 3) {
                setactiveAchi(before => [...before, id])
            } else {
                setactiveAchi(prev => {
                    const copy = [...prev];
                    copy.pop();
                    return [...copy, id];
                });
            }
        }

        setUpdateState(false)
    }

    // 
    const HandleSaveData = () => {
        if (!updateState) {
            console.log("uodate");
            setUpdateState(true)
        }
    }

    useEffect(() => {
        setSettings(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
        axios.get("https://hubabuba.space/api/getAchieves", {
            headers: { Authorization: `Bearer ${Settings.clientToken}` }
        }).then(res => {
            const temp: UserAchievesIntf = res.data as UserAchievesIntf
            setAllAchieves(temp.allAchieve)
            setHaveAchieves(temp.earned_achievements)
            setactiveAchi(temp.selected_achievements)
        });


        console.log(AllAchieves);
        console.log(HaveAchieves);
        console.log(activeAchi);

    }, [])

    // Получение всех возможных
    // ПОлучение полученых
    // Рендер
    // Обновление данных

    return (
        <section className={style.body}>
            <div className={style.header}>
                <p className={style.headerTitle}>Ваши Достижения ({HaveAchieves.length}/{AllAchieves.length})</p>
                {<button onClick={() => HandleSaveData()} className={!updateState ? style.saveOff : style.saveOn}>сохранить</button>}
            </div>


            <div className={style.list}>
                {AllAchieves.map((achi, id) => (
                    <div key={id} className={HaveAchieves.includes(id) ? style.line : style.line2}>
                        <img className={style.lineImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />

                        <div className={style.lineTitle}>
                            {achi.title}
                        </div>


                        <div className={style.lineDesc}>
                            {achi.desc}
                        </div>

                        {HaveAchieves.includes(id) ? (<div onClick={() => HandleChooseState(achi.id)} className={stateActive(achi.id)}></div>) : ""}

                    </div>
                ))}
            </div>


        </section>);
}

export default Achievements;