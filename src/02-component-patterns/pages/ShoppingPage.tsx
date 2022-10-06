import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}


export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}

            >

                <ProductCard 
                    product={ product }
                    className="bg-dark custom-card"
                >

                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-white text-bold"/>
                    <ProductCard.Buttons className="custom-div-buttons custom-buttons"/>
                    
                </ProductCard>


                <ProductCard 
                    product={product}
                    className="bg-dark custom-card"
                >

                    <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className="custom-div-buttons custom-buttons"/>

                </ProductCard>

                <ProductCard 
                    product={product}
                    style={ {backgroundColor: 'yellow'} }
                    className="custom-card"
                >

                    <ProductImage  className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}/>
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-div-buttons"/>

                </ProductCard>

            </div>
        </div>
    )
}


export default ShoppingPage