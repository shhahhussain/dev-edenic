"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "@/components/ui/CheckCircle"

export default function PricingPreview() {
  return (
    <section className="py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">Flexible Pricing for Every Need</h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            From one-time projects to ongoing support, we have a plan that fits you.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-card dark:bg-gray-800/50 rounded-2xl p-8 flex flex-col h-full border border-border shadow-md"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4">Simple Landing Page</h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">$2,000</p>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Single-page site</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Deployed & hosted</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-card dark:bg-gray-800/50 rounded-2xl p-8 flex flex-col h-full border border-border shadow-md"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4">Frontend MVP Showcase</h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">$2,500</p>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Responsive multi-page site</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Deployed & hosted</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Basic analytics</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group bg-card dark:bg-gray-800/50 rounded-2xl p-8 flex flex-col h-full border border-border shadow-md"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4">Business Website & Admin Panel</h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">$4,000</p>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Multi-page site</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Admin dashboard</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Basic auth</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group bg-card dark:bg-gray-800/50 rounded-2xl p-8 flex flex-col h-full border border-border shadow-md"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-gray-100 mb-4">Full Stack SaaS / MVP Dev</h3>
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">$10,000+</p>
            <ul className="space-y-2 text-muted-foreground dark:text-gray-300 mb-6 flex-grow">
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Complete MERN stack</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> Deployment included</li>
              <li className="flex items-center"><CheckCircle className="text-blue-500 mr-2" /> API & auth</li>
            </ul>
          </motion.div>
        </div>
        <div className="text-center mt-12">
            <Link href="/pricing">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                  View All Pricing Plans
                </Button>
            </Link>
        </div>
      </div>
    </section>
  )
} 