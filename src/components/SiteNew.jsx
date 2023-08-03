import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSites } from '../hooks/useSites';
import '../App.css';

const SiteNew = () => {
  const navigate = useNavigate();
  const { loading, error, newSite } = useSites({ type: '' });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const result = await newSite({ ...data, key: data.name })
    if (result.status === 200){
      navigate('/');
    }
  };

  return (
    <>
      {error && <h3> {error} </h3>}
      {loading && <div className='spinner'></div>}
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2> Crear Sitio </h2>
          <label htmlFor='key'>Llave</label>
          <input
            type='text'
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
          {errors.key && <span>{errors.key.message}</span>}
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            {...register('name', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              },
              maxLength: {
                value: 100,
                message: 'El nombre no debe tener más de 10 caracteres'
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor='description'>Descripción</label>
          <input
            type='text'
            {...register('description', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              }
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
          <label htmlFor='path'>Ruta</label>
          <input
            type='text'
            {...register('path', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              }
            })}
          />
          {errors.path && <span>{errors.path.message}</span>}
          <label htmlFor='publicPath'>Ruta pública</label>
          <input
            type='text'
            {...register('publicPath', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              }
            })}
          />
          {errors.publicPath && <span>{errors.publicPath.message}</span>}
          <button>Enviar</button>
        </form>
      )}
    </>
  );
};

export default SiteNew