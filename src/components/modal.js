export const CustomModal = ({closeModal,children}) => {

    return (
    <div className={"modal-container"}>
        <div className="overlay" onClick={closeModal}>

        </div>
        <div className="modal-content">
            <div className="header">
                <a href="#" onClick={closeModal}>
                    x
                </a>

            </div>
            <div className="modal-body">
                {children}
            </div>

        </div>
    </div>
    )


}

