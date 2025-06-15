import style from "./Profile.module.scss"

function Profile() {
    return (
        <section className={style.body}>
            <header className={style.header}>
                <img className={style.headerAvatar} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                <div className={style.headerContent}>
                    <p className={style.headerNick}>KANTNOLI</p>
                    <div className={style.headerBio}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro eos beatae necessitatibus, vitae ipsam quia obcaecati ad perferendis aut. Tempora fuga dolor quam perspiciatis, adipisci quo architecto placeat commodi praesentium.
                    </div>
                </div>
                <img className={style.headerEdit} src="https://hubabuba.space/55-55-55-55-5555/assets/img/Pencil.png" alt="" />
            </header>
            <footer className={style.footer}>
                <div className={style.achievements}>
                    <div className={style.info}>achievements</div>
                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>

                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>

                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                    <div className={style.achieve}>
                        <img className={style.achieveImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.achieveTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                </div>
                <div className={style.statistics}>
                    <div className={style.info}>statistics</div>
                    <div className={style.stat}>
                        <img className={style.statImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.statTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                    <div className={style.stat}>
                        <img className={style.statImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.statTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                    <div className={style.stat}>
                        <img className={style.statImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                        <p className={style.statTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique officia aspernatur, ducimus voluptates reprehenderit in adipisci fugiat facere minus nemo iure voluptatum beatae a explicabo asperiores dolorum odit deleniti quod!</p>
                    </div>
                </div>
            </footer>
        </section >);
}

export default Profile;