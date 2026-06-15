import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { Link } from 'react-router-dom';

const plantsData = [
  { id: 1, name: 'Aloe Vera', price: 12.99, category: 'Succulents', image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=300' },
  { id: 2, name: 'Echeveria', price: 9.99, category: 'Succulents', image: 'https://images.unsplash.com/photo-1509587584298-0f3620e1cd68?w=300' },
  { id: 3, name: 'Jade Plant', price: 14.99, category: 'Succulents', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300' },
  { id: 4, name: 'Haworthia', price: 8.99, category: 'Succulents', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300'…
