import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./routes/Home/index.tsx";
import Home from "./routes/Home/index.tsx";
import Produtos from "./routes/Produtos/index.tsx";
import Bemvindo from "./routes/Home/Bemvindo/index.tsx";
import Sobrenos from "./routes/Sobrenos/index.tsx";
import Computadores from "./routes/Produtos/Computadores/index.tsx";
import Eletronicos from "./routes/Produtos/Eletronicos/index.tsx";
import Livros from "./routes/Produtos/Livros/index.tsx";
import PageNotFound from "./components/PageNotFound/index.tsx";

function App() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> 
            <Route index element={<Bemvindo />} />
            
            <Route path="produtos" element={<Produtos />}> 
              <Route index element={<Computadores />} />
              <Route path="computadores" element={<Computadores />} />
              <Route path="eletronicos" element={<Eletronicos />} />
              <Route path="livros" element={<Livros />} />
              <Route path="*" element={<PageNotFound />}/>
            </Route>
            
            <Route path="sobrenos" element={<Sobrenos />} />
            <Route path="*" element={<PageNotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>    
  )
}

export default App
