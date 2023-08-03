import { useNavigate } from 'react-router-dom';
import { useSites } from '../hooks/useSites';
import Form from './Form';

const SiteNew = () => {
  const navigate = useNavigate();
  const { loading, error, newSite } = useSites({ type: '' });

  const onSubmit = async data => {
    const payload = {
      key: data.key.trim(),
      name: data.name.trim(),
      description: data.description.trim(),
      path: data.path.trim(),
      publicPath: data.publicPath.trim()
    };
    const result = await newSite(payload);
    if (result.status === 200) {
      navigate('/');
    }
  };

  return (
    <Form
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      title='Crear Sitio'
      titleButtom='Enviar'
    />
  );
};

export default SiteNew;
