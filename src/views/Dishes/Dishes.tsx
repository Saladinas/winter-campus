import React, { useState, useEffect } from 'react';
import { Skeleton, Grid } from '@mui/material';
import { dishes as dishesData } from '../../data';
import DishCard from '../../components/DishCard/DishCard';
import { Dish } from '../../models/Dish';

export default function DishesView() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadDishes() {
      try {
        const data: Dish[] = dishesData;
        setDishes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    loadDishes();
  }, []);

  return loading ? (
    <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 2 }} />
  ) : (
    <Grid container spacing={3}>
      {dishes.map((dish: Dish, index) => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={index}>
          <DishCard dish={dish} />
        </Grid>
      ))}
    </Grid>
  );
}
