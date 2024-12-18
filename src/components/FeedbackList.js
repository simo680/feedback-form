import React, { useState } from 'react';
import { Card, CardContent, Typography, Rating, Grid, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const FeedbackList = ({ feedbacks }) => {
  const [filter, setFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredFeedbacks = feedbacks
    .filter(feedback => feedback.category.includes(filter))
    .filter(feedback => feedback.comment.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Поиск по комментариям"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ marginBottom: '20px' }} 
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth style={{ marginBottom: '50px' }}>
            <InputLabel>Фильтрация по категории</InputLabel>
            <Select
              value={filter}
              onChange={handleFilterChange}
            >
              <MenuItem value="">Все категории</MenuItem>
              <MenuItem value="Услуги">Услуги</MenuItem>
              <MenuItem value="Качество">Качество</MenuItem>
              <MenuItem value="Простота использования">Простота использования</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={2}>
        {filteredFeedbacks.map((feedback, index) => (
          <Card key={index} style={{ margin: '10px', }}>
            <CardContent>
              <Typography variant="h6">{feedback.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {new Date(feedback.date).toLocaleDateString()}
              </Typography>
              <Typography>{feedback.comment}</Typography>
              <Typography variant="subtitle2">
                Категория: {feedback.category}
              </Typography>
              <Rating value={feedback.rating} readOnly />
            </CardContent>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default FeedbackList;
