import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Rating,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState({
    name: "",
    comment: "",
    category: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (event, newValue) => {
    setFeedback((prev) => ({
      ...prev,
      rating: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      ...feedback,
      date: new Date().toISOString(),
    };
    onSubmit(newFeedback);
    setFeedback({ name: "", comment: "", category: "", rating: 0 }); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Имя"
            variant="outlined"
            fullWidth
            name="name"
            value={feedback.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Комментарий"
            variant="outlined"
            fullWidth
            name="comment"
            value={feedback.comment}
            onChange={handleChange}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Категория</InputLabel>
            <Select
              name="category"
              value={feedback.category}
              onChange={handleChange}
            >
              <MenuItem value="Услуги">Услуги</MenuItem>
              <MenuItem value="Качество">Качество</MenuItem>
              <MenuItem value="Простота использования">
                Простота использования
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Rating
            name="rating"
            value={feedback.rating}
            onChange={handleRatingChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ margin: "20px 0 20px 0" }}
          >
            Оставить отзыв
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FeedbackForm;
