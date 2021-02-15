import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x=> x._id === props.match.params.id);
    return <div>
        <div className="back-to-result">
            <Link to="/">Atrás</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.score} Stars
                    </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Descripção:
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Preço: <b>R${product.price}</b>
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qtde: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </li>
                    <li>
                        <button className="button">Comprar</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default ProductScreen;