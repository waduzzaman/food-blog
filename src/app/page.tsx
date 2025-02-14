import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6"
            alt="Delicious food spread"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Culinary Delights Await
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover recipes that bring joy to your kitchen
          </p>
          <Link 
            href="/recipes" 
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Recipes
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { 
              name: 'Breakfast', 
              image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666'
            },
            { 
              name: 'Main Course', 
              image: 'https://images.unsplash.com/photo-1602253057119-44d745d9b860?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            { 
              name: 'Desserts', 
              image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777'
            },
            { 
              name: 'Healthy', 
              image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd'
            },
          ].map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Classic Italian Pasta',
                time: '30 mins',
                difficulty: 'Easy',
                image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
              },
              {
                title: 'Chocolate Lava Cake',
                time: '45 mins',
                difficulty: 'Medium',
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
              },
              {
                title: 'Mediterranean Salad',
                time: '15 mins',
                difficulty: 'Easy',
                image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
              },
            ].map((recipe) => (
              <div key={recipe.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="mr-4">⏱ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for weekly recipe updates and cooking tips
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full text-gray-900 w-full md:w-96"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}