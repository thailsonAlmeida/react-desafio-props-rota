import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <Link to={'/'}>Inicio</Link>
            <Link to={'produtos'}>Produtos</Link>
            <Link to={'sobrenos'}>Sobre Nós</Link>
        </header>
    );
}