'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  name: string
  price: string
  description: string
  benefits: string[]
  linkText: string
}

export const PlanItem = (props: Props) => {
  const { name, price, description, benefits, linkText } = props

  return (
    <div className="h-fit lg:h-[500px] w-full lg:w-1/3 bg-[#0f0f0f] flex flex-col rounded-xl justify-between px-6 sm:px-20 lg:px-6 hover:bg-[#151515]">
      <div className="flex justify-between lg:flex-col mt-8 lg:mt-0 gap-4">
        <div>
          <h3 className="text-4xl font-bold lg:mt-8 text-center">{name}</h3>
          <div className="flex flex-col items-center mt-8">
            <p className="text-2xl font-bold">{price}</p>
            <p className="text-center px-6">{description}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-3 lg:mt-8 list-disc list-inside">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-8 lg:mt-0 mb-12 mx-auto"
      >
        <Link
          className="px-12 py-4 font-bold rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7]"
          href="/login"
        >
          {linkText}
        </Link>
      </motion.div>
    </div>
  )
}
