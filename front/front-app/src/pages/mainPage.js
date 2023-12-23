import {Header} from "../components/header/Header";
import {Modal} from "../components/modal/Modal";
import {useState} from "react";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Form} from "../components/form/Form";
import {Profile} from "./profile/Profile";
import {Main} from "./main/Main";

const MainPage = () => {
    const [modalActive, setModalActive] = useState(false)
    const [context, setContext] = useState("")

    return (
        <Router>
            <div className="container">
                <Header setActive={setModalActive} setContext={setContext}/>
                <div className={"container__content"}>
                    <Routes>
                        <Route path={"/profile"} element={<Profile/>}/>
                        <Route path={"/"} element={<Main/>}/>
                    </Routes>
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Form context={context} setContext={setContext}/>
                </Modal>
            </div>
        </Router>
    );
}

export default MainPage;