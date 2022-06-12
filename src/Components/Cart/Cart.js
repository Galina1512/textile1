import { useSelector } from 'react-redux';
import {getCartItems, getTotalPrice} from '../../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (<div>
<h3 className='h3-delivery-is'> ИЗБРАННОЕ</h3>
{cartItems.map(cartItem => <CartItem cartItem = {cartItem}/>)}
<h3> ИТОГО: {totalPrice} руб.</h3>
</div>
    )
}
export default Cart;