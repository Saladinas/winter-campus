import React from 'react';
import { Stack, Typography } from '@mui/material';

type SectionHeaderProps = {
  icon: JSX.Element;
  title: string;
};

export default function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <Stack direction="row" p={2} spacing={1} alignItems="center">
      {icon}
      <Typography variant="h5">{title}</Typography>
    </Stack>
  );
}
