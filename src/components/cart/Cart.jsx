import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveToCart}) => {
  return (
    <div>
        <p style={{color:'orange'}}>Cart: {cart.length}</p>
        <div style={{display: 'flex', justifyContent: 'center', gap:'10px', margin: '20px'}} >
            {
                cart.map(bottle => <div className='cart-card' key={bottle.id}>
                    <img src={bottle.img}/>
                    <span onClick={() => handleRemoveToCart(bottle.id)} className='delete-icon'>x</span>
                </div>)
            }
        </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveToCart: PropTypes.func.isRequired
}
export default Cart