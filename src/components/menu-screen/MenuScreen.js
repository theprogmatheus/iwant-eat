// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';
import MenuItem from './MenuItem';
import MenuFooter from './MenuFooter';

// import hooks
import { useState } from 'react';

const MenuScreen = ({ logout, items }) => {

    const [activeItem, setActiveItem] = useState(null);


    return (
        <div className={`screen ${styles.menuScreen}`}>
            <MenuBrand logout={logout} />

            {
                items &&
                items.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />
                ))
            }

            <MenuFooter />

        </div>
    )
}

export default MenuScreen