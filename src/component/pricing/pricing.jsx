import React from 'react';
import PricingItem from '../pricing-item/pricing-item';
import './pricing.styles.css';

class Pricing extends React.Component{
    constructor(){
        super()
        
        this.state = {
            items: [
                {
                    price: 0.00,
                    id: 1
                   
                },
                {
                    price: 3.99,
                    color: 'blue',
                    id:2
                },
                {
                    price: 7.69,
                    id:3
                },
            ]
            
        }
    }

    render(){
        const { items } = this.state;
        return(
            <div className = 'pricing-div' >
                {
                items.map(({id, ...OtherProps}) => (
                    <PricingItem key = { id } {...OtherProps} />
                ))
                }
            </div>
        )
    }
};

export default Pricing