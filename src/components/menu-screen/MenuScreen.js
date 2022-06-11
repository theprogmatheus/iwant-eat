// import styles
import './MenuScreen.css';

import logo from './../../assets/img/logo.png';

const MenuScreen = () => {

    const renderLoop = (jsx, amount) => {

        let loopArray = [];

        for (let i = 0; i < amount; i++) {
            loopArray.push(jsx)
        }

        return loopArray;
    }
    return (
        <div className='screen menu-screen'>

            <div className="menu-screen-brand">
                <img
                    className="menu-screen-brand-background"
                    src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg?w=2000"
                    alt="brand-background"
                />

                <img
                    className="menu-screen-brand-logo"
                    src={logo}
                    alt="brand-logo"
                />
            </div>


            <div className="menu-screen-menu">
                MenuScreen
            </div>



        </div>
    )
}

export default MenuScreen