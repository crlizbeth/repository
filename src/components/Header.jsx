import '../inicio.css'
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
`;
const Trial = styled.a`
    padding: 10px 30px;
    background: #353535;
`;

function Header(){
    return (
        <>
            <header>
                <nav>
                    <Title>DEMO Streaming</Title>
                    <div className="btn">
                    <div className="login">
                        <a href="">Log in</a>
                    </div>
                    <Trial as="a" href="./App.jsx">Start your free trial</Trial>
                    </div>
                </nav>
                <div className="titles">
                    <p>Popular Titles</p>
                </div>
            </header>
        </>
    )
}

export default Header
