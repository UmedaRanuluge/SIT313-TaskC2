import Card from './Card'

const articles = [
  {
    id: 1,
    title: 'Getting Started with React',
    description: 'Learn the basics of React and components',
    rating: 5,
    author: 'Stacy Jones',
image: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {
    id: 2,
    title: 'Understanding NodeJS',
    description: 'A deep dive into Node.js fundamentals',
    rating: 5,
    author: 'Sarah Johnson',
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: 'React Hooks Explained',
    description: 'Master useState and useEffect hooks',
    rating: 5,
    author: 'Mike Wilson',
image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"  }
]

function FeaturedArticles() {
  return (
    <div className="bg-black-50 py-12 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Articles</h2>
      <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            description={article.description}
            rating={article.rating}
            username={article.author}
            image={article.image}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-200">
          See all articles
        </button>
      </div>
    </div>
  )
}

export default FeaturedArticles