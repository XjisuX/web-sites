import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSites } from '../hooks/useSites';
import '../App.css';

const SiteEdition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const values = location.state;

  const { loading, error, updateSite } = useSites({ type: '' });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async data => {
    const result = await updateSite({
      ...data,
      idSite: values._id
    });
    if (result.status === 200) {
      navigate('/');
    }
  };

  return (
    <>
      {error && <div> Error actualizando sitio </div>}
      {loading && <div className='spinner'></div>}
      {!loading && !error && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2> Sitio {values?.name}</h2>
          <label htmlFor='key'>Llave</label>
          <input
            type='text'
            defaultValue={values?.key}
            {...register('key', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 50,
                message: 'La llave no debe tener más de 50 caracteres'
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            defaultValue={values?.name}
            {...register('name', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 100,
                message: 'El nombre no debe tener más de 100 caracteres'
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            defaultValue={values?.description}
            {...register('description', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 200,
                message: 'La descripción no debe tener más de 200 caracteres'
              }
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
          <label htmlFor='path'>Path</label>
          <input
            type='text'
            defaultValue={values?.path}
            {...register('path', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 100,
                message: 'La ruta no debe tener más de 100 caracteres'
              }
            })}
          />
          {errors.path && <span>{errors.path.message}</span>}
          <label htmlFor='publicPath'>publicPath</label>
          <input
            type='text'
            defaultValue={values?.publicPath}
            {...register('publicPath', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 100,
                message: 'La ruta pública no debe tener más de 100 caracteres'
              }
            })}
          />
          {errors.publicPath && <span>{errors.publicPath.message}</span>}
          <button>Actualizar</button>
        </form>
      )}
    </>
  );
};

export default SiteEdition