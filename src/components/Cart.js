// import styles
import styles from './Cart.module.css';

// import contexts
import { UserContext } from './../contexts/UserContext';

// import hooks
import { useContext } from 'react';

const Cart = () => {

    // eslint-disable-next-line
    const { user, setUser } = useContext(UserContext);


    return (
        <div className={styles.cart}>
            Cart
        </div>
    )
}

export default Cart