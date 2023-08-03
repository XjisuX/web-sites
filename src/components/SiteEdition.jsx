import { useLocation, useNavigate } from 'react-router-dom';
import { useSites } from '../hooks/useSites';
import Form from './Form';

const SiteEdition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const values = location.state;

  const { loading, error, updateSite } = useSites({ type: '' });

  const onSubmit = async data => {
    const payload = {
      key: data.key.trim(),
      name: data.name.trim(),
      description: data.description.trim(),
      path: data.path.trim(),
      publicPath: data.publicPath.trim(),
      idSite: values._id
    };
    const result = await updateSite(payload);
    if (result.status === 200) {
      navigate('/');
    }
  };

  return (
    <Form
      loading={loading}
      error={error}
      onSubmit={onSubmit}
      title={`Sitio ${values?.name}`}
      titleButtom='Actualizar'
      values={values}
    />
  );
};

export default SiteEdition;
