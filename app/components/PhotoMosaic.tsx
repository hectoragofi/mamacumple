'use client'

import { useState } from 'react'
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
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  return (
    <div className="photo-mosaic">
      {photos.map((photo, index) => (
        <motion.img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="mosaic-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  )
}

