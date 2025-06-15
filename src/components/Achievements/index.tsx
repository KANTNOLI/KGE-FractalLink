import style from "./Achievements.module.scss"

function Achievements() {
    return (
        <section className={style.body}>
            <div className={style.header}>
                <p className={style.headerTitle}>Ваши Достижения (0/10)</p>
            </div>


            <div className={style.list}>
                <div className={style.line}>
                    <img className={style.lineImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />

                    <div className={style.lineDesc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi aliquid soluta suscipit ipsam, quis, consectetur quasi veritatis quaerat eligendi reiciendis nisi ea nostrum qui ipsa nihil facilis aspernatur quia.
                    </div>

                    <button>asd</button>
                </div>
            </div>
        </section>);
}

export default Achievements;