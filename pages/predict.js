// ...existing code...

export default function Predict() {
  // ...existing code...

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Diabetes <span className="text-gradient">Prediction</span></h1>
      
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm p-4 fade-in">
            <h2 className="h4 mb-4">Enter Your Health Metrics</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* Form inputs with improved styling */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input 
                      type="number" 
                      className="form-control" 
                      id="pregnancies" 
                      placeholder="Pregnancies"
                      value={formData.pregnancies}
                      onChange={(e) => handleChange('pregnancies', e.target.value)}
                      required
                    />
                    <label htmlFor="pregnancies">Pregnancies</label>
                  </div>
                </div>
                
                {/* Add similar styling for other form inputs */}
                {/* ...existing code... */}
                
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                    {isLoading ? (
                      <><span className="spinner-border spinner-border-sm me-2" role="status"></span>Processing...</>
                    ) : (
                      'Predict Result'
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
          
          {result !== null && (
            <div className={`card mt-4 p-4 text-center fade-in ${result ? 'border-danger' : 'border-success'}`}>
              <h3 className="h4 mb-3">Prediction Result</h3>
              <div className={`result-badge ${result ? 'bg-danger' : 'bg-success'}`}>
                {result ? 'Diabetic' : 'Non-Diabetic'}
              </div>
              <p className="mt-3">
                {result 
                  ? 'Based on the provided information, you may have diabetes. Please consult with a healthcare provider.' 
                  : 'Based on the provided information, you may not have diabetes. Still, maintain a healthy lifestyle!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
