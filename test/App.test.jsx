import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/App';
describe('App', () => {
  test('render content', () => {
    const component = render(
      <Router>
        <App />
      </Router>
    );
    component.getByText('Crear Sitio');
    expect(component.container).toHaveTextContent('Listado');
  });
});
