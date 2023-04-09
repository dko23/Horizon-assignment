export function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#">Golf GH</a>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <img src="https://t3.ftcdn.net/jpg/04/12/35/90/360_F_412359044_lE3vkhM8aSnGb7Va5bGwiZ6n4OasmXCN.jpg" className="golf rounded-cirlce"/>
                    </div>


                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}