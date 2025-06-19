import { useEffect, useState } from "react"
import style from "./Statistics.module.scss"
import axios from "axios"

interface KeySettingsItf {
    OSRequiredApp: boolean,
    language: "ru" | "eu",
    clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"

// achievements_count: 0
// first_login: "2025-06-17T23:03:11.600Z"
// selected_statistics: []
// total_online: {}
interface OnlineIntf {
    years: number,
    months: number,
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}
interface StatiscticIntf {
    achievements_count: 0
    first_login: string
    selected_statistics: number[]
    total_online: OnlineIntf
}

interface ShortStatiscticIntf {
    achievements_count: 0
    first_login: string
    total_online: OnlineIntf
}

interface VisualStateIntf {
    id: number,
    url: string,
    title: string,
    desc: string
}



function Statistics() {
    const [Settings, setSettings] = useState<KeySettingsItf>(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
    const [updateState, setUpdateState] = useState<boolean>(true)


    const [VisualResult, setVisualResult] = useState<VisualStateIntf[]>([{
        id: 0,
        url: "https://hubabuba.space/temp/cookies.jpg",
        title: "Количество достижений: ",
        desc: "загрузка"
    }, {
        id: 1,
        url: "https://hubabuba.space/temp/cookies.jpg",
        title: "Вы зарегистрировались в: ",
        desc: "загрузка"
    }, {
        id: 2,
        url: "https://hubabuba.space/temp/cookies.jpg",
        title: "Суммарное время онлайн в приложении: ",
        desc: "загрузка"
    }])

    //selected_statistics
    const [activeAchi, setactiveAchi] = useState<number[]>([])
    const [StatisticUser, setStatisticUser] = useState<ShortStatiscticIntf | null>(null)


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

        axios.get("https://hubabuba.space/api/getStats", {
            headers: { Authorization: `Bearer ${Settings.clientToken}` }
        }).then(res => {

            const temp = res.data as StatiscticIntf
            const setDataTemp: OnlineIntf = {
                ...{
                    seconds: 0,
                    minutes: 0,
                    hours: 0,
                    days: 0,
                    months: 0,
                    years: 0,
                }, ...temp.total_online
            }
            setactiveAchi(temp.selected_statistics)
            setStatisticUser({ total_online: { ...setDataTemp }, achievements_count: temp.achievements_count, first_login: temp.first_login })

            const newState: VisualStateIntf[] = VisualResult
            const firstLog = new Date(temp.first_login)

            newState[0].desc = `${temp.achievements_count + 1}`
            newState[1].desc = `${firstLog.getDate()}:0${firstLog.getMonth() + 1}:${firstLog.getFullYear()} ${firstLog.getHours()}:${firstLog.getMinutes()}`
            newState[2].desc = `00:00:00`


        });

    }, [activeAchi, updateState])

    // Получение всех возможных
    // ПОлучение полученых
    // Рендер
    // Обновление данных

    useEffect(() => {
        "render"
    }, [StatisticUser])

    return (
        <section className={style.body}>
            <div className={style.header}>
                <p className={style.headerTitle}>Ваша Статистика</p>
                {<button onClick={() => HandleSaveData()} className={!updateState ? style.saveOff : style.saveOn}>сохранить</button>}
            </div>


            <div className={style.list}>
                {VisualResult.map((achi, id) => (
                    <div key={id} className={style.line}>
                        <img className={style.lineImg} src={achi.url} alt="загрузка" />
                        <div className={style.lineTitle}>
                            {achi.title}
                        </div>

                        <div className={style.lineDesc}>
                            {achi.desc}
                        </div>

                        <div onClick={() => HandleChooseState(id)} className={stateActive(achi.id)}></div>
                    </div>
                ))}
            </div>


        </section>);
}

export default Statistics;