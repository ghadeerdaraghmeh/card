import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('searches for a person by name', async () => {
  render(<App />);

  const searchInput = screen.getByPlaceholderText('ابحث عن شخص...');

  await userEvent.type(searchInput, 'غدير');

  expect(screen.getByText('غدير')).toBeInTheDocument();
  expect(screen.queryByText('ليلى')).not.toBeInTheDocument();
});
test('adds a new person', async () => {
  render(<App />);

  const nameInput = screen.getByPlaceholderText('اسم الشخص');
  const ageInput = screen.getByPlaceholderText('عمر الشخص');
  const hobbiesInput = screen.getByPlaceholderText('هوايات الشخص');
  const addButton = screen.getByText('إضافة شخص');

  await userEvent.type(nameInput, 'أحمد');
  await userEvent.type(ageInput, '35');
  await userEvent.type(hobbiesInput, 'كرة القدم');

  await userEvent.click(addButton);

  expect(screen.getByText('أحمد')).toBeInTheDocument();
});
test('deletes a person', async () => {
  render(<App />);

  const deleteButtons = screen.getAllByText('🗑️ حذف');

  await userEvent.click(deleteButtons[0]);

  expect(screen.queryByText('غدير')).not.toBeInTheDocument();
});






test('shows and hides hobbies', async () => {
  render(<App />);

  const detailsButton = screen.getAllByText('عرض التفاصيل')[0];

  await userEvent.click(detailsButton);

  expect(screen.getByText(/القراءة، البرمجة، السفر/)).toBeInTheDocument();

  await userEvent.click(screen.getByText('إخفاء التفاصيل'));

  expect(screen.queryByText(/القراءة، البرمجة، السفر/)).not.toBeInTheDocument();
});