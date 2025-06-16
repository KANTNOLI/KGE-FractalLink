import { useEffect, useState } from "react"
import style from "./Statistics.module.scss"

function Statistics() {
    const [updateState, setUpdateState] = useState<boolean>(true)
    const [activeAchi, setactiveAchi] = useState<number[]>([1, 2])

    const AchieveArray = [{
        id: 0,
        url: "https://hubabuba.space/temp/cookies.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia."
    }, {
        id: 1,
        url: "https://hubabuba.space/temp/cookies.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia."
    }, {
        id: 2,
        url: "https://hubabuba.space/temp/cookies.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia."
    }, {
        id: 3,
        url: "https://hubabuba.space/temp/cookies.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia."
    }, {
        id: 4,
        url: "https://hubabuba.space/temp/cookies.jpg",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia."
    }]

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
        console.log("render",);

    }, [activeAchi, updateState])

    // Получение всех возможных
    // ПОлучение полученых
    // Рендер
    // Обновление данных

    return (
        <section className={style.body}>
            <div className={style.header}>
                <p className={style.headerTitle}>Ваша Статистика</p>
                {<button onClick={() => HandleSaveData()} className={!updateState ? style.saveOff : style.saveOn}>сохранить</button>}
            </div>

            {
                AchieveArray.map((achi, id) => (
                    <div key={id} className={style.list}>
                        <div className={style.line}>
                            <img className={style.lineImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />

                            <div className={style.lineDesc}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia.
                            </div>

                            <div onClick={() => HandleChooseState(id)} className={stateActive(achi.id)}></div>
                        </div>
                    </div>
                ))
            }

        </section>);
}

export default Statistics;