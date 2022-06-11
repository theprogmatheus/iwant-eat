import styles from './MenuItem.module.css';

const MenuItem = () => {
    return (
        <div className={styles.menuItem}>

            <div className={styles.menuItemLogoContainer}>
                <img
                    className={styles.menuItemLogo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq2gpzXwMPctn6H-Akd-HjTzcCHxy9kd-TBw&usqp=CAU"
                    alt="item-logo"
                />
            </div>

            <div className={styles.menuItemDescription}>
                <p className={styles.menuItemDescriptionTitle}>Brocado</p>
                <p className={styles.menuItemDescriptionDetails}>Pão, 2 Hambúrguer 90g, 2 Mussarela, Presunto, Bacon, Alface, Tomate, Molho tradicional.</p>
                <div className={styles.menuItemDescriptionPrice}>
                    <span className={styles.menuItemDescriptionPriceOld}>R$ 31,99</span>
                    <span className={styles.menuItemDescriptionPriceNew}>R$ 24,00</span>
                </div>
            </div>

        </div>
    )
}

export default MenuItem