import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home as HomeIcon, MapPin, Globe, Zap, Ticket, Phone, Menu, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

// Import RideCard from the previous implementation
interface Ride {
  id: number;
  title: string;
  location: string;
  description: string;
  videoUrl: string;
  category: string;
  link: string;
}

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

// RideCard Component (reused from previous response)
const RideCard: React.FC<{ ride: Ride }> = ({ ride }) => {
  return (
    <div className="w-72 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">[Image Placeholder]</span>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{ride.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{ride.description}</p>
        <Link
          href={ride.link}
          className="mt-4 inline-block bg-yellow-400 text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors"
        >
          Ride Details
        </Link>
      </div>
    </div>
  );
};

// CategorySidebar Component (reused from previous response)
interface Category {
  name: string;
  count: number;
  icon: string;
  color: string;
}

const RideCategorySelector: React.FC<{
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-64 h-64">
        {/* Background Circle with Gradient */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200 opacity-70"></div>
        {/* White Circle Overlay */}
        <div className="absolute inset-4 rounded-full bg-white shadow-lg"></div>
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
              <span className="mt-1 font-semibold text-sm uppercase">{category.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  isSelected ? 'bg-yellow-400 text-white' : 'bg-gray-200 text-gray-800'
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

const CarouselControls: React.FC<{ onPrev: () => void; onNext: () => void }> = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button onClick={onPrev} className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500">
        ←
      </button>
      <button onClick={onNext} className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500">
        →
      </button>
    </div>
  );
};

const Home: React.FC = () => {
  const [navWhite, setNavWhite] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('land');
  const [startIndex, setStartIndex] = useState<number>(0);

  const categories: Category[] = [
    { name: 'Land', count: ridesData.land.length, icon: '🏔️', color: '#FCD34D' },
    { name: 'Water', count: ridesData.water.length, icon: '🌊', color: '#60A5FA' },
    { name: 'Kids', count: ridesData.kids.length, icon: '👶', color: '#4ADE80' },
  ];

  const filteredRides: Ride[] = ridesData[activeCategory.toLowerCase()] || [];
  const total = filteredRides.length;

  useEffect(() => {
    if (total >= 4) {
      const interval = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % total);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [total]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  let visibleRides: Ride[] = [];
  if (total >= 4) {
    for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % total;
      visibleRides.push(filteredRides[index]);
    }
  } else {
    visibleRides = filteredRides;
  }

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setNavWhite(window.scrollY >= heroHeight / 2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTextClass = navWhite ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-200';

  return (
    <div className="min-h-screen bg-gray-800 text-white overflow-hidden">
      {/* Header */}
<header
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          navWhite ? 'bg-white' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-center h-16">
          <div className="flex items-center justify-between w-full max-w-5xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h1
                className={`text-3xl font-bold ${navWhite ? 'text-blue-600' : 'text-white'}`}
              >
                Wonderla
              </h1>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
                <HomeIcon size={20} className="inline mr-1" />
                Home
              </motion.a>
              <div className="relative group">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className={`${navTextClass} inline-block flex items-center`}
                >
                  <MapPin className="h-5 w-5 inline mr-1" />
                  Location
                </motion.a>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ul>
                    <li className="p-2 hover:bg-gray-100 flex items-center">
                      <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                      <Link href="" className="text-blue-500">
                        India
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100 flex items-center">
                      <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                      <Link href="/" className="text-blue-500">
                        Australia
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-gray-100 flex items-center">
                      <MapPin className="h-4 w-4 inline mr-1 text-blue-500" />
                      <Link href="/" className="text-blue-500">
                        Maldives
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
                <Globe className="h-5 w-5 inline mr-1" />
                Parks
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
                <Zap className="h-5 w-5 inline mr-1" />
                Rides
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
                <Ticket className="h-5 w-5 inline mr-1" />
                Tickets
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} className={navTextClass}>
                <Phone className="h-5 w-5 inline mr-1" />
                Contact
              </motion.a>
            </nav>
            <div className="md:hidden">
              <Menu className={`${navWhite ? 'text-black' : 'text-white'} h-6 w-6`} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative h-screen">
        <div className="absolute inset-0">
          <iframe
            className="w-full h-full bg-gray-800"
            src="https://www.youtube.com/embed/CI9jyUZtDEk?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=CI9jyUZtDEk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white max-w-2xl">
            <h2 className="text-5xl font-bold mb-6">Welcome to the Land of Joy</h2>
            <p className="text-xl mb-8">
              Experience the thrill of India's largest and most exciting amusement park.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700">
              Book Tickets
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Navigation Links */}
      <section className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center space-x-8">
              <Link href="/landrides">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 bg-yellow-400 text-blue-600 font-semibold w-60 rounded-3xl"
                >
                  Land Attractions
                </motion.button>
              </Link>
              <Link href="waterrides">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 bg-yellow-400 text-blue-600 font-semibold w-60 rounded-3xl"
                >
                  Water Attractions
                </motion.button>
              </Link>
              <Link href="/kidsrides">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="h-12 bg-yellow-400 text-blue-600 font-semibold w-60 rounded-3xl"
                >
                  Kids Attractions
                </motion.button>
              </Link>
          </nav>
        </div>
      </section>

      {/* Rides Section with Category Selector */}
        <div className="bg-gray-800 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-12">OUR ICONIC RIDES</h2>
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar for categories */}
      <div className="md:w-1/4">
        <RideCategorySelector
          categories={categories}
          selectedCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat);
            setStartIndex(0);
          }}
        />
      </div>

      {/* Ride Carousel */}
      <div className="flex-1 md:w-3/4">
        {total > 0 ? (
          total < 4 ? (
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5}}
            >
              {filteredRides.map((ride) => (
                <div key={ride.id} className="w-72 flex-shrink-0">
                  <RideCard ride={ride} />
                </div>
              ))}
            </motion.div>
          ) : (
            <>
              <CarouselControls onPrev={handlePrev} onNext={handleNext} />
              <div className="overflow-hidden relative">
                <motion.div
                  className="flex space-x-4"
                  animate={{ x: -startIndex * (288 + 16) }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  {[...filteredRides, ...filteredRides.slice(0, 4)].map((ride, index) => (
                    <div key={index} className="w-72 flex-shrink-0">
                      <RideCard ride={ride} />
                    </div>
                  ))}
                </motion.div>
              </div>
            </>
          )
        ) : (
          <p className="text-center text-gray-600">
            No rides available for this category.
          </p>
        )}
        <div className="flex justify-center mt-8">
          <Link href="/landrides">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-500"
            >
              Explore All Rides!
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Featured Attractions Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Featured Attractions
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Recoil',
                image: 'https://res.cloudinary.com/dgxbpno1j/image/upload/v1741384867/samples/landscapes/beach-boat.jpg',
                description: 'Experience the thrill of zero gravity',
              },
              {
                title: 'Wonder Splash',
                image: 'https://res.cloudinary.com/dgxbpno1j/image/upload/v1741384873/samples/balloons.jpg',
                description: 'Make a splash in our water wonderland',
              },
              {
                title: 'Sky Wheel',
                image: 'https://res.cloudinary.com/dgxbpno1j/image/upload/v1741384878/cld-sample-2.jpg',
                description: 'See the world from new heights',
              },
            ].map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={attraction.image} alt={attraction.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl text-white font-semibold mb-2">{attraction.title}</h4>
                  <p className="text-white">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Address</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Mobile</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>Mail</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {['About Us', 'Safety Guidelines', 'Park Rules', 'FAQs'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-blue-400">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Parks</h5>
              <ul className="space-y-2">
                {['Bangalore', 'Hyderabad', 'Kochi'].map((location) => (
                  <li key={location}>
                    <Link href="#" className="hover:text-blue-400">
                      {location}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Twitter className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Instagram className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
                <Youtube className="h-6 w-6 hover:text-blue-400 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2025 Assignment by Sarthak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;