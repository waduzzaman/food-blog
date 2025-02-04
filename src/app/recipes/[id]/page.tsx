import Image from 'next/image';
import Link from 'next/link';

const recipesData = {
  '1': {
    id: '1',
    title: 'Classic Italian Pasta',
    description: 'A homemade pasta dish with rich tomato sauce and fresh herbs.',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    difficulty: 'Easy',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8',
    ingredients: [
      '400g spaghetti',
      '2 tbsp olive oil',
      '4 cloves garlic, minced',
      '1 can crushed tomatoes',
      'Fresh basil',
      'Salt and pepper',
      'Grated Parmesan cheese'
    ],
    instructions: [
      'Boil salted water and cook pasta.',
      'Heat oil, sauté garlic, add tomatoes.',
      'Simmer for 15 mins, season.',
      'Mix pasta with sauce, garnish with basil and cheese.'
    ]
  },
  '2': {
    id: '2',
    title: 'Chocolate Lava Cake',
    description: 'A decadent chocolate cake with a gooey center.',
    prepTime: '15 mins',
    cookTime: '30 mins',
    servings: 2,
    difficulty: 'Medium',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
    ingredients: [
      '200g dark chocolate',
      '100g butter',
      '2 eggs',
      '2 egg yolks',
      '100g sugar',
      '30g flour',
      'Pinch of salt',
      'Vanilla ice cream'
    ],
    instructions: [
      'Preheat oven to 200°C.',
      'Melt chocolate and butter.',
      'Whisk eggs, sugar, mix with chocolate.',
      'Fold in flour and salt.',
      'Pour into ramekins, bake 12-14 mins.',
      'Serve with ice cream.'
    ]
  },
  '3': {
    id: '3',
    title: 'Mediterranean Salad',
    description: 'A fresh salad with feta cheese and olives.',
    prepTime: '15 mins',
    cookTime: '0 mins',
    servings: 4,
    difficulty: 'Easy',
    category: 'Healthy',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    ingredients: [
      'Mixed greens',
      'Cherry tomatoes',
      'Cucumber',
      'Red onion',
      'Kalamata olives',
      'Feta cheese',
      'Olive oil',
      'Balsamic vinegar'
    ],
    instructions: [
      'Chop veggies, combine in a bowl.',
      'Add olives, feta.',
      'Drizzle with oil and vinegar.',
      'Season and serve.'
    ]
  }
};

type Props = {
  params: {
    id: string
  }
}

export default async function RecipeDetail({ params }: Props) {
  const recipe = recipesData[params.id] || recipesData['1'];
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/recipes" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Recipes
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
        <p className="text-lg text-gray-600 mb-8">{recipe.description}</p>

        <div className="mb-8 relative h-[400px] rounded-lg overflow-hidden">
          <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="block text-sm text-gray-500">Prep Time</span>
            <span className="block text-lg font-semibold">{recipe.prepTime}</span>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="block text-sm text-gray-500">Cook Time</span>
            <span className="block text-lg font-semibold">{recipe.cookTime}</span>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="block text-sm text-gray-500">Servings</span>
            <span className="block text-lg font-semibold">{recipe.servings}</span>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <span className="block text-sm text-gray-500">Difficulty</span>
            <span className="block text-lg font-semibold">{recipe.difficulty}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="font-bold mr-4">{index + 1}.</span>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
