import { useSearchParams } from "react-router";


import style from "./App.module.scss"
import Pages from "./components/Pages";
import { useEffect } from "react";

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


  return (
    <section className={style.body}>
      <Pages></Pages>
      {routing()}
    </section>
  )
}

export default App
