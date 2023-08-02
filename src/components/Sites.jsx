import { useSites } from '../hooks/useSites';
import '../App.css';

const Sites = () => {
  const { sites, loading, error } = useSites();

  return (
    <>
      {error && <div> Error buscando el listado de sitios </div>}
      {loading && <div className='spinner'></div>}
      {sites && sites.length > 0 && (
        <div>
          <h1>Tabla de Sitios</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Ruta</th>
                <th>Ruta pública</th>
              </tr>
            </thead>
            <tbody>
              {sites &&
                sites.map(
                  ({ _id, name, description, path, publicPath }, index) => (
                    <tr
                      className={index % 2 === 0 ? 'bgColorOdd' : 'bgColorEven'}
                      key={_id}
                    >
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

export default Sites;
