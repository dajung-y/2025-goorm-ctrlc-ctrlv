import React from 'react';
import ProductList from '../components/ProductList';
import product from '../data/petProducts.json';

export default function PetListPage() {
    return (
        <ProductList products={product} />
    )
}
