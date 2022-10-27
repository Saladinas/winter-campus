import React, { useState, useEffect } from 'react';
import { Skeleton, Grid, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MenuBook, FoodBank, ShoppingCart } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { dishes as dishesData } from '../../../data';
import { Dish } from '../../../models/Dish';
import DishCard from '../../../components/DishCard/DishCard';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import Ingredients from '../../../components/Ingredients/Ingredients';
import Recipe from '../../../components/Recipe/Recipe';

export default function DishView() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [dish, setDish] = useState<Dish | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadDishes() {
      try {
        const data: Dish | null =
          dishesData.find((d) => d.id.toString() === id) || null;
        setDish(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    setLoading(true);
    loadDishes();
  }, [id]);

  return loading || !dish ? (
    <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 2 }} />
  ) : (
    <Grid container spacing={3} alignItems={'stretch'}>
      <Grid item lg={4} xs={12}>
        <Paper>
          <SectionHeader
            icon={<FoodBank fontSize="large" color="primary" />}
            title={dish.name}
          />
          <DishCard hideHeader={true} dish={dish} />
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Paper sx={{ pb: 2 }}>
          <SectionHeader
            icon={<ShoppingCart fontSize="large" color="primary" />}
            title={t('Ingredients')}
          />
          <Ingredients dish={dish} />
        </Paper>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Paper sx={{ pb: 2 }}>
          <SectionHeader
            icon={<MenuBook fontSize="large" color="primary" />}
            title={t('Recipe')}
          />
          <Recipe dish={dish} />
        </Paper>
      </Grid>
    </Grid>
  );
}
