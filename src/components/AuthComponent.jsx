import React, { Component } from 'react';
import { auth } from '../firebase/firebaseConfig';

class AuthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: null,
      error: ''
    };
  }

  componentDidMount() {
    // Escuchar cambios en el estado de autenticación
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ 
          user: user,
          error: '' 
        });
        console.log('✅ Usuario autenticado:', user.email);
      } else {
        this.setState({ user: null });
        console.log('ℹ️ No hay usuario autenticado');
      }
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      alert('✅ Usuario registrado exitosamente!');
      console.log('Usuario registrado:', userCredential.user);
      
      // Limpiar formulario
      this.setState({
        email: '',
        password: '',
        error: ''
      });
    } catch (error) {
      console.error('Error al registrar:', error);
      let errorMessage = 'Error al registrar usuario';
      
      switch(error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este email ya está registrado';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email inválido';
          break;
        case 'auth/weak-password':
          errorMessage = 'La contraseña debe tener al menos 6 caracteres';
          break;
        default:
          errorMessage = error.message;
      }
      
      this.setState({ error: errorMessage });
    }
  }

  handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      alert('✅ Inicio de sesión exitoso!');
      console.log('Usuario logueado:', userCredential.user);
      
      // Limpiar formulario
      this.setState({
        email: '',
        password: '',
        error: ''
      });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      let errorMessage = 'Error al iniciar sesión';
      
      switch(error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Usuario no encontrado';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Email inválido';
          break;
        default:
          errorMessage = error.message;
      }
      
      this.setState({ error: errorMessage });
    }
  }

  handleLogout = async () => {
    try {
      await auth.signOut();
      alert('✅ Sesión cerrada exitosamente!');
      console.log('Usuario deslogueado');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('❌ Error al cerrar sesión');
    }
  }

  render() {
    const { email, password, user, error } = this.state;

    return (
      <div className="container my-4">
        <div className="card shadow">
          <div className="card-header bg-info text-white">
            <h4 className="mb-0">🔐 Autenticación Firebase</h4>
          </div>
          <div className="card-body">
            {!user ? (
              // Formulario de Login/Register
              <div>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={this.handleChange}
                      placeholder="Mínimo 6 caracteres"
                      required
                    />
                  </div>

                  {error && (
                    <div className="alert alert-danger" role="alert">
                      {error}
                    </div>
                  )}

                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button 
                      type="button"
                      className="btn btn-primary"
                      onClick={this.handleRegister}
                    >
                      Registrar
                    </button>
                    <button 
                      type="button"
                      className="btn btn-success"
                      onClick={this.handleLogin}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // Usuario autenticado
              <div>
                <div className="alert alert-success" role="alert">
                  <h5 className="alert-heading">✅ Sesión Activa</h5>
                  <p className="mb-2">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="mb-0">
                    <strong>ID:</strong> <small>{user.uid}</small>
                  </p>
                </div>
                <button 
                  className="btn btn-danger"
                  onClick={this.handleLogout}
                >
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthComponent;
