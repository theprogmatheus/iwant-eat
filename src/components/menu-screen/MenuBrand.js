import styles from './MenuBrand.module.css';


import logo from './../../assets/img/logo.png';

const MenuBrand = () => {
    return (
        <div className={styles.brand}>
            <img
                className={styles.brandBackground}
                src="https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148692632.jpg?w=2000"
                alt="brand-background"
            />

            <img
                className={styles.brandLogo}
                src={logo}
                alt="brand-logo"
            />
        </div>
    )
}

export default MenuBrand