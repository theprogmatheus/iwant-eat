// import styles
import styles from './MenuBrand.module.css';

// import logo
import logo from './../../assets/img/logo.png';

const MenuBrand = ({ logout }) => {

    return (
        <div className={styles.brand}>

            <button className={styles.logoutButton} onClick={() => { logout() }}>x</button>


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