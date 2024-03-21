import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import CloseIconButton from './CloseIconButton';

describe('CloseIconButton', () => {
  it('should render without crashing', () => {
    const { getByRole } = render(<CloseIconButton />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<CloseIconButton onClick={handleClick} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it('should display the title when provided', () => {
    const title = 'Close';
    const { getByTitle } = render(<CloseIconButton title={title} />);
    const button = getByTitle(title);
    expect(button).toBeInTheDocument();
  });

  test('should render correctly', () => {
    const setup = () => {
      return render(<CloseIconButton />);
    }

    const view = setup();
    expect(view).toMatchSnapshot();
  });
});