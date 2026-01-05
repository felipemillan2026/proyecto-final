import React, { Component } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ContactForm from './components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'Filtro de Aceite',
          code: 'CHV-FOA-001',
          category: 'Motor',
          price: 12990,
          description: 'Filtro de aceite original Chevrolet',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Filtro+Aceite'
        },
        {
          id: 2,
          name: 'Pastillas de Freno',
          code: 'CHV-PFR-002',
          category: 'Frenos',
          price: 45990,
          description: 'Pastillas de freno delanteras',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Pastillas+Freno'
        },
        {
          id: 3,
          name: 'Amortiguador Delantero',
          code: 'CHV-AMD-003',
          category: 'Suspensión',
          price: 89990,
          description: 'Amortiguador delantero derecho',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Amortiguador'
        },
        {
          id: 4,
          name: 'Batería 12V',
          code: 'CHV-BAT-004',
          category: 'Eléctrico',
          price: 129990,
          description: 'Batería 12V 60Ah',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Bateria'
        },
        {
          id: 5,
          name: 'Bujías (Set 4 und)',
          code: 'CHV-BUJ-005',
          category: 'Motor',
          price: 35990,
          description: 'Set de 4 bujías de platino',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Bujias'
        },
        {
          id: 6,
          name: 'Correa de Distribución',
          code: 'CHV-CDT-006',
          category: 'Motor',
          price: 65990,
          description: 'Correa de distribución completa',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Correa'
        },
        {
          id: 7,
          name: 'Discos de Freno (Par)',
          code: 'CHV-DFR-007',
          category: 'Frenos',
          price: 99990,
          description: 'Par de discos de freno ventilados',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Discos+Freno'
        },
        {
          id: 8,
          name: 'Termostato Motor',
          code: 'CHV-TRM-008',
          category: 'Refrigeración',
          price: 25990,
          description: 'Termostato original con empaque',
          image: 'https://via.placeholder.com/300x200/FDB913/000000?text=Termostato'
        }
      ],
      cart: []
    };
  }

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const existingItem = prevState.cart.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          cart: prevState.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          cart: [...prevState.cart, { ...product, quantity: 1 }]
        };
      }
    });
  }

  handleRemoveItem = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter(item => item.id !== productId)
    }));
  }

  render() {
    return (
      <div className="App">
        {/* Header */}
        <nav className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <span className="navbar-brand mb-0 h1">
              <span className="text-warning">🚗</span> Repuestos Chevrolet
            </span>
            <span className="text-white">
              <small>Calidad y Garantía Original</small>
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-warning text-dark py-5">
          <div className="container text-center">
            <h1 className="display-4 fw-bold">Repuestos Originales Chevrolet</h1>
            <p className="lead">Los mejores repuestos para tu vehículo con garantía de fábrica</p>
          </div>
        </div>

        {/* Carrito */}
        <Cart 
          cartItems={this.state.cart}
          onRemoveItem={this.handleRemoveItem}
        />

        {/* Productos */}
        <ProductList 
          products={this.state.products}
          onAddToCart={this.handleAddToCart}
        />

        <hr className="my-5" />

        {/* Formulario de Contacto */}
        <ContactForm />

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <div className="container">
            <p className="mb-1">🚗 Repuestos Chevrolet - Calidad Original</p>
            <p className="mb-0 text-muted small">
              Examen Final - Programación de Componentes
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
