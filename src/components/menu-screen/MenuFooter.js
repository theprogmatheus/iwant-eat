// import styles
import styles from './MenuFooter.module.css';

// import contexts
import { UserContext } from './../../contexts/UserContext';

// import hooks
import { useContext } from 'react';

const MenuFooter = () => {

    const { user } = useContext(UserContext);

    const handleTotal = () => {

        let total = 0;

        if (user.cart) {
            user.cart.map((item) => {
                total += (item.amount * item.item.price)
                return null;
            })
        }

        return total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className={styles.footer}>
            <span>
                R$ {handleTotal()}
            </span>
            <button>
                Ver carrinho {user.cart && `(${user.cart.length})`}
            </button>
        </div>
    )

}

export default MenuFooter