'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

// Brand color palette
const colors = {
  cream: '#ECEBE0',
  black: '#090706',
  purple: '#59449E',
  burgundy: '#3B060A',
}

// Actual services data from Timely
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
      { name: 'Gentleman\'s Haircut', price: '$45' },
      { name: 'Ladies Cut & Blowdry', price: '$58-$95' },
      { name: 'Men\'s Dry Cut', price: '$35' },
      { name: 'Primary School Child Wash/Cut/Blowdry', price: '$50' },
    ],
  },
  {
    category: 'Organic Colours',
    services: [
      { name: 'Balayage/Ombre Long', price: '$280' },
      { name: 'Balayage/Ombre Mid', price: '$250' },
      { name: 'Full Head Colour', price: '$120-$180' },
      { name: 'Root Touch Up', price: '$80-$120' },
    ],
  },
]

// Gallery images
const galleryImages = [
  { id: 1, src: '/images/gallery/img1.jpg', alt: 'Hair styling 1' },
  { id: 2, src: '/images/gallery/img2.jpg', alt: 'Hair styling 2' },
  { id: 3, src: '/images/gallery/img3.jpg', alt: 'Hair styling 3' },
  { id: 4, src: '/images/gallery/img4.jpg', alt: 'Hair styling 4' },
  { id: 5, src: '/images/gallery/img5.jpg', alt: 'Hair styling 5' },
  { id: 6, src: '/images/gallery/img6.jpg', alt: 'Hair styling 6' },
  { id: 7, src: '/images/gallery/img7.jpg', alt: 'Hair styling 7' },
  { id: 8, src: '/images/gallery/img8.jpg', alt: 'Hair styling 8' },
  { id: 9, src: '/images/gallery/img9.jpg', alt: 'Hair styling 9' },
]

// Actual Timely booking URL
const BOOKING_URL = 'https://book.gettimely.com/Booking/Location/284936?mobile=True&params=%253fclient-login%253dtrue'

export default function Home() {
  return (
    <div style={{ backgroundColor: colors.cream, color: colors.black }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md" style={{ backgroundColor: `${colors.cream}cc` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Lounge Hair Studio"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="#gallery" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Gallery
            </a>
            <a href="#contact" className="text-sm font-medium hover:opacity-70 transition-opacity">
              Contact
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg font-medium text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.purple }}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight" style={{ color: colors.black }}>
            Luxury Hair Styling
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-80" style={{ color: colors.black }}>
            Experience sophistication and elegance at Lounge Hair Studio
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: colors.purple }}
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4" style={{ color: colors.black }}>
            Our Services
          </h2>
          <p className="text-center text-lg opacity-70 mb-16" style={{ color: colors.black }}>
            Discover our comprehensive range of professional hair services
          </p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((serviceGroup, idx) => (
              <Card
                key={idx}
                className="p-8 border-l-4 transition-all hover:shadow-lg"
                style={{
                  borderLeftColor: idx % 2 === 0 ? colors.purple : colors.burgundy,
                  backgroundColor: colors.cream,
                }}
              >
                <h3 className="text-2xl font-bold mb-6" style={{ color: colors.purple }}>
                  {serviceGroup.category}
                </h3>
                <div className="space-y-4">
                  {serviceGroup.services.map((service, serviceIdx) => (
                    <div key={serviceIdx} className="flex justify-between items-start pb-4 border-b border-gray-200">
                      <span className="font-medium" style={{ color: colors.black }}>
                        {service.name}
                      </span>
                      <span className="font-semibold" style={{ color: colors.burgundy }}>
                        {service.price}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: colors.burgundy }}
            >
              Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: `${colors.black}05` }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4" style={{ color: colors.black }}>
            Gallery
          </h2>
          <p className="text-center text-lg opacity-70 mb-16" style={{ color: colors.black }}>
            Showcase of our beautiful work and transformations
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" style={{ color: colors.black }}>
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 flex-shrink-0" style={{ color: colors.purple }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: colors.black }}>
                    Location
                  </h3>
                  <p className="opacity-70">29F Silverdale Street, Silverdale Village, Auckland 0932</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 flex-shrink-0" style={{ color: colors.purple }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: colors.black }}>
                    Phone
                  </h3>
                  <a href="tel:+64942681113" className="opacity-70 hover:opacity-100 transition-opacity">
                    (09) 426 8113
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 flex-shrink-0" style={{ color: colors.purple }} />
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: colors.black }}>
                    Email
                  </h3>
                  <a href="mailto:pretoriusmott69@gmail.com" className="opacity-70 hover:opacity-100 transition-opacity">
                    pretoriusmott69@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://www.facebook.com/people/Lounge-Hair-Studio/61580304054980/?checkpoint_src=any"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                  title="Follow us on Facebook"
                >
                  <Facebook className="w-8 h-8" style={{ color: colors.purple }} />
                </a>
                <a
                  href="https://www.instagram.com/_loungehairstudio_?igsh=aXZ5MGVkNjZkY3Z0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-110"
                  title="Follow us on Instagram"
                >
                  <Instagram className="w-8 h-8" style={{ color: colors.burgundy }} />
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <Card
              className="p-8 flex flex-col justify-center"
              style={{
                backgroundColor: colors.cream,
                borderLeft: `4px solid ${colors.purple}`,
              }}
            >
              <h3 className="text-2xl font-bold mb-4" style={{ color: colors.black }}>
                Ready to Transform?
              </h3>
              <p className="opacity-70 mb-6">
                Book your appointment today and experience the luxury of Lounge Hair Studio. Our expert stylists are ready to create your perfect look.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-semibold text-white text-center transition-all hover:shadow-lg hover:scale-105"
                style={{ backgroundColor: colors.purple }}
              >
                Book Now
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderTopColor: `${colors.black}20` }}>
        <div className="max-w-6xl mx-auto text-center opacity-70">
          <p>&copy; 2024 Lounge Hair Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
