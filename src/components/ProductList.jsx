import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2 className="display-5">
          <span className="text-warning">⚙️</span> Repuestos Chevrolet
        </h2>
        <p className="text-muted">Encuentra los mejores repuestos originales para tu vehículo</p>
      </div>
      <div className="row">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;