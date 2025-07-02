import React from 'react';
import ProductList from '../components/ProductList';
import product from '../data/fashionProducts.json';

export default function FashionListPage() {
    console.log("product:", product);
    return (
        <ProductList products={product} />
    )
}
