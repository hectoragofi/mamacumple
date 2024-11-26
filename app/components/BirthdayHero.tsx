'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export function BirthdayHero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold text-purple-800 mb-4">
          ¡Feliz Cumpleaños, Mamá!
        </h1>
        <p className="text-2xl text-purple-600">Celebrando una vida llena de amor y alegría</p>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute"
      >
        <Sparkles className="text-yellow-400 w-64 h-64 opacity-50" />
      </motion.div>
    </section>
  )
}

