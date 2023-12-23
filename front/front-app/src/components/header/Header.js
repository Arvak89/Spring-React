import "./header.scss"

export const Header = ({setActive, setContext}) => {

    return (
        <div className="header">
            <a href="/">
                <div className="header__logo">
                    <img src="../../../public/img.png"
                         alt="logo"
                         className="header__image"/>
                    <span className="header__name">LOGO</span>
                </div>
            </a>
            <ul className="header__menu">
                <li><a href="/" className="header__item">Home</a></li>
                <li><a href="/profile" className="header__item">Profile</a></li>
            </ul>
            <div className="headers__buttons">
                <button onClick={() => {
                    setActive(true);
                    setContext("registration")
                }} className="header__sign-up button">Sign up
                </button>
                <button onClick={() => {
                    setActive(true)
                    setContext("login")
                }} className="header__login button">Log in
                </button>
            </div>

        </div>
    )
}