import React from 'react'
import { Link } from "react-router-dom"
import { useCart } from "../../context/cart"
import '../../pages/cart/cart.css'
import  { useState } from 'react';



const SHIPPING_CHARGES = 25

function Checkout() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        phone: '',
        address: '',
        city: '',
       
      });



    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    const round = (value, decimals) => {
        return Number(Math.round(value + "e" + decimals) + "e-" + decimals)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission, e.g., send data to a server or process payment
        console.log('Form submitted:', formData);
        alert('Successfully submitted!');
        setFormData({
            fname: '',
            lname: '',
            phone: '',
            address: '',
            city:'',
          });

      };

    return (
        <form onSubmit={handleSubmit}>

        <div className="cartWrapper">
            <div className="container">
                
                    <div className="grid my-5">
                        <div className="cartItem p-3">
                            <h2>Billing Address</h2>
                            <div className="flex py-1">
                            <label>
                                First Name
                            </label>
                            <input type="text" name="fname"  className='control'  value={formData.fname} onChange={handleChange}/>
                        </div>
                        
                        <div className="flex py-1">
                            <label>
                                Last Name
                            </label>
                            <input type="text" name="lname"  className='form-control' value={formData.lname} onChange={handleChange}/>
                        </div>
                        <div className="flex py-1">
                            <label>
                                Phone Number
                            </label>
                            <input type="text" name="phone"  className='form-control'  value={formData.phone} onChange={handleChange}/>
                        </div>
                        <div className="flex py-1">
                            <label>
                                Full Address
                            </label>
                            <textarea row="3" className='form-control' name="address" value={formData.address} onChange={handleChange}></textarea>
                        </div>
                        <div className="flex py-1">
                            <label>
                                City
                            </label>
                            <input type="text" name="city"  className='form-control' value={formData.city} onChange={handleChange}/>
                        </div>
                        <div >
                            <Link to="">
                                <button className="remove my-1" type="submit" onClick={handleSubmit}> Continue to Checkout</button>
                                </Link>
                            </div>

                            
                            
                        </div>
                        
                        
                        <div className="payment p-3">
                            <h2>Payment Summary</h2>
                            <div className="summary py-3 my-2">
                                <div className="flex py-1">
                                    <span>Subtotal:</span>
                                    <span className="price">${round(cartTotal(), 2)}</span>
                                </div>
                                <div className="flex py-1">
                                    <span>Shipping Fee:</span>
                                    <span className="price">${SHIPPING_CHARGES}</span>
                                </div>
                                <div className=" flex py-1">
                                    <span>Total:</span>
                                    <span className="price">${round(cartTotal() + SHIPPING_CHARGES, 2)}</span>
                                </div>
                              
                                
                            </div>
                            
                        </div>
                    </div>
                
            </div>
        </div>
        </form>
    )
}


export default Checkout
