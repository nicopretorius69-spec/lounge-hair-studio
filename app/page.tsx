'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

// Services data from Timely
const servicesData = [
  {
    category: 'Bridal Services',
    services: [
      { name: 'Bridal Hairup Trial', price: '$50' },
      { name: 'Brides Hairup', price: '$150' },
      { name: 'Bridesmaid Hairup', price: '$110' },
      { name: 'Flowgirl Hairup', price: '$25' },
    ],
  },
  {
    category: 'Finishing Services & Styling',
    services: [
      { name: 'Blow Dry', price: '$46' },
      { name: 'Blow Dry with Irons', price: '$58' },
      { name: 'Express Dry', price: 'Free' },
      { name: 'Hairup Basic', price: '$89' },
      { name: 'Hairup Complex', price: '$90' },
    ],
  },
  {
    category: 'Haircuts',
    services: [
      { name: 'Consultation', price: 'Free' },
      { name: 'Fringe Trim', price: 'Free' },
      { name: "Gentleman's Haircut", price: '$45' },
      { name: 'Ladies Cut & Blowdry', price: '$58-$95' },
      { name: "Men's Dry Cut", price: '$35' },
    ],
  },
  {
    category: 'Organic Colours',
    services: [
      { name: 'Balayage', price: '$150-$250' },
      { name: 'Full Head Colour', price: '$120-$180' },
      { name: 'Colour Correction', price: 'POA' },
      { name: 'Toner', price: '$40-$60' },
    ],
  },
  {
    category: 'Treatments',
    services: [
      { name: 'Keratin Treatment', price: '$150-$200' },
      { name: 'Deep Conditioning', price: '$30' },
      { name: 'Scalp Treatment', price: '$40' },
    ],
  },
  {
    category: 'Packages',
    services: [
      { name: 'Bridal Package', price: 'POA' },
      { name: 'Event Package', price: 'POA' },
    ],
  },
]

// Gallery images - using downloaded images
const galleryImages = [
  '/images/gallery/img1.jpg',
  '/images/gallery/img2.jpg',
  '/images/gallery/img3.jpg',
  '/images/gallery/img4.jpg',
  '/images/gallery/img5.jpg',
  '/images/gallery/img6.jpg',
  '/images/gallery/img7.jpg',
  '/images/gallery/img8.jpg',
  '/images/gallery/img9.jpg',
]

// Color palette - using CSS variables
const colors = {
  cream: '#ECEBE0',
  charcoal: '#2C2C2C',
  roseGold: '#C9A876',
  white: '#FFFFFF',
}

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu when a link is clicked
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    // Scroll to section
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div style={{ backgroundColor: colors.cream, color: colors.charcoal }} className="min-h-screen">
      {/* Navigation */}
      <nav 
        style={{ 
          backgroundColor: colors.cream,
          borderBottomColor: colors.roseGold,
        }} 
        className="fixed top-0 w-full backdrop-blur-sm z-50 border-b"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo - SIGNIFICANTLY ENLARGED to match original design prominence */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Lounge Hair Studio by Chante"
              width={280}
              height={140}
              className="w-64 h-32"
              priority
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
              SERVICES
            </a>
            <a href="#gallery" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
              GALLERY
            </a>
            <a href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.charcoal }}>
              CONTACT
            </a>
          </div>

          {/* Desktop Book Now Button - STATIC ROSE GOLD with charcoal text */}
          <a
            href="https://bookings.gettimely.com/alternatives/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F284936%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              backgroundColor: colors.roseGold, 
              color: colors.charcoal,
              textDecoration: 'none',
            }}
            className="hidden md:inline-block px-6 py-2 rounded font-medium text-sm"
          >
            BOOK NOW
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: colors.charcoal }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{ backgroundColor: colors.cream, borderTopColor: colors.roseGold }}
            className="md:hidden border-t"
          >
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => handleNavClick('services')}
                className="block w-full text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: colors.charcoal }}
              >
                SERVICES
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className="block w-full text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: colors.charcoal }}
              >
                GALLERY
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block w-full text-left text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: colors.charcoal }}
              >
                CONTACT
              </button>
              <a
                href="https://bookings.gettimely.com/alternatives/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F284936%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  backgroundColor: colors.roseGold, 
                  color: colors.charcoal,
                  textDecoration: 'none',
                }}
                className="block w-full text-center px-6 py-2 rounded font-medium text-sm mt-2"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Image */}
      <section 
        className="pt-40 pb-20 px-6 text-center relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl font-playfair font-bold mb-6 tracking-tight"
            style={{ color: colors.charcoal }}
          >
            Elevate Your Style at The Lounge
          </h1>
          <p 
            className="text-lg md:text-xl mb-8 font-lora italic"
            style={{ color: colors.charcoal }}
          >
            Bespoke hair artistry by Chante in the heart of Silverdale.
          </p>
          {/* Hero BOOK NOW Button - STATIC ROSE GOLD with charcoal text */}
          <a
            href="https://bookings.gettimely.com/alternatives/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F284936%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: colors.roseGold,
              color: colors.charcoal,
              borderColor: colors.roseGold,
              display: 'inline-block',
              textDecoration: 'none',
            }}
            className="px-8 py-3 rounded font-medium text-lg border-2"
          >
            BOOK NOW
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        className="py-24 px-6"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-5xl font-playfair font-bold text-center mb-4"
            style={{ color: colors.charcoal }}
          >
            Our Services
          </h2>
          <p 
            className="text-center text-lg mb-16 font-lora"
            style={{ color: colors.charcoal }}
          >
            Discover our comprehensive range of professional hair services
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((category) => (
              <div
                key={category.category}
                style={{ 
                  borderLeftColor: colors.roseGold,
                  backgroundColor: colors.white,
                }}
                className="p-6 border-l-4 rounded shadow-sm"
              >
                <h3 
                  className="text-2xl font-playfair font-bold mb-4"
                  style={{ color: colors.roseGold }}
                >
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.services.slice(0, 3).map((service) => (
                    <div key={service.name} className="flex justify-between items-center">
                      <span className="font-lora" style={{ color: colors.charcoal }}>
                        {service.name}
                      </span>
                      <span className="font-semibold" style={{ color: colors.roseGold }}>
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category.category)}
                  className="mt-4 text-sm font-medium hover:opacity-70 transition-opacity"
                  style={{ color: colors.roseGold }}
                >
                  {expandedCategory === category.category ? 'SHOW LESS' : 'SHOW MORE'}
                </button>
                {expandedCategory === category.category && (
                  <div className="mt-4 pt-4 border-t space-y-3" style={{ borderTopColor: colors.roseGold }}>
                    {category.services.slice(3).map((service) => (
                      <div key={service.name} className="flex justify-between items-center">
                        <span className="font-lora" style={{ color: colors.charcoal }}>
                          {service.name}
                        </span>
                        <span className="font-semibold" style={{ color: colors.roseGold }}>
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p 
            className="text-center mt-12 text-sm italic font-lora"
            style={{ color: colors.charcoal }}
          >
            Prices are starting points and may vary based on hair length and complexity.
          </p>
          
          {/* BOOK NOW Button under services - STATIC ROSE GOLD with charcoal text */}
          <div className="flex justify-center mt-8">
            <a
              href="https://bookings.gettimely.com/alternatives/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F284936%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: colors.roseGold,
                color: colors.charcoal,
                padding: "12px 32px",
                borderRadius: "4px",
                fontFamily: "var(--font-lora)",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery"
        className="py-24 px-6"
        style={{ backgroundColor: colors.white }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-5xl font-playfair font-bold text-center mb-4"
            style={{ color: colors.charcoal }}
          >
            The Gallery
          </h2>
          <p 
            className="text-center text-lg mb-16 font-lora italic"
            style={{ color: colors.charcoal }}
          >
            Artistry in Motion
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square rounded overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-4 font-lora" style={{ color: colors.charcoal }}>
              Follow us on Facebook for more
            </p>
            {/* Social Media Links - Icons with rose gold color */}
            <div className="flex gap-6 justify-center items-center">
              <a
                href="https://www.facebook.com/people/Lounge-Hair-Studio/61580304054980/?checkpoint_src=any"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="Follow us on Facebook"
              >
                {/* Facebook Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: colors.roseGold }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/_loungehairstudio_?igsh=aXZ5MGVkNjZkY3Z0"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                title="Follow us on Instagram"
              >
                {/* Instagram Icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ color: colors.roseGold }}>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.558-2.353 1.294-.735.735-1.03 1.574-1.293 2.353-.266.788-.467 1.658-.527 2.936C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.263.779.558 1.618 1.294 2.353.735.735 1.574 1.03 2.353 1.293.788.266 1.658.467 2.936.527C8.333 23.992 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.779-.263 1.618-.558 2.353-1.294.735-.735 1.03-1.574 1.293-2.353.266-.788.467-1.658.527-2.936.055-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.263-.779-.558-1.618-1.294-2.353-.735-.735-1.574-1.03-2.353-1.293-.788-.266-1.658-.467-2.936-.527C15.667.008 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className="py-24 px-6"
        style={{ backgroundColor: colors.cream }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-5xl font-playfair font-bold text-center mb-4"
            style={{ color: colors.charcoal }}
          >
            Visit The Studio
          </h2>
          <p 
            className="text-center text-lg mb-16 font-lora"
            style={{ color: colors.charcoal }}
          >
            Located in the heart of Silverdale Village, Lounge Hair Studio offers a private, sophisticated space where your hair goals become reality.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Location */}
            <div>
              <h3 
                className="text-xl font-playfair font-bold mb-4"
                style={{ color: colors.roseGold }}
              >
                LOCATION
              </h3>
              <p className="font-lora" style={{ color: colors.charcoal }}>
                29E Silverdale Street<br />
                Silverdale Village<br />
                Auckland 0932<br />
                New Zealand
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 
                className="text-xl font-playfair font-bold mb-4"
                style={{ color: colors.roseGold }}
              >
                PHONE
              </h3>
              <a 
                href="tel:+64942681113"
                className="font-lora hover:opacity-70 transition-opacity"
                style={{ color: colors.charcoal }}
              >
                (09) 426 8113
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 
                className="text-xl font-playfair font-bold mb-4"
                style={{ color: colors.roseGold }}
              >
                OPENING HOURS
              </h3>
              <div className="font-lora text-sm space-y-1" style={{ color: colors.charcoal }}>
                <p>Mon: 9:00 – 3:00</p>
                <p>Tue–Wed: 9:00 – 5:00</p>
                <p>Thu: 9:00 – 8:00</p>
                <p>Fri: 9:00 – 3:00</p>
                <p>Sat: 9:00 – 5:00</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 
              className="text-xl font-playfair font-bold mb-4"
              style={{ color: colors.charcoal }}
            >
              READY FOR A CHANGE?
            </h3>
            {/* Book Online Now Button - STATIC ROSE GOLD with charcoal text */}
            <a
              href="https://bookings.gettimely.com/alternatives/book?uri=https%3A%2F%2Fbook.gettimely.com%2FBooking%2FLocation%2F284936%3Fmobile%3DTrue%26params%3D%25253fclient-login%25253dtrue"
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                backgroundColor: colors.roseGold,
                color: colors.charcoal,
                display: 'inline-block',
                padding: '12px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
              className="font-medium text-lg"
            >
              Book Online Now
            </a>
          </div>

          {/* Testimonial */}
          <div 
            className="text-center py-12 px-6 rounded"
            style={{ backgroundColor: colors.white }}
          >
            <p 
              className="text-lg font-lora italic mb-4"
              style={{ color: colors.charcoal }}
            >
              "Chante has an incredible eye for what works with your hair. Every visit leaves me feeling confident and beautiful."
            </p>
            <p 
              className="font-semibold"
              style={{ color: colors.roseGold }}
            >
              — Sarah M.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-6 text-center"
        style={{ backgroundColor: colors.charcoal, color: colors.white }}
      >
        <p className="font-lora text-sm">
          © 2026 Lounge Hair Studio by Chante. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
