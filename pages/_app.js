import '../styles/globals.css'
import '../styles/components.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Import Bootstrap JavaScript only on client side
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3">DiabAdvise</h5>
              <p className="text-muted">Your AI-powered diabetes management assistant. Making diabetes care simpler and more effective.</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-decoration-none text-muted">Home</a></li>
                <li><a href="/predict" className="text-decoration-none text-muted">Prediction</a></li>
                <li><a href="/about" className="text-decoration-none text-muted">About Us</a></li>
                <li><a href="/contact" className="text-decoration-none text-muted">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-5">
              <h5 className="mb-3">Stay Connected</h5>
              <div className="d-flex gap-3 mb-3">
                <a href="#" className="text-muted fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-muted fs-4"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-muted fs-4"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-muted fs-4"><i className="bi bi-linkedin"></i></a>
              </div>
              <p className="text-muted">&copy; {new Date().getFullYear()} DiabAdvise. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyApp
