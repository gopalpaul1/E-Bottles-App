import PropTypes from 'prop-types';
import './Bottle.css'

const Bottle = ({bottle,  handleAddToCart}) => {
    const {name, img, price, seller} = bottle
    
  return (
    <div className='bottle-card'>
        <img className='img' src={img} alt="bottle-image" />
        <div>
            <h4 style={{color:'tomato'}}>{name}</h4>
            {/* <p><span className=''>price: ${price}</span> <span>{seller}</span></p> */}
            <div className='seller-card'>
                <p>price: <span style={{color:'tomato'}}>${price}</span></p>
                <p style={{color:'tomato'}}>{seller}</p>
            </div>
        </div>
        <button onClick={()=>handleAddToCart(bottle)} className='btn-card'>Purchase</button>
    </div>
  )
}

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle