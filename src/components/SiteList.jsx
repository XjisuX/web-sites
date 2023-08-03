import { useNavigate } from 'react-router-dom';
import { useSites } from '../hooks/useSites';
import '../App.css';

const SiteList = () => {
  const navigate = useNavigate();
  const { sites, loading, error } = useSites({ type: "list" });
  const showItem = id => {
    navigate(`/site/detail/${id}`);
  };
  return (
    <>
      {error && <h3> Error buscando el listado de sitios </h3>}
      {loading && <div className='spinner'></div>}
      {sites && sites.length > 0 && (
        <div>
          <h1>Tabla de Sitios</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Llave</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Ruta</th>
                <th>Ruta pública</th>
              </tr>
            </thead>
            <tbody className='tbodyPointer'>
              {sites &&
                sites.map(
                  ({ _id, key, name, description, path, publicPath }, index) => (
                    <tr
                      className={index % 2 === 0 ? 'bgColorOdd' : 'bgColorEven'}
                      key={_id}
                      onClick={() => showItem(_id)}
                    >
                      <td>{key}</td>
                      <td>{name}</td>
                      <td>{description}</td>
                      <td>{path}</td>
                      <td>{publicPath}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SiteList;
