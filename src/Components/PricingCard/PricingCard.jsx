import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing)
    const {name,price,description, features} = pricing
    return (
        <div className='flex flex-col border bg-amber-400 rounded-2xl p-4'>
            <div>
                <h1 className='text-4xl'>{name}</h1>
                <h4 className='text-2xl'>{price}</h4>
            </div>
            <div className='flex-1 bg-amber-300 p-4 rounded-2xl mt-10'>
                <p>{description}</p>
                    {
                    features.map((feature,index)=> <PricingFeature key={index} feature={feature}></PricingFeature>)
                    }
            </div>
            <button className="btn w-full mt-4">Wide</button> 
        </div>
            
            

    );
};

export default PricingCard;