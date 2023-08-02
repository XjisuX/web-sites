import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSites } from '../hooks/useSites';

const SiteDetails = () => {
  const navigate = useNavigate();
  const { idSite } = useParams();

  const { sites, loading, deleteSiteId } = useSites({
    type: 'search',
    idSite
  });

  const handleDeleteSite = async ({ idSite }) => {
    const result = await deleteSiteId({ idSite });
    if (result.status === 200) {
      navigate('/');
    }
  };

  return (
    <>
      {loading && <div className='spinner'></div>}
      {!loading && sites && (
        <div>
          <h2>Detalle del sitio {sites?.name}</h2>
          <table className='tableSite'>
            <thead className='title'>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Ruta</th>
                <th>Ruta pública</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bgColorEven' key={sites?._id}>
                <td>{sites?.name}</td>
                <td>{sites?.description}</td>
                <td>{sites?.path}</td>
                <td>{sites?.publicPath}</td>
                <td>
                  <div>
                    <button
                      className='buttomDelete'
                      onClick={() => handleDeleteSite({ idSite: sites._id })}
                    >
                      Eliminar
                    </button>
                    <Link to={`/update-site`} state={sites}>
                      <button className='buttomEdit'>Editar</button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='backButtom'>
            <Link to='/'>
              <button>Volver al Listado</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteDetails;
