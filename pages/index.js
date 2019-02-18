import products from './../data/Product'

export default () => 
    <div>
        Hello World
        {products.map(product => {
            const productName = product.fields.title
            return <h1>{productName}</h1>
        })}
    </div>