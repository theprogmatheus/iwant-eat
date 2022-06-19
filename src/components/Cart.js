// import styles
import styles from './Cart.module.css';

// import contexts
import { UserContext } from './../contexts/UserContext';

// import hooks
import { useContext } from 'react';

const Cart = () => {

    // eslint-disable-next-line
    const { user, setUser } = useContext(UserContext);
    let total = 0;

    const handleReturn = () => {
        window.location.href = "/menu"
    }
    const handleCheckout = () => {
        console.log("Checkout")
    }

    const handleRemoveFromCart = (item) => {
        setUser({
            ...user,
            "cart": user.cart.filter((currentItem) => currentItem !== item)
        })
    }


    const handleClearCart = () => {
        setUser({
            ...user,
            "cart": null
        })
        handleReturn()
    }


    return (
        <div className={styles.cart}>

            {
                user.cart && user.cart.map((item, index) => {
                    total += (item.amount * item.item.price);
                    return (
                        <div key={index}>
                            <button onClick={() => { handleRemoveFromCart(item) }}>Remover</button>
                            <div>
                                <p>Nome: {item.item.title}</p>
                                <p>Descrição: {item.item.details}</p>
                                <p>Valor: {item.item.price}</p>
                                <p>Quantidade {item.amount}</p>
                                <p>Sub-Total {item.item.price * item.amount}</p>
                                {item.note && <p>Observação: {item.note}</p>}
                            </div>
                            <br />
                        </div>
                    )
                })
            }



            <p>Total: {total}</p>


            <button onClick={handleReturn}>Continuar comprando</button>
            <button onClick={handleCheckout}>Concluir pedido</button>
            <button onClick={handleClearCart}>Esvaziar carrinho</button>
        </div>
    )
}

export default Cart