import { BirthdayHero } from './components/BirthdayHero'
import { PhotoMosaic } from './components/PhotoMosaic'
import { WishesCarousel } from './components/WishesCarousel'
import { VideoTribute } from './components/VideoTribute'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
      <BirthdayHero />
      <PhotoMosaic />
      <WishesCarousel />
      <VideoTribute />
    </main>
  )
}

