export default function About() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose lg:prose-lg">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to FoodBlog, your ultimate destination for delicious recipes and culinary inspiration. 
              We are passionate about sharing the joy of cooking and bringing people together through food.
            </p>
  
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2025, FoodBlog started as a small personal blog and has grown into a community of 
              food lovers sharing their favorite recipes and cooking experiences.
            </p>
  
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that cooking should be accessible, enjoyable, and creative. Our mission is to inspire 
              people to explore new flavors, learn essential cooking techniques, and create memorable meals.
            </p>
  
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-gray-600">Head Chef & Founder</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-gray-600">Food Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }