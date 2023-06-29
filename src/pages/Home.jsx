function Home(){
    return(
        <div className="container my-5">
            {/* Hero Section */}
            <section className="row">
                <div className="col-md-7 my-auto" data-aos="fade-right" >
                    <h1 className="fw-bold">SnowTech</h1>
                    <p>Your one-stop shop for computer parts, repairs,<br/> and expert support. Build, upgrade, and fix with confidence.</p>
                </div>
                <div className="col-md-5" data-aos="fade-left">
                    <img src="#" className="img-fluid" />
                </div>
            </section>
            {/* Services Section */}
            <section className="row p-4 mt-4">
                <div className="col-md-12">
                    <h4 className="fw-bold text-center" data-aos="fade-up">Featured Products</h4>
                    <div className="row mt-5">
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Graphics Cards
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Processor
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Motherboard
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Mouse
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Keyboard
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Monitor
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Memory
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Laptops
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3 fw-bold" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body text-center">
                                    Power Supply
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;