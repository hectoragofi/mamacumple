'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const photos = [
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
]

export function PhotoMosaic() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Momentos Especiales</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo}
              alt={`Mom's photo ${index + 1}`}
              width={300}
              height={300}
              className="rounded-lg shadow-md cursor-pointer"
            />
          </motion.div>
        ))}
      </div>
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedPhoto}
              alt="Enlarged photo"
              width={600}
              height={600}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-purple-600 rounded-full p-2"
              onClick={() => setSelectedPhoto(null)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

