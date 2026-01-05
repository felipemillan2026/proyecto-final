import React from 'react';

const Cart = ({ cartItems, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-warning text-dark">
          <h4 className="mb-0">🛒 Carrito de Compras</h4>
        </div>
        <div className="card-body">
          {cartItems.length === 0 ? (
            <p className="text-muted text-center">El carrito está vacío</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Código</th>
                      <th>Cantidad</th>
                      <th>Precio Unit.</th>
                      <th>Subtotal</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td><small className="text-muted">{item.code}</small></td>
                        <td>
                          <span className="badge bg-secondary">{item.quantity}</span>
                        </td>
                        <td>${item.price.toFixed(2)}</td>
                        <td className="fw-bold">${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-danger"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            ❌
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-end">
                <h4>Total: <span className="text-success">${total.toFixed(2)}</span></h4>
                <button className="btn btn-success btn-lg mt-2">
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;