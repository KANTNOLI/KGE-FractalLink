import { Link, useSearchParams } from "react-router";
import style from "./Pages.module.scss"

interface pageList {
    img: string
    title: string
    type: string
}

function Pages() {
    const pagesList = [{
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/Agent_ID.png",
        title: "Agent_ID",
        type: "Agent_ID"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/LiveTunnel.png",
        title: "LiveTunnel",
        type: "LiveTunnel"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/HackCred.png",
        title: "HackCred",
        type: "HackCred"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/HeatMap.png",
        title: "HeatMap",
        type: "HeatMap"
    }, {
        img: "https://hubabuba.space/55-55-55-55-5555/assets/img/TrustList.png",
        title: "TrustList",
        type: "TrustList"
    }]
    const [searchParams] = useSearchParams();


    console.log(searchParams.get("55-55-55-55-5555"));



    return (
        <section className={style.nav}>
            {pagesList.map((page, id) => (
                <Link key={id} to={`/?55-55-55-55-5555=${page.type}`} className={style.page}>
                    <img src={page.img} alt={page.title} />
                    <p>
                        {page.title}
                    </p>
                </Link>
            ))}


        </section>);
}

export default Pages;