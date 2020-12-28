import React from 'react';

const Phones = ({phones}) => {
    const phoneList = phones.map(phone => {
        return(
            <div className='phone' key={phone.id}>
                <div>Brand: {phone.brand}</div>
                <div>Model: {phone.model}</div>
                <div>Price: {phone.price}</div>
            </div>
        )
    });
    return(
        <div>{phoneList}</div>
    )
}

export default Phones;
