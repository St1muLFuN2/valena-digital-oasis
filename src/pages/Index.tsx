
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Music, Share } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 inline-block">
              <span className="px-3 py-1 bg-valena/10 text-valena text-sm rounded-full">PREMIER ENTERTAINMENT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">The Future of Entertainment in RoCitizens</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Elevating experiences through innovative concepts, premium venues, and unforgettable moments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-valena hover:bg-valena-dark text-white px-8 py-6 text-lg">
                Explore Events
              </Button>
              <Link to="/festival">
                <Button variant="outline" className="border-valena text-valena hover:bg-valena hover:text-white px-8 py-6 text-lg">
                  Festival Experience
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_center,rgba(62,153,112,0.1),rgba(0,0,0,0)_50%)]"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our commitment to excellence and innovation defines the Valena difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg futuristic-border">
              <div className="w-14 h-14 bg-valena/20 rounded-full flex items-center justify-center mb-4">
                <Music className="text-valena" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Venues</h3>
              <p className="text-gray-400">Experience top-tier locations designed for maximum immersion and comfort.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 rounded-lg futuristic-border">
              <div className="w-14 h-14 bg-valena/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-valena" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Events</h3>
              <p className="text-gray-400">From intimate gatherings to massive festivals, we create memorable experiences.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 rounded-lg futuristic-border">
              <div className="w-14 h-14 bg-valena/20 rounded-full flex items-center justify-center mb-4">
                <Share className="text-valena" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Focus</h3>
              <p className="text-gray-400">Building connections and creating shared experiences within RoCitizens.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Festival Promo Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Festival Preview" 
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-200 to-blue-300 text-black text-sm rounded-full">COMING SOON</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Valena Electronic Music Festival</h2>
              <p className="text-gray-300 mb-6">Experience the future of electronic music in a vibrant, immersive environment. Our festival features top artists, cutting-edge visuals, and an atmosphere like no other.</p>
              <Link to="/festival">
                <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-black font-semibold px-8 py-2">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">What Our Guests Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"The most innovative entertainment I've experienced in RoCitizens. Truly sets the standard for virtual events."</p>
              <p className="font-bold">MegaGamer2023</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"Valena's venues are top-tier. The attention to detail and atmosphere is unmatched anywhere in the game."</p>
              <p className="font-bold">RoPlayer42</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-4">"The festival was mind-blowing! Can't wait for next year's edition. This is what virtual entertainment should be."</p>
              <p className="font-bold">CityExplorer99</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-valena">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Experience Valena?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">Join us for unforgettable events, premium entertainment, and a community like no other in RoCitizens.</p>
          <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg">
            Join the Community
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
