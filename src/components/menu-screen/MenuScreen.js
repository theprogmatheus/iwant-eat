// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';
import MenuItem from './MenuItem';

const MenuScreen = () => {

    return (
        <div className={`screen ${styles.menuScreen}`}>
            <MenuBrand />

            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />

        </div>
    )
}

export default MenuScreen