import React from 'react';
import {
  Typography,
  List,
  ListItemButton,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Send, AddCircleOutline } from '@mui/icons-material';
import { Dish } from '../../models/Dish';

type IngredientsProps = {
  dish: Dish;
};

export default function Ingredients({ dish }: IngredientsProps) {
  return (
    <List
      dense
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {dish.ingredients.map((ingredient, index) => (
        <div key={index}>
          <ListItemButton>
            <ListItemIcon>
              <Send color="secondary" fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {ingredient.section}
                </Typography>
              }
            />
          </ListItemButton>
          <List component="div" disablePadding dense>
            {ingredient.items.map((item) => (
              <ListItemButton key={item} sx={{ pl: 4 }}>
                <ListItemIcon>
                  <AddCircleOutline color="secondary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            ))}
          </List>
          {index !== dish.ingredients.length - 1 && <Divider sx={{ my: 2 }} />}
        </div>
      ))}
    </List>
  );
}
