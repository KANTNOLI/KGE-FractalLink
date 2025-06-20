import { useEffect, useState } from "react";
import style from "./Friends.module.scss"

interface users {
    id: number,
    login: string,
    avatar: string,
}

interface friends {
    user_id: number,
    login: string,
    avatar: string,
    friend_id: number,
    befriend: string,
    status: string,
}

function Friends() {
    const [NeedUpdate, setNeedUpdate] = useState<boolean>(false)
    const [HaveFriends, setHaveFriends] = useState<boolean>(true)
    const [Search, setSearch] = useState<string>("")


    const users: users[] = [{
        id: 1,
        login: "user1",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
    }, {
        id: 2,
        login: "user2",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
    }, {
        id: 3,
        login: "user3",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
    }, {
        id: 4,
        login: "user4",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
    }]

    const friends: friends[] = [{
        user_id: 1,
        friend_id: 2,
        login: "login 2",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
        befriend: "text",
        status: "status 2",
    }, {
        user_id: 1,
        friend_id: 3,
        login: "login 3",
        avatar: "https://hubabuba.space/temp/cookies.jpg",
        befriend: "text",
        status: "status 3",
    }]


    const [UserList, setUserList] = useState<users[] | friends[]>(friends)

    const HandlerSearch = () => {
        const frinedsSearch = friends.filter((user) => {
            if (user.login.toLowerCase().includes(Search.toLowerCase())) {
                return user
            }
        })

        if (frinedsSearch.length) {
            setUserList(frinedsSearch)
            setHaveFriends(true)
        } else {
            const usersSearch = users.filter((user) => {
                if (user.login.toLowerCase().includes(Search.toLowerCase())) {
                    return user
                }
            })

            setUserList(usersSearch || [])
            setHaveFriends(false)
            console.log(HaveFriends);
            console.log(UserList);
            
        }

        setNeedUpdate(true)
    }

    useEffect(() => {

    }, [NeedUpdate])


    return (
        <section className={style.body}>
            <div className={style.header}>
                <input placeholder="Search" onChange={(event) => setSearch(event.target.value)} value={Search} type="text" className={style.search} />
                <button onClick={() => HandlerSearch()} className={style.btnSearch}>поиск</button>
            </div>

            <div className={style.userList}>
                {
                    // UserList.map((user, id) => {
                    //     if (HaveFriends) {
                    //         return (
                    //             <div key={id} className={style.userListYes}>
                    //                 <img className={style.userListYesImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    //                 <p className={style.userListYesTitle}>{user.login} <span>Huesos 12.12.2002</span></p>
                    //                 <input type="text" className={style.userRename} placeholder="set tag" />
                    //                 {/* true ? style.userListYesBtn : style.userListYesOffBtn */}
                    //                 <button className={style.userListYesBtn}>Сохранить</button>
                    //                 <button className={style.userListYesBtn}>Удалить</button>
                    //             </div>)
                    //     } else {
                    //         return (
                    //             <div key={id} className={style.userListNone}>
                    //                 <img className={style.userListNoneImg} src="https://hubabuba.space/temp/cookies.jpg" alt="" />
                    //                 <p className={style.userListNoneTitle}>KANTNOLI</p>

                    //                 <button className={style.userListNoneBtn}>Добавить</button>
                    //             </div>)
                    //     }
                    // })
                }

                <p className={style.time}>Поиск друзей отключен на момент разработки чатов!</p>
                <p className={style.time2}>Следите за новостями в нашем ТГ канале! <a target="_blank" href="https://t.me/Multiverse_Dark_Lands">КЛИКНИТЕ СЮДА</a></p>

            </div>
        </section>
    );
}

export default Friends;