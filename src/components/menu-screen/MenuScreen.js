// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';
import MenuItem from './MenuItem';
import MenuFooter from './MenuFooter';

const MenuScreen = ({ user, logout, items }) => {

    return (
        <div className={`screen ${styles.menuScreen}`}>
            <MenuBrand logout={logout} />

            {
                items &&
                items.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                    />
                ))
            }

            <MenuFooter />

        </div>
    )
}

export default MenuScreen