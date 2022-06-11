import styles from './MenuItem.module.css';

const MenuItem = ({ image, title, details, price, oldPrice }) => {
    return (
        <div className={styles.menuItem}>            
            <div className={styles.menuItemLogoContainer}>
                <img
                    className={styles.menuItemLogo}
                    src={image}
                    alt={title}
                />
            </div>
            <div className={styles.menuItemDescription}>
                <p className={styles.menuItemDescriptionTitle}>{title}</p>
                <p className={styles.menuItemDescriptionDetails}>{details}</p>
                <div className={styles.menuItemDescriptionPrice}>
                    {oldPrice && <span className={styles.menuItemDescriptionPriceOld}>
                        R$ {oldPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>}
                    <span className={oldPrice && styles.menuItemDescriptionPriceNew}>
                        R$ {price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuItem