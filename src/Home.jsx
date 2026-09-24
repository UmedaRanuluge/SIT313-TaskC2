import Hero from './components/Hero'
import FeaturedArticles from './components/FeaturedArticles'
import FeaturedTutorials from './components/FeaturedTutorials'

export default function Home(){
  return (
    <div>
      <Hero />
      <FeaturedArticles />
      <FeaturedTutorials />
    </div>
  )
}