import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShowcasePage from './index';

describe('ShowcasePage component', () => {
	
  const testProps = {};

  beforeEach(() => {});
  afterEach(() => {jest.clearAllMocks();});

  test('renders with correct id', () => {
    render(<ShowcasePage {...testProps} id={'test'} role={'alert'}/>);
    const component = screen.getByRole('alert');
    expect(component).toHaveAttribute('id', 'test');
  });

});

// ------------------------------------------------------------------------- //