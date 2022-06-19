// import styles
import styles from './MenuItem.module.css';

// import hooks
import { useState, useContext } from 'react';

// import contexts
import { UserContext } from './../../contexts/UserContext';

const MenuItem = ({ item, activeItem, setActiveItem }) => {

    const [amount, setAmount] = useState(1);
    const [note, setNote] = useState();
    const { user, setUser } = useContext(UserContext);

    const handleAmount = (value) => {
        if (value < 1)
            value = 1;
        else if (value > 99)
            value = 99;

        setAmount(value)
    }

    const handleAddToCart = () => {

        const itemToAdd = { item, amount, note };

        setUser({
            ...user,
            "cart": user.cart ? [...user.cart, itemToAdd] : [itemToAdd]
        })

        if ((!user.cart) || user.cart.length <= 0) {
            window.location.href = "/cart";
        }
        else {
            handleAmount(1)
            setActiveItem(null)
        }
    }

    const handleDetails = () => {

        if (activeItem === item)
            setActiveItem(null)
        else
            setActiveItem(item)
    }

    return (
        <>
            <div className={styles.menuItem} onClick={handleDetails}>
                <div className={styles.menuItemLogoContainer}>
                    <img
                        className={styles.menuItemLogo}
                        src={item.image}
                        alt={item.title}
                    />
                </div>
                <div className={styles.menuItemDescription}>
                    <p className={styles.menuItemDescriptionTitle}>#{item.id} {item.title}</p>
                    <p className={styles.menuItemDescriptionDetails}>{item.details}</p>
                    <div className={styles.menuItemDescriptionPrice}>
                        {item.oldPrice && <span className={styles.menuItemDescriptionPriceOld}>
                            R$ {item.oldPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>}
                        <span className={item.oldPrice && styles.menuItemDescriptionPriceNew}>
                            R$ {item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.itemDetails} style={{ maxHeight: (activeItem === item) && '100%' }}>
                <div className={styles.itemDetailsContent}>
                    <p>
                        Defina a quantidade que você vai querer, escreva alguma observação, se houver, depois clique em COMPRAR
                    </p>
                    <label>
                        <span>Observação</span>
                        <textarea
                            placeholder="EX: (Retirar molho, deixar na portaria)"
                            value={note}
                            onChange={(e) => { setNote(e.target.value) }}
                        />
                    </label>
                </div>
                <div className={styles.itemDetailsSelectorBar}>
                    <button onClick={() => { setAmount((amount) => { handleAmount((amount - 1)) }) }}>-</button>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => { }}
                    />
                    <button onClick={() => { setAmount((amount) => { handleAmount((amount + 1)) }) }}>+</button>
                    <span>R$ {(amount * item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    <button style={{ width: "100%" }} onClick={handleAddToCart}>Adicionar</button>
                </div>
            </div>
        </>
    )
}

export default MenuItem