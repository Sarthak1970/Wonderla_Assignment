import React, { useState } from 'react';
import Link from 'next/link';

// Define the Ride interface for type safety
interface Ride {
  id: number;
  title: string;
  location: string;
  description: string;
  videoUrl: string;
  category: string;
  link: string;
}

// Define the ridesData object with proper typing
const ridesData: { [key: string]: Ride[] } = {
  land: [
    {
      id: 1,
      title: 'Mini Coco Cup',
      location: 'Bengaluru',
      description: 'Spin around in giant cups placed on a rotating turntable floor!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link: '/land',
    },
    {
      id: 2,
      title: 'Crazy Cars',
      location: 'Bhubaneshwar',
      description: 'Dash and crash into your friends on crazy bumper cars. So fun!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link: '/land',
    },
    {
      id: 3,
      title: 'High Speed Coaster',
      location: 'Mumbai',
      description: 'Feel the adrenaline rush on this high-speed roller coaster!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link: '/land',
    },
    {
      id: 4,
      title: 'Swing Ride',
      location: 'Delhi',
      description: 'Swing high into the sky on this fun and gentle ride!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link: '/land',
    },
    {
      id: 5,
      title: 'Fun House',
      location: 'Chennai',
      description: 'Enjoy the quirky twists and turns inside the fun house!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      category: 'Land',
      link: '/land',
    },
  ],
  water: [
    {
      id: 0,
      title: 'Water Slide',
      location: 'Hyderabad',
      description: 'Slide down a giant water slide and splash into the pool!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/water',
    },
    {
      id: 1,
      title: 'Bungee Jumping',
      location: 'Rishikesh',
      description: 'Experience the thrill of free-falling from a great height!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
      link: '/water',
    },
    {
      id: 2,
      title: 'Scuba Diving',
      location: 'Goa',
      description: 'Dive deep into the ocean and explore marine life.',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/water',
    },
    {
      id: 3,
      title: 'Hot Air Balloon Ride',
      location: 'Jaipur',
      description: 'Soar high in the sky and enjoy a breathtaking view!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
      link: '/water',
    },
    {
      id: 4,
      title: 'Skydiving',
      location: 'Mysore',
      description: 'Jump from an airplane and enjoy an adrenaline rush!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
      link: '/water',
    },
    {
      id: 5,
      title: 'Desert Safari',
      location: 'Dubai',
      description: 'Explore the vast deserts with an exciting safari ride!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
      link: '/water',
    },
    {
      id: 6,
      title: 'Water Slide',
      location: 'Hyderabad',
      description: 'Slide down a giant water slide and splash into the pool!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/water',
    },
    {
      id: 7,
      title: 'White Water Rafting',
      location: 'Manali',
      description: 'Paddle through the wild rapids for an ultimate adventure!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/water',
    },
    {
      id: 8,
      title: 'Paragliding',
      location: 'Bir Billing',
      description: 'Glide through the air and enjoy stunning mountain views!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
      link: '/water',
    },
    {
      id: 9,
      title: 'Rock Climbing',
      location: 'Hampi',
      description: 'Test your strength and climb natural rock formations!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
      link: '/water',
    },
    {
      id: 10,
      title: 'Jet Skiing',
      location: 'Mumbai',
      description: 'Race across the waves with high-speed jet skiing!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/water',
    },
  ],
  kids: [
    {
      id: 7,
      title: 'Pony Train',
      location: 'Kochi',
      description: 'Hop onto a pony ride through a magical land!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Kids',
      link: '/kids',
    },
    {
      id: 8,
      title: 'Paragliding',
      location: 'Bir Billing',
      description: 'Glide through the air and enjoy stunning mountain views!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Aerial',
      link: '/kids',
    },
    {
      id: 9,
      title: 'Rock Climbing',
      location: 'Hampi',
      description: 'Test your strength and climb natural rock formations!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Adventure',
      link: '/kids',
    },
    {
      id: 10,
      title: 'Jet Skiing',
      location: 'Mumbai',
      description: 'Race across the waves with high-speed jet skiing!',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      category: 'Water',
      link: '/kids',
    },
  ],
};

// RideCard component to display individual ride details
const RideCard: React.FC<{ ride: Ride }> = ({ ride }) => {
  return (
    <div className="w-full sm:w-80 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500">[Image Placeholder]</span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{ride.title}</h3>
        <p className="mt-2 text-gray-700">{ride.description}</p>
        <Link
          href={ride.link}
          className="mt-4 inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors"
        >
          Ride Details
        </Link>
      </div>
    </div>
  );
};

// RideCategorySelector component for circular category selection
const RideCategorySelector: React.FC<{
  categories: { name: string; count: number; icon: string }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-50"></div>
        {/* White Circle Overlay */}
        <div className="absolute inset-4 rounded-full bg-white"></div>
        {/* Category Buttons */}
        {categories.map((category, index) => {
          const angle = (index * 120 - 90) * (Math.PI / 180); // Position categories 120 degrees apart
          const x = 100 * Math.cos(angle);
          const y = 100 * Math.sin(angle);
          const isSelected = selectedCategory === category.name.toLowerCase();
          return (
            <button
              key={category.name}
              className={`absolute flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 ${
                isSelected ? 'text-yellow-500' : 'text-gray-800'
              } hover:text-yellow-500 transition-colors`}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              onClick={() => onSelectCategory(category.name.toLowerCase())}
            >
              <span className="text-2xl">{category.icon}</span>
              <span className="mt-1 font-semibold">{category.name}</span>
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  isSelected ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {category.count} Rides
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// LandPage component with dynamic category selection
const LandPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('land');

  const categories = [
    { name: 'Land', count: ridesData.land.length, icon: '🎡' },
    { name: 'Water', count: ridesData.water.length, icon: '🏊' },
    { name: 'Kids', count: ridesData.kids.length, icon: '🎠' },
  ];

  const filteredRides = ridesData[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-6">
        <h1 className="text-4xl font-bold text-center">Our Iconic Rides</h1>
      </header>
      <main className="flex flex-col md:flex-row gap-6 p-6">
        {/* Circular Category Selector */}
        <div className="md:w-1/3 flex justify-center">
          <RideCategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>
        {/* Ride Cards */}
        <div className="md:w-2/3 flex flex-wrap gap-6 justify-center">
          {filteredRides.slice(0, 4).map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      </main>
      {/* Explore All Rides Button */}
      <div className="flex justify-center pb-6">
        <Link
          href="/rides"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-colors"
        >
          Explore All Rides
        </Link>
      </div>
    </div>
  );
};

export default LandPage;