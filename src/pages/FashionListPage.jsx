import React from 'react';
import ProductList from '../components/ProductList';
// import product from '../data/fashionProducts.json';
import product from '../data/productDetail.json'

// 데이터 구조분해할당
const simpleProduct = product.map(item => ({

    id: item.id,
    title: item.title,
    price: item.price,
    rating: item.rating,
    reviewCount: item.reviewCount,
    image: item.image,
}));
 
export default function FashionListPage() {
    console.log("product:", product);
    return (
        <ProductList products={simpleProduct} />
    )
}
