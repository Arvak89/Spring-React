import "./modal.scss"

export const Modal = ({active, setActive, children}) => {

    return (
        <div onClick={() => setActive(false)} className={active ? "modal modal_active" : "modal"}>
            <div onClick={(event) => event.stopPropagation()} className="modal__window">
                <img src="../../../public/close.png" onClick={() => setActive(false)} className="modal__close-button close-button" alt="close"/>
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>

    )
}