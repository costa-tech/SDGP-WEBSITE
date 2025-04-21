// ...existing code...

export default function Home() {
  return (
    <>
      <Head>
        <title>DiabAdvise - Your Diabetes Management Assistant</title>
        <meta name="description" content="AI-powered diabetes management assistant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center min-vh-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in" style={{animationDelay: '0.2s'}}>
              <h1 className="display-4 fw-bold mb-4">Manage Diabetes <span className="text-gradient">Smarter</span> with AI</h1>
              <p className="lead mb-4">DiabAdvise uses advanced artificial intelligence to help you track, analyze, and manage your diabetes effectively.</p>
              <div className="d-flex gap-3">
                <Link href="/predict" className="btn btn-primary btn-lg">
                  Try Prediction
                </Link>
                <Link href="/about" className="btn btn-outline-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center fade-in" style={{animationDelay: '0.4s'}}>
              <img src="/hero-image.png" alt="Diabetes Management" className="img-fluid rounded-3" style={{maxWidth: '90%'}} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose DiabAdvise?</h2>
            <p className="text-muted">Advanced features designed to make diabetes management effortless</p>
          </div>
          
          <div className="row g-4">
            {/* Feature cards */}
            {[
              {
                title: "AI Prediction",
                description: "Get accurate predictions about your diabetic condition based on your health metrics",
                icon: "graph-up-arrow"
              },
              {
                title: "Meal Planning",
                description: "AI-generated meal suggestions based on your glucose levels and dietary preferences",
                icon: "calendar-check"
              },
              {
                title: "Trend Analysis",
                description: "Visualize your health trends with interactive charts and meaningful insights",
                icon: "bar-chart-line"
              }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 text-center p-4 fade-in" style={{animationDelay: `${0.2 + index * 0.1}s`}}>
                  <div className="feature-icon-wrapper mb-3">
                    <i className={`bi bi-${feature.icon} fs-1 text-primary`}></i>
                  </div>
                  <h3 className="h4 mb-3">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ...existing code... */}
    </>
  )
}
