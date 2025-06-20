import { useSearchParams } from "react-router";


import style from "./App.module.scss"
import Pages from "./components/Pages";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./components/Profile";
import Messenger from "./components/Messenger";
import Achievements from "./components/Achievements";
import Statistics from "./components/Statistics";
import Friends from "./components/Friends";

interface KeySettingsItf {
  OSRequiredApp: boolean,
  language: "ru" | "eu",
  clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"

// interface authValidateIntf {
//   id: string,
//   login: string,
//   result: "login" | "exit"
// }


function App() {
  const [searchParams] = useSearchParams();
  const [Settings, setSettings] = useState<KeySettingsItf>(JSON.parse(localStorage.getItem(KEY_SETTINGS) || "{}"))
  const [SkipLogin, setSkipLogin] = useState<boolean>(false)

  useEffect(() => {
    if (Settings && Settings.clientToken) {
      axios.get("https://hubabuba.space/api/authValidate", {
        headers: { Authorization: `Bearer ${Settings.clientToken}` }
      }).then(res => {
        if (res.data.result === "login") {
          localStorage.setItem(KEY_SETTINGS, JSON.stringify(Settings))
          setSkipLogin(true)
        }
      });
    } else if (!Settings.language) {
      localStorage.setItem(KEY_SETTINGS, JSON.stringify({
        OSRequiredApp: true,
        language: "eu",
        clientToken: ""
      }))
      setSettings({
        OSRequiredApp: true,
        language: "eu",
        clientToken: ""
      })
    }
    // Проверка входили ли мы?

  }, [Settings])

  const routing = () => {
    console.log(searchParams.get('55-55-55-55-5555'));

    switch (searchParams.get('55-55-55-55-5555')) {
      case "AgentID":
        return (<section className={style.body}>
          <Pages type={true} />
          <Profile type={true} />
        </section>)
      case "LiveTunnel":
        return (<section className={style.body}>
          <Pages type={false} />
          <Messenger />
        </section>)
      case "HackCred":
        return (<section className={style.body}>
          <Pages type={true} />
          <Achievements />
        </section>)
      case "HeatMap":
        return (<section className={style.body}>
          <Pages type={true} />
          <Statistics />
        </section>)
      case "TrustList":
        return (<section className={style.body}>
          <Pages type={true} />
          <Friends />
        </section>)
      default:
        return <section className={style.body}>
          <Pages type={true} /></section>
    }
  }

  return (
    SkipLogin ?
      routing() :
      <Login setSettings={(value: string) => setSettings((before) => ({ ...before, clientToken: value }))} />
  )
}

// 


export default App
