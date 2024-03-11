
import{ useEffect, useState } from 'react';
import Bottle from '../bottle/Bottle';
import './Bottles.css'
import Cart from '../cart/Cart';
import { addToCartLocalStorage, getStoredCart, removeFromLocalStorage } from '../../utilities/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if(bottles.length) {
            // console.log('add ato cart', bottles.length)
            const storedCart = getStoredCart();
            // console.log(storedCart)

            const saveCart = []
            for(let id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            // console.log(saveCart)
            // setBottles(saveCart)
            setCart(saveCart)
        }
    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToCartLocalStorage(bottle.id);
    }

    const handleRemoveToCart = id => {
        const remaining = cart.filter(bottle => bottle.id !== id);
        setCart(remaining);
        removeFromLocalStorage(id);
    }
   return (
    <div>
        <h2 style={{color:'tomato'}}>Addidas Bottles {bottles.length}</h2>
        <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
        <div className='bottles-card'>
            {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
        </div>
    </div>
  )
}


export default Bottles