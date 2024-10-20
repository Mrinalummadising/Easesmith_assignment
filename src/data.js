import Plant1 from './assets/plant1.png';
import Plant2 from './assets/plant2.png';
import Plant3 from './assets/plant3.jpg';
import Plant4 from './assets/plant4.jpg';
import Plant5 from './assets/plant5.jpg';
import Plant6 from './assets/plant6.jpg';
import Plant7 from './assets/plant7.jpg';
import Plant8 from './assets/plant8.jpg';
import Plant9 from './assets/plant9.webp';
import Plant10 from './assets/plant10.jpg';
import Plant11 from './assets/plant11.jpg';
import Plant12 from './assets/plant12.jpg';
import Plant13 from './assets/plant13.jpg';
import Plant14 from './assets/plant14.jpg';
import Plant15 from './assets/plant15.jpg';
import Plant16 from './assets/plant16.jpg';
import Plant17 from './assets/plant17.jpg';
import Plant18 from './assets/plant18.jpg';

const mockProducts = [
  {
    id: 1,
    name: 'Philodendron',
    description: 'A versatile indoor plant with large, split leaves.',
    image: Plant1,
    ratings: 4.9,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 2,
    name: 'Ficus',
    description: 'A stunning plant with large, glossy leaves and unique fenestrations.',
    image: Plant2,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 3,
    name: 'Calathea',
    description: 'A rare and sought-after plant with beautiful variegated leaves.',
    image: Plant3,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 4,
    name: 'Pothos',
    description: 'A popular vining plant with heart-shaped leaves.',
    image: Plant4,
    ratings: 4.5,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 5,
    name: 'Dracaena',
    description: 'A tall, elegant plant with long, slender leaves.',
    image: Plant5,
    ratings: 4.6,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 6,
    name: 'Alocasia',
    description: 'A striking plant with large, arrow-shaped leaves.',
    image: Plant6,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 7,
    name: 'Spathiphyllum',
    description: 'A popular peace lily with white flowers and dark green leaves.',
    image: Plant7,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 8,
    name: 'Begonia',
    description: 'A colorful plant with a variety of leaf shapes and flower colors.',
    image: Plant8,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 9,
    name: 'Hibiscus',
    description: 'A flowering shrub with large, showy blooms.',
    image: Plant9,
    ratings: 4.9,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 10,
    name: 'Bougainvillea',
    description: 'A climbing vine with colorful bracts that resemble flowers.',
    image: Plant10,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  
  {
    id: 11,
    name: 'Jasmine',
    description: 'A fragrant vine with delicate white flowers.',
    image: Plant11,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 12,
    name: 'Lavender',
    description: 'A popular herb with fragrant purple flowers.',
    image: Plant12,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 13,
    name: 'Rosemary',
    description: 'A versatile herb with needle-like leaves and a fragrant aroma.',
    image: Plant13,
    ratings: 4.9,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 14,
    name: 'Echeveria',
    description: 'A succulent with rosette-shaped leaves in various colors.',
    image: Plant14,
    ratings: 4.6,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 15,
    name: 'Aloe Vera',
    description: 'A succulent with medicinal properties and long, fleshy leaves.',
    image: Plant15,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 16,
    name: 'Jade Plant',
    description: 'A succulent with thick, fleshy leaves and a bonsai-like appearance.',
    image: Plant16,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 17,
    name: 'Haworthia',
    description: 'A succulent with small, rosette-shaped leaves and unique textures.',
    image: Plant17,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 18,
    name: 'Burro Tail',
    description: 'A succulent with trailing stems and plump, round leaves.',
    image: Plant18,
    ratings: 4.6,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 19,
    name: 'Echeveria Pearl von Nurnberg',
    description: 'A succulent with rosette-shaped leaves in shades of pink and purple.',
    image: Plant1,
    ratings: 4.8,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 20,
    name: 'Aloe Vera Variegata',
    description: 'A succulent with variegated leaves and medicinal properties.',
    image: Plant2,
    ratings: 4.7,
    totalPrice: 599.99,
    discountedPrice: 399.99,
  },
  {
    id: 21,
    name: 'Philodendron Birkin',
    description: 'A striking plant with variegated leaves in shades of green and pink.',
    image: Plant3,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 22,
    name: 'Ficus Lyrata Variegata',
    description: 'A popular houseplant with large, fiddle-shaped leaves and white variegation.',
    image: Plant4,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 23,
    name: 'Calathea Orbifolia',
    description: 'A stunning plant with large, round leaves featuring a striking pattern.',
    image: Plant5,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 24,
    name: 'Pothos Njoy',
    description: 'A unique vining plant with variegated leaves in shades of green and white.',
    image: Plant6,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 25,
    name: 'Dracaena Reflexa Variegata',
    description: 'A popular houseplant with long, slender leaves and white stripes.',
    image: Plant7,
    ratings: 4.5,
    totalPrice: 59.99,
    discountedPrice: 29.99
  },
  {
    id: 26,
    name: 'Alocasia Zebrina',
    description: 'A striking plant with large, arrow-shaped leaves featuring dark stripes.',
    image: Plant8,
    ratings: 4.2,
    totalPrice: 79.99,
    discountedPrice: 49.99
  },
  {
    id: 27,
    name: 'Spathiphyllum Picasso',
    description: 'A unique peace lily with variegated leaves in shades of green and white.',
    image: Plant9,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 28,
    name: 'Begonia Maculata',
    description: 'A colorful plant with polka-dot patterned leaves.',
    image: Plant10,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 29,
    name: 'Hibiscus Syriacus',
    description: 'A flowering shrub with large, showy blooms in various colors.',
    image: Plant11,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 30,
    name: 'Bougainvillea Glabra',
    description: 'A climbing vine with colorful bracts that resemble flowers.',
    image: Plant12,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 31,
    name: 'Philodendron Birkin',
    description: 'A striking plant with variegated leaves in shades of green and pink.',
    image: Plant13,
    ratings: 4.5,
    totalPrice: 59.99,
    discountedPrice: 29.99
  },
  {
    id: 32,
    name: 'Ficus Lyrata Variegata',
    description: 'A popular houseplant with large, fiddle-shaped leaves and white variegation.',
    image: Plant14,
    ratings: 4.2,
    totalPrice: 79.99,
    discountedPrice: 49.99
  },
  {
    id: 33,
    name: 'Calathea Orbifolia',
    description: 'A stunning plant with large, round leaves featuring a striking pattern.',
    image: Plant15,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 34,
    name: 'Pothos Njoy',
    description: 'A unique vining plant with variegated leaves in shades of green and white.',
    image: Plant16,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 35,
    name: 'Dracaena Reflexa Variegata',
    description: 'A popular houseplant with long, slender leaves and white stripes.',
    image: Plant17,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 36,
    name: 'Alocasia Zebrina',
    description: 'A striking plant with large, arrow-shaped leaves featuring dark stripes.',
    image: Plant18,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 37,
    name: 'Spathiphyllum Picasso',
    description: 'A unique peace lily with variegated leaves in shades of green and white.',
    image: Plant1,
    ratings: 4.5,
    totalPrice: 59.99,
    discountedPrice: 29.99
  },
  {
    id: 38,
    name: 'Begonia Maculata',
    description: 'A colorful plant with polka-dot patterned leaves.',
    image: Plant2,
    ratings: 4.2,
    totalPrice: 79.99,
    discountedPrice: 49.99
  },
  {
    id: 39,
    name: 'Hibiscus Syriacus',
    description: 'A flowering shrub with large, showy blooms in various colors.',
    image: Plant3,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 40,
    name: 'Bougainvillea Glabra',
    description: 'A climbing vine with colorful bracts that resemble flowers.',
    image: Plant4,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 41,
    name: 'Philodendron Birkin',
    description: 'A striking plant with variegated leaves in shades of green and pink.',
    image: Plant5,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 42,
    name: 'Ficus Lyrata Variegata',
    description: 'A popular houseplant with large, fiddle-shaped leaves and white variegation.',
    image: Plant6,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 43,
    name: 'Calathea Orbifolia',
    description: 'A stunning plant with large, round leaves featuring a striking pattern.',
    image: Plant7,
    ratings: 4.5,
    totalPrice: 59.99,
    discountedPrice: 29.99
  },
  {
    id: 44,
    name: 'Pothos Njoy',
    description: 'A unique vining plant with variegated leaves in shades of green and white.',
    image: Plant8,
    ratings: 4.2,
    totalPrice: 79.99,
    discountedPrice: 49.99
  },
  {
    id: 45,
    name: 'Dracaena Reflexa Variegata',
    description: 'A popular houseplant with long, slender leaves and white stripes.',
    image: Plant9,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 46,
    name: 'Alocasia Zebrina',
    description: 'A striking plant with large, arrow-shaped leaves featuring dark stripes.',
    image: Plant10,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 47,
    name: 'Spathiphyllum Picasso',
    description: 'A unique peace lily with variegated leaves in shades of green and white.',
    image: Plant11,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 48,
    name: 'Begonia Maculata',
    description: 'A colorful plant with polka-dot patterned leaves.',
    image: Plant12,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 49,
    name: 'Hibiscus Syriacus',
    description: 'A flowering shrub with large, showy blooms in various colors.',
    image: Plant13,
    ratings: 4.5,
    totalPrice: 59.99,
    discountedPrice: 29.99
  },
  {
    id: 50,
    name: 'Bougainvillea Glabra',
    description: 'A climbing vine with colorful bracts that resemble flowers.',
    image: Plant14,
    ratings: 4.2,
    totalPrice: 79.99,
    discountedPrice: 49.99
  },
  {
    id: 51,
    name: 'Philodendron Birkin',
    description: 'A striking plant with variegated leaves in shades of green and pink.',
    image: Plant15,
    ratings: 4.8,
    totalPrice: 99.99,
    discountedPrice: 69.99
  },
  {
    id: 52,
    name: 'Ficus Lyrata Variegata',
    description: 'A popular houseplant with large, fiddle-shaped leaves and white variegation.',
    image: Plant16,
    ratings: 4.0,
    totalPrice: 49.99,
    discountedPrice: 34.99
  },
  {
    id: 53,
    name: 'Calathea Orbifolia',
    description: 'A stunning plant with large, round leaves featuring a striking pattern.',
    image: Plant17,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  },
  {
    id: 54,
    name: 'Pothos Njoy',
    description: 'A unique vining plant with variegated leaves in shades of green and white.',
    image: Plant18,
    ratings: 4.7,
    totalPrice: 89.99,
    discountedPrice: 59.99
  }
];

export default mockProducts;
