import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DishCard from './DishCard';
import { Dish } from '../../models/Dish';

const mockedDish: Dish = {
  id: 0,
  name: 'Pierogi',
  description: 'The most popular Polish food',
  image: '',
  ingredients: [{
    section: 'Dough',
    items: ['Water', '2 cups (240g) King Arthur Unbleached All-Purpose Flour',
      '1/2 teaspoon salt',
      '1 large egg',
      '1/2 cup (113g) sour cream',
      '4 tablespoons (57g) butter, room temperature',]
  }],
  steps: ['Prepare ingredients', 'Cook', 'Eat!']
}

test('renders dish name', () => {
  render(<BrowserRouter><DishCard dish={mockedDish} /></BrowserRouter>);

  const dishName = screen.getByText(/Pierogi/i);
  expect(dishName).toBeInTheDocument();
});
