import React from 'react'

const Breadcrumb = () => {
  return (
    <div>
        {/* <!-- Breadcrumb Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <a className="breadcrumb-item text-dark" href="/">Home</a>
                    <span className="breadcrumb-item active">Contact</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}
    </div>
  )
}

export default Breadcrumb