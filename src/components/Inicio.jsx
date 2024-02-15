import '../inicio.css'
import { Link } from 'react-router-dom';

function Inicio(){
    return (
        <>
            <div className="container">
                <div className="series">
                    <div className="media">
                        <img src="../src/assets/placeholder.png" alt="" />
                        <div className="overlay">
                            <p>Series</p>
                        </div>
                    </div>
                    <Link to="/series">Popular Series</Link>
                </div>
                <div className="movies">
                    <div className="media">
                        <img src="../src/assets/placeholder.png" alt="" />
                        <div className="overlay">
                            <p>Movies</p>
                        </div>
                    </div>
                    <a href="">Popular Movies</a>
                </div>
            </div>
        </>
    )
}

export default Inicio
