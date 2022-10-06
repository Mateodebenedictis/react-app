import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    className? : string;
    title?: string;
    style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style } : Props) => {  //Esto solo se hace cuando es una sola propiedad, si son mas, lo mejor es hacer una interfaz
    
    const { product } = useContext(ProductContext);

    return (
        <span 
            className={ `${styles.productDescription} ${ className }` }
            style={ style }    
        > { title ? title : product.title } </span>
    );
}