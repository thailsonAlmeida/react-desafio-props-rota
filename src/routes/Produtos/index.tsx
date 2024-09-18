import { Link, Outlet } from "react-router-dom";

export default function Produtos(){
    return(
        <>

            <header>
                <Link to={'computadores'}>Computadores</Link>
                <Link to={'eletronicos'}>Eletronicos</Link>
                <Link to={'livros'}>Livros</Link>
            </header>
            <Outlet />
        
        </>
        
    );
}