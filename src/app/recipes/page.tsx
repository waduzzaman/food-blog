import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const recipes = [
  {
    id: 1,
    title: 'Classic Italian Pasta',
    description: 'A delicious homemade pasta with rich tomato sauce and fresh herbs.',
    time: '30 mins',
    difficulty: 'Easy',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
  },
  {
    id: 2,
    title: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a gooey molten center.',
    time: '45 mins',
    difficulty: 'Medium',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
  },
  {
    id: 3,
    title: 'Mediterranean Salad',
    description: 'Fresh and healthy salad with feta cheese and olives.',
    time: '15 mins',
    difficulty: 'Easy',
    category: 'Healthy',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
  },
  {
    id: 4,
    title: 'Avocado Toast',
    description: 'Creamy avocado on toasted sourdough with poached eggs.',
    time: '20 mins',
    difficulty: 'Easy',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d',
  },
  {
    id: 5,
    title: 'Grilled Salmon',
    description: 'Perfect grilled salmon with lemon and herbs.',
    time: '25 mins',
    difficulty: 'Medium',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
  },
  {
    id: 6,
    title: 'Berry Smoothie Bowl',
    description: 'Nutritious smoothie bowl topped with fresh fruits and granola.',
    time: '10 mins',
    difficulty: 'Easy',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2',
  },
];

export default function RecipesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Recipes</h1>
        <p className="text-lg text-gray-600">Discover our collection of delicious recipes</p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        <button className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
          All
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          Breakfast
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          Main Course
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          Desserts
        </button>
        <button className="px-6 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          Healthy
        </button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <Link 
            href={`/recipes/${recipe.id}`} 
            key={recipe.id}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                    {recipe.category}
                  </span>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="mr-4">⏱ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                  {recipe.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">
                  {recipe.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}