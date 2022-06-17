// import styles
import styles from './MenuItem.module.css';

// import hooks
import { useState, useRef } from 'react';

const MenuItem = ({ user, image, title, details, price, oldPrice }) => {

    const [amount, setAmount] = useState(1);
    const detailsElement = useRef(null);
    const [userData, setUserData] = user;

    const handleAmount = (value) => {
        if (value < 1)
            value = 1;
        else if (value > 99)
            value = 99;

        setAmount(value)
    }

    const handleAddToCart = () => {


        setUserData({
            ...userData,
            "cart": [
                {
                    "item": title,
                    "amount": amount
                }
            ]
        })


        handleAmount(0)
        console.log(userData)

    }

    const handleDetails = (event) => {
        if (detailsElement.current.style.maxHeight === '')
            detailsElement.current.style.maxHeight = '100%'
        else
            detailsElement.current.style.maxHeight = ''
    }

    return (
        <>
            <div className={styles.menuItem} onClick={handleDetails}>
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

            <div className={styles.itemDetails} ref={detailsElement}>
                <div className={styles.itemDetailsContent}>
                    <p>
                        Defina a quantidade que você vai querer, depois clique em COMPRAR
                    </p>
                </div>
                <div className={styles.itemDetailsSelectorBar}>
                    <button onClick={() => { setAmount((amount) => { handleAmount((amount - 1)) }) }}>-</button>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => { }}
                    />
                    <button onClick={() => { setAmount((amount) => { handleAmount((amount + 1)) }) }}>+</button>
                    <span>R$ {(amount * price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    <button style={{ width: "100%" }} onClick={handleAddToCart}>Comprar</button>
                </div>
            </div>
        </>
    )
}

export default MenuItem