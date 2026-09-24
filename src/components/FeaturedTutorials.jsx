import Card from './Card'

const tutorials = [
  {
    id: 1,
    title: 'JavaScript ES6 Basics',
    description: 'Modern JavaScript features explained',
    rating: 5,
    username: 'john_dev',
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" },
  {
    id: 2,
    title: 'React Router Guide',
    description: 'Navigation in React applications',
    rating: 5,
    username: 'sarah_codes',
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80" },
  {
    id: 3,
    title: 'Express.js Fundamentals',
    description: 'Build backends with Express',
    rating: 4.9,
    username: 'mike_wilson',
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80" }
]

function FeaturedTutorials() {
  return (
    <div className="bg-grey py-12 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Tutorials</h2>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tutorials.map((tutorial) => (
          <Card
            key={tutorial.id}
            title={tutorial.title}
            description={tutorial.description}
            rating={tutorial.rating}
            username={tutorial.username}
            image={tutorial.image}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-200">
          See all tutorials
        </button>
      </div>
    </div>
  )
}

export default FeaturedTutorials