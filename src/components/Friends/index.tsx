import { useState } from "react";
import style from "./Friends.module.scss"

function Friends() {
    const [NeedUpdate, setNeedUpdate] = useState<boolean>(false)
    let a = {
        user_id: 1,
        friend_id: 1,
        befriend: "asd",
        visible: "asd",
        status: "asd",
    }
    const friends = ["a", "a"]
    const searchArray = ["a", "a"]

    return (
        <section className={style.body}>
            <div className={style.header}>
                <input type="text" className={style.search} />
                <button className={style.btnSearch}>поиск</button>
            </div>

            <div className={style.userList}>
                <div className={style.userListNone}>
                    <img className={style.userListNoneImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p className={style.userListNoneTitle}>KANTNOLI</p>

                    <button className={style.userListNoneBtn}>Добавить</button>
                </div>

                <div className={style.userListYes}>
                    <img className={style.userListYesImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    <p className={style.userListYesTitle}>KANTNOLI {"Huesos"}</p>
                    <input type="text" className={style.userRename} placeholder="set tag" />

                    <button className={NeedUpdate ? style.userListYesBtn : style.userListYesOffBtn}>Сохранить</button>
                    <button className={style.userListYesBtn}>Удалить</button>
                </div>
            </div>
        </section>
    );
}

export default Friends;