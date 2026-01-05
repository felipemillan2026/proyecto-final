import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  // Función para formatear precio en pesos chilenos
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <div className="mb-2">
            <span className="badge bg-primary">{product.category}</span>
          </div>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted small">{product.description}</p>
          <p className="card-text"><strong>Código: </strong>{product.code}</p>
          <p className="card-text text-success fs-5"><strong>{formatPrice(product.price)}</strong></p>
          <button 
            className="btn btn-warning mt-auto w-100"
            onClick={() => onAddToCart(product)}
          >
            🛒 Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
