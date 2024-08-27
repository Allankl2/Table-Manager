import "./containerAside.css"
import { useState, useEffect } from 'react';
export default function ContainerAside() {

    return (
        <section className="container-aside">
            <div className="contaner-title-aside">
                <p>Tabelas</p>
            </div>
            <SearchTable/>
        </section>
    )
}
type Tables = {
    name_table:string
}
function SearchTable(){
  const [tables, setTables] = useState<Tables[]>([]);
  const [fruit, setFruit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
      const fetchFruitData = async () => {
        try {
          const response = await fetch('http://localhost:3000/');
          
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
  
          const data = await response.json();
          setFruit(data);
          console.log(data)
          
        } catch (error) {
          setError('Erro ao buscar dados da API');
        } finally {
          setLoading(false);
        }
      };
  
      fetchFruitData();
    }, []);

    return (
        <div>
            <input type="text" className="input-search-table" />
            <div className="container-list-table">
        
           
            </div>
        </div>

    )

}
