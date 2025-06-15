import { useCallback, useEffect, useRef, useState } from "react";
import style from "./Login.module.scss"
import axios from "axios";

const isValidPass = (pass: string): boolean => {
    return pass.length > 4;
};

const isValidLogin = (login: string): boolean => {
    return login.length > 5;
};

interface props {
    setSettings: (value: string) => void
}

function Login({ setSettings }: props) {
    const Form = useRef<HTMLFormElement>(null)

    const [Login, setLogin] = useState<string>("")
    const [Email, setEmail] = useState<string>("zahargysev02@gmail.com")
    const [Pass, setPass] = useState<string>("")
    const [PassRep, setPassRep] = useState<string>("")

    const [ErrorLoading, setErrorLoading] = useState<number>(-1)

    const [LoginType, setLoginType] = useState<boolean>(true)

    const login = useCallback(
        (event: SubmitEvent) => {
            event.preventDefault()

            if (LoginType && Pass === PassRep && isValidPass(Pass) && isValidPass(PassRep) && isValidLogin(Login)) {
                // регистрация
                console.log("LOAD");
                axios.post("https://hubabuba.space/api/createAccount", { login: Login, pass: Pass, mail: Email })
                    .then(res => {
                        setSettings(res.data.clientToken)
                    })
                    .catch(err => {

                        const { type } = err.response.data;
                        setErrorLoading(type)
                        setTimeout(() => {
                            setErrorLoading(-1)
                        }, 3000);

                    });

            } else if (isValidPass(Pass) && isValidLogin(Login) && !LoginType) {
                axios.post("https://hubabuba.space/api/loginAccount", { login: Login, pass: Pass })
                    .then(res => setSettings(res.data.clientToken))
                    .catch(err => {
                        console.log(err.response)
                        const { type } = err.response.data;
                        setErrorLoading(type)
                        setTimeout(() => {
                            setErrorLoading(-1)
                        }, 3000);
                    });;
            }
        },
        [Email, Login, LoginType, Pass, PassRep, setSettings],
    )


    useEffect(() => {
        Form.current?.addEventListener("submit", login)

        return () => {
            Form.current?.removeEventListener("submit", login)
        }
    }, [login])



    return (
        <section className={style.body}>
            <form ref={Form} className={style.reg}>

                {LoginType ? <> <p className={style.title}>Mail</p>
                    <input className={ErrorLoading == 0 ? style.inpError : style.inp} type="email" value={Email} onChange={(event) => setEmail(event.target.value)} /></> : null}

                <p className={style.title}>Login</p>
                <input className={ErrorLoading == 0 ? style.inpError : ErrorLoading == 1 ? style.inpError : style.inp} type="text" value={Login} onChange={(event) => setLogin(event.target.value)} />


                <p className={style.title}>Password</p>
                <input className={(ErrorLoading != 0 && ErrorLoading != -1) ? style.inpError : style.inp} type="password" value={Pass} onChange={(event) => setPass(event.target.value)} />

                {LoginType ? <> <p className={style.title}>Password Replay</p>
                    <input className={style.inp} type="password" value={PassRep} onChange={(event) => setPassRep(event.target.value)} /></> : null}

                <p className={style.desc}>By clicking next, you agree to our <a href="https://t.me/Multiverse_Dark_Lands" target="_blank">terms and conditions</a> of use for VBAL & KGE products
                </p>

                <div>
                    <button className={style.button} type="submit">next</button>
                    <button className={style.button} type="button" onClick={() => setLoginType((before) => !before)}>{LoginType ? "Sign in" : "Sign up"}</button>
                </div>
            </form>
        </section>
    );
}

export default Login;