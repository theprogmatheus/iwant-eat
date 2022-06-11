// import styles
import styles from './MenuScreen.module.css';

// import components
import MenuBrand from './MenuBrand';
import MenuItem from './MenuItem';

const MenuScreen = ({ items }) => {

    return (
        <div className={`screen ${styles.menuScreen}`}>
            <MenuBrand />

            {
                items.map((item, index) => (
                    <MenuItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        details={item.details}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    />
                ))
            }

        </div>
    )
}

export default MenuScreen