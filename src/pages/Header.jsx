import { Container,Navbar,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function Header(){
    return <div>
                <Navbar bg='dark' data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Career Assistance</Navbar.Brand>
                            <Nav>
                                <Nav.Link href="/details" style={{color:"white"}}>User Details</Nav.Link>
                                <Nav.Link href="/goal" style={{color:"white",marginLeft:"10px"}}>Carrer Goal</Nav.Link>
                                <Nav.Link href="/show" style={{color:"white",marginLeft:"10px"}}>Show Details</Nav.Link>
                                <Nav.Link href="/careerAi" style={{color:"white",marginLeft:"10px"}}>Carrer Guidance</Nav.Link>
                                <Nav.Link href="/resume" style={{color:"white",marginLeft:"10px"}}>Resume</Nav.Link> 
                                <Nav.Link href="/quiz" style={{color:"white",marginLeft:"10px"}}>Quiz</Nav.Link>
                                <Nav.Link href="/intro" style={{color:"white",marginLeft:"10px"}}>Self Introduction</Nav.Link>
                            </Nav>  
                        </Container>
                </Navbar>
            </div>
}

export default Header