import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';




export const ProductButtons = () => {

    const {increaseBy, counter} = useContext(ProductContext);

    return (

        <div className={ styles.buttonsContainer }>

            <ProductMinusButton increaseBy={ increaseBy }/>

            <ProductLabelButton counter={ counter }/>

            <ProductAddButton increaseBy={ increaseBy }/>

        </div>
    ); 
}

const ProductMinusButton = ( { increaseBy } : { increaseBy : ( value: number ) => void } ) => {

    return (

        <button 
            className={ styles.buttonMinus }
            onClick={ () => increaseBy(-1) }    
        > - </button>
    );
}

const ProductAddButton = ( { increaseBy } : { increaseBy : ( value: number ) => void } ) => {

    return (

        <button 
            className={ styles.buttonAdd }
            onClick={ () => increaseBy(+1) }    
        > + </button>
    );
}

const ProductLabelButton = ( { counter } : { counter : number } ) => {

    return (
        <div className={ styles.countLabel}> { counter } </div>
    );
}