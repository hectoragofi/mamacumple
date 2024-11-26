'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

const wishes = [
  "¡Feliz cumpleaños, mamá! Gracias por tu amor incondicional.",
  "Que este día esté lleno de alegría y risas. Te quiero mucho.",
  "Eres la mejor mamá del mundo. Feliz cumpleaños.",
  "Gracias por siempre estar ahí para mí. Feliz cumpleaños.",
]

export function WishesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextWish = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wishes.length)
  }

  const prevWish = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + wishes.length) % wishes.length)
  }

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Deseos de Cumpleaños</h2>
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <p className="text-xl text-purple-700">{wishes[currentIndex]}</p>
          </motion.div>
        </AnimatePresence>
        <motion.button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevWish}
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </motion.button>
        <motion.button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextWish}
        >
          <ChevronRightIcon className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  )
}

