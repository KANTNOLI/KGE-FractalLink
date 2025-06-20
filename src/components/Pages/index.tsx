import { Link } from "react-router";
import style from "./Pages.module.scss"

interface pageList {
    img: string
    title: string
    type: string
}

interface props {
    type: boolean
}

function Pages({ type }: props) {
    const pagesList: pageList[] = [{
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/Agent_ID.png",
        title: "Профиль",
        type: "AgentID"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/LiveTunnel.png",
        title: "Чаты",
        type: "LiveTunnel"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/HackCred.png",
        title: "Достижения",
        type: "HackCred"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/HeatMap.png",
        title: "Статистика",
        type: "HeatMap"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/TrustList.png",
        title: "Друзья",
        type: "TrustList"
    }]

    return (
        <section className={type ? style.nav : style.nav2}>
            {pagesList.map((page, id) => (
                <Link key={id} to={`/?55-55-55-55-5555=${page.type}`} className={style.page}>
                    <img src={page.img} alt={page.title} />
                    {
                        type ? <p>
                            {page.title}
                        </p> : ""
                    }

                </Link>
            ))}


        </section>);
}

export default Pages;