import React from 'react';
import {
  MenuList,
  MenuItem,
  ListItemIcon,
  Chip,
  ListItemText,
  Divider,
} from '@mui/material';
import { Dish } from '../../models/Dish';

type RecipeProps = {
  dish: Dish;
};

export default function Recipe({ dish }: RecipeProps) {
  return (
    <MenuList>
      {dish.steps.map((step, index) => (
        <div key={index}>
          <MenuItem>
            <ListItemIcon>
              <Chip
                sx={{ fontWeight: 'bold', borderWidth: 2 }}
                variant="outlined"
                size="small"
                color="secondary"
                label={index + 1}
              />
            </ListItemIcon>
            <ListItemText
              primary={step}
              primaryTypographyProps={{
                typography: { xs: 'subtitle2' },
                style: { whiteSpace: 'normal' },
              }}
            ></ListItemText>
          </MenuItem>
          {index !== dish.steps.length - 1 && (
            <Divider light sx={{ margin: '0 !important' }} />
          )}
        </div>
      ))}
    </MenuList>
  );
}
