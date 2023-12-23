import "./form.scss"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form"
import {useHttp} from "../../service/HTTP";

export const Form = ({context, setContext}) => {

    const {request } = useHttp()
    const [data, setData] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm()

    const onSubmitRegistration = async ({name, email, password}) => {

        request("/registration", {
            name,
            email,
            password
        })
            .then(r => {
                return r.json()
            })
            .then(d => {
                console.log(d)
            })
            .catch((error) => console.log(error))

        setValue("password", "")
        setValue("name", "")
        setValue("email", "")
    }

    const onSubmitLogin = async ({email, password}) => {

        request("/login", {
            name,
            email,
            password
        })
            .then(r => {
                return r.json()
            })
            .then(d => {
                localStorage.setItem("token", d.accessToken)
            })
            .catch(reason => console.log("error"))

        setValue("password", "")
        setValue("name", "")
        setValue("email", "")
    }

    useEffect(() => {
        if (context === "login") {
            setData(() => ({
                title: "Вход",
                button: "Войти",
                payload:
                    <div className="form__item">
                        <div className="no-account">Нет аккаунта?
                            <br/>
                            <div className={"no-account__link"}
                                 onClick={() => setContext("registration")}>Зарегистрируйся!
                            </div>
                        </div>
                    </div>,
                submit: onSubmitLogin
            }))

        } else {
            setData(() => ({
                title: "Регистрация",
                button: "Зарегистрироваться",
                payload: <div className="form__item">
                    <div className="no-account">Есть аккаунт?
                        <br/>
                        <div className={"exist-account__link"}
                             onClick={() => setContext("login")}>Войти!
                        </div>
                    </div>
                </div>,
                submit: onSubmitRegistration
            }))
        }
    }, [context]);


    const name = () => {

        if (context === "registration") {
            return (
                <div className="form__item">
                    <label className={"form__label"} htmlFor={"name"}>Имя*:</label><br/>
                    <input {...register("name", {required: true})} className={"form__input"} id={"name"} type="text"
                           placeholder={"введите имя"}/>
                    {errors.name && <div className={"form__error"}>Это поле обязательно</div>}
                </div>)
        } else {
            return null;
        }
    }

    const content = data ?
        <form className={"form"} onSubmit={handleSubmit(data.submit)}>
            <div className="form__item center">
                <h1 className={"form__title"}>{data.title}</h1>
            </div>
            {name()}
            <div className="form__item">
                <label className={"form__label"} htmlFor={"email"}>Почта*:</label><br/>
                <input {...register("email", {required: true})} className={"form__input"} id={"email"} type="text"
                       placeholder={"введите почту"}/>
                {errors.email && <div className={"form__error"}>Это поле обязательно</div>}
            </div>
            <div className="form__item">
                <label className={"form__label"} htmlFor={"password"}>Пароль*:</label><br/>
                <input {...register("password", {required: true})} className={"form__input"} id={"password"}
                       type="password" placeholder={"введите пароль"}/>
                {errors.password && <div className={"form__error"}>Это поле обязательно</div>}
            </div>
            {data.payload}
            <div className="form__item form__button center">
                <button className={"button"} type={"submit"}>{data.button}</button>
            </div>
        </form>
        : null

    return (
        <>
            {content}
        </>
    )
}