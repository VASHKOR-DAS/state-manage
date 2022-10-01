import React, { useContext } from 'react';
import { CatergoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CatergoryContext);

    return (
        <div>
            <h1>This is Shipment</h1>
            <button onClick={ () => setCategory(category + 2)} >Increment from Category</button>
        </div>
    );
};

export default Shipment;