import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MoreVert, Favorite, Share, Restaurant } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { Dish } from '../../models/Dish';

type DishCardProps = {
  dish: Dish;
  hideHeader?: boolean;
};

export default function DishCard({ dish, hideHeader = false }: DishCardProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = (id: number) => {
    navigate(`/dishes/${id}`);
  };

  return (
    <Card
      color="primary"
      onClick={() => handleClick(dish.id)}
      sx={{ cursor: 'pointer' }}
    >
      {!hideHeader && (
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: theme.palette.secondary.main }}
              aria-label="recipe"
            >
              <Restaurant />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={<Typography variant="h6">{dish.name}</Typography>}
        />
      )}
      <CardMedia
        component="img"
        height={hideHeader ? 300 : 194}
        image={dish.image}
        alt={dish.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {dish.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
}
