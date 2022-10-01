import React, { useContext } from 'react';
import { CatergoryContext } from '../../App';

const CategoriesDetail = () => {

    const category = useContext(CatergoryContext)

    return (
        <div>
            <h3>This is CategoriesDetail</h3>
            <h5>Context Category : {category} </h5>
        </div>
    );
};

export default CategoriesDetail;