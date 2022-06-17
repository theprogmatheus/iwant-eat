// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';
import MenuItem from './MenuItem';

const MenuScreen = ({ user, logout, items }) => {

    return (
        <div className={`screen ${styles.menuScreen}`}>
            <MenuBrand logout={logout} />

            {
                items &&
                items.map((item, index) => (
                    <MenuItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        details={item.details}
                        price={item.price}
                        oldPrice={item.oldPrice}
                        user={user}
                    />
                ))
            }

        </div>
    )
}

export default MenuScreen