export function Slider() {
  return (
    <>
      <div className="container slider">
        <div className="row">
          <div className="col-md">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1661774316407-56209baefa8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://images.unsplash.com/photo-1611374243147-44a702c2d44c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Third slide"/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}