import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { db } from '../firebase/firebaseConfig';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      telefono: '',
      vehiculo: '',
      mensaje: '',
      loading: false
    };

    this.validator = new SimpleReactValidator({
      messages: {
        required: 'Este campo es obligatorio',
        email: 'Ingrese un email válido',
        min: 'Mínimo :min caracteres'
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      this.setState({ loading: true });

      try {
        await db.collection('consultas').add({
          nombre: this.state.nombre,
          email: this.state.email,
          telefono: this.state.telefono,
          vehiculo: this.state.vehiculo,
          mensaje: this.state.mensaje,
          fecha: new Date()
        });

        alert('✅ Consulta enviada exitosamente! Nos contactaremos pronto.');
        
        this.setState({
          nombre: '',
          email: '',
          telefono: '',
          vehiculo: '',
          mensaje: '',
          loading: false
        });
        
        this.validator.hideMessages();
      } catch (error) {
        console.error('Error:', error);
        alert('❌ Error al enviar la consulta');
        this.setState({ loading: false });
      }
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">📞 Solicitar Cotización</h3>
              </div>
              <div className="card-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Nombre Completo *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={this.state.nombre}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor('nombre')}
                      />
                      <div className="text-danger">
                        {this.validator.message('nombre', this.state.nombre, 'required|min:3')}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor('email')}
                      />
                      <div className="text-danger">
                        {this.validator.message('email', this.state.email, 'required|email')}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Teléfono *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        value={this.state.telefono}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor('telefono')}
                        placeholder="+56 9 XXXX XXXX"
                      />
                      <div className="text-danger">
                        {this.validator.message('telefono', this.state.telefono, 'required|min:9')}
                      </div>
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Modelo de Vehículo *</label>
                      <select
                        className="form-select"
                        name="vehiculo"
                        value={this.state.vehiculo}
                        onChange={this.handleChange}
                        onBlur={() => this.validator.showMessageFor('vehiculo')}
                      >
                        <option value="">Seleccione...</option>
                        <option value="Spark">Chevrolet Spark</option>
                        <option value="Onix">Chevrolet Onix</option>
                        <option value="Tracker">Chevrolet Tracker</option>
                        <option value="Cruze">Chevrolet Cruze</option>
                        <option value="Captiva">Chevrolet Captiva</option>
                        <option value="Silverado">Chevrolet Silverado</option>
                        <option value="Otros">Otros</option>
                      </select>
                      <div className="text-danger">
                        {this.validator.message('vehiculo', this.state.vehiculo, 'required')}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mensaje / Repuestos Requeridos *</label>
                    <textarea
                      className="form-control"
                      name="mensaje"
                      rows="4"
                      value={this.state.mensaje}
                      onChange={this.handleChange}
                      onBlur={() => this.validator.showMessageFor('mensaje')}
                      placeholder="Describa los repuestos que necesita..."
                    ></textarea>
                    <div className="text-danger">
                      {this.validator.message('mensaje', this.state.mensaje, 'required|min:10')}
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-success w-100 btn-lg"
                    disabled={loading}
                  >
                    {loading ? 'Enviando...' : '📧 Enviar Consulta'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;