import { useForm } from 'react-hook-form';
import '../App.css';

const Form = ({ error, loading, onSubmit, title, titleButtom, values }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <div>
      {error && <h3> {error} </h3>}
      {loading && <div className='spinner'></div>}
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2> {title} </h2>
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
          {errors.key && <span>{errors.key.message}</span>}
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
                message: 'El nombre no debe tener más de 10 caracteres'
              }
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
          <label htmlFor='description'>Descripción</label>
          <input
            type='text'
            defaultValue={values?.description}
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
            defaultValue={values?.path}
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
            defaultValue={values?.publicPath}
            {...register('publicPath', {
              required: {
                value: true,
                message: 'Este campo es obligatorio'
              }
            })}
          />
          {errors.publicPath && <span>{errors.publicPath.message}</span>}
          <button>{titleButtom}</button>
        </form>
      )}
    </div>
  );
};

export default Form;
