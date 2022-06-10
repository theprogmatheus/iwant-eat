import { useState, useEffect } from "react";


const useLoadScreen = (loading, loadingMessage = "Wait a moment...", loadingGIF = "url('https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif')") => {

    const loadScreenStyle = {

        loadScreen: {
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, .85)"
        },

        loadScreenInfoCard: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "fixed",
            width: "100%",
            top: "50%",
            transform: "translateY(-50%)"
        },

        loadScreenImage: {
            background: loadingGIF,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            width: "50px",
            height: "50px",
            marginBottom: "20px"
        },

        loadScreenMessage: {
            textAlign: "center",
            color: "#FFF",
            fontSize: "1.3em"
        }
    }

    const loadScreenJSX = (
        <div style={loadScreenStyle.loadScreen}>
            <div style={loadScreenStyle.loadScreenInfoCard} >
                <div style={loadScreenStyle.loadScreenImage} />
                {loadingMessage && <span style={loadScreenStyle.loadScreenMessage}>{loadingMessage}</span>}
            </div>
        </div>
    )

    const [loadScreen, setLoadScreen] = useState(loadScreenJSX);



    useEffect(() => {
        setLoadScreen(loading ? loadScreenJSX : <></>)


        // eslint-disable-next-line
    }, [loading])


    return loadScreen
}

export default useLoadScreen;