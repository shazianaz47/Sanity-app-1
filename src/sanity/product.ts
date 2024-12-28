// sanity/product.ts
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'image',
            type: 'image',
            title:'Image',
            
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'slug',
            options:{
                source:'productName',
            }   
        }
    
    ]
}