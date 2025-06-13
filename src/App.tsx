import { useSearchParams } from "react-router";


import style from "./App.module.scss"
import Pages from "./components/Pages";
import Login from "./components/Login";
import { useEffect } from "react";

interface KeySettingsItf {
  OSRequiredApp: boolean,
  language: "ru" | "eu",
  clientToken: string
}
const KEY_SETTINGS = "643f11b661aa625c"

function App() {
  const [searchParams] = useSearchParams();
  const routing = () => {
    switch (searchParams.get('55-55-55-55-5555')) {
      case "Agent_ID":
        return (<>1</>)
      default:
        return <>5</>
    }
  }

  const test: boolean = false

  useEffect(() => {
 


  }, [])

  localStorage.setItem(KEY_SETTINGS, JSON.stringify({
    OSRequiredApp: true,
    language: "eu",
    clientToken: ""
  }))

  return (
    <section className={style.body}>
      {!test ? <Login /> :
        <>
          <Pages />
          {routing()}
        </>}

    </section>
  )
}

export default App
