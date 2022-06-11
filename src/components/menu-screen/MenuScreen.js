// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';

const MenuScreen = () => {

    return (
        <div className={`screen ${styles.menuScreen}`}>            
            <MenuBrand />

            <div className="menu-screen-menu">
                MenuScreen
                Posso adicionar o que eu quiser aqui...
            </div>
        </div>
    )
}

export default MenuScreen