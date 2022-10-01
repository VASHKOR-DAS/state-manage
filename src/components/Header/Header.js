import React, { useContext } from 'react';
import { CatergoryContext } from '../../App';

const Header = () => {

    const [category, setCategory] = useContext(CatergoryContext);

    return (
        <div>
            <h1>This is Header : {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increase</button>
        </div>
    );
};

export default Header;