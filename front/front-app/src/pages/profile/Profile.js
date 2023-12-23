import "./profile.scss"
import {useHttp} from "../../service/HTTP";
import {useEffect, useState} from "react";

export const Profile = () => {

    const {requestWithToken, process} = useHttp()
    const [user, setUser] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        requestWithToken("/user")
            .then(response => {
                if (response.status === 200) {
                    setVisible(true)
                }
                return response.json()
            })
            .then(data => {
                if (data.email)
                    setUser(data.name)
                console.log(data)
            })
            .catch(er => console.log(er))
    }, []);

    const render = () => {

        switch (process) {
            case "waiting":
                if (visible) {
                    return (
                        <div className="profile">
                            <div className="profile__welcome">Привет {user}</div>
                            <div className="profile__auth">Ты зарегистрирован!</div>
                        </div>
                    )
                } else {
                    return (
                        <div className="info">
                            <div className="info__label">Страница для неавторизованных пользователей</div>
                            <div className="content">
                                <div className="content__title">Вы не авторизованы</div>
                                <div className="content__text ">
                                    Для того, чтобы видеть другой контент, пожалуйста, авторизируйтесь
                                </div>
                            </div>
                        </div>
                    )
                }
            case "loading":
                return (
                    <div>Загрузка</div>
                )
        }
    }

    return (
        <>
            {render()}
        </>
    )
}