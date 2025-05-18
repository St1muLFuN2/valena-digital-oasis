
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SponsorMarquee from '@/components/SponsorMarquee';
import { Button } from '@/components/ui/button';
import { Calendar, Music, Share, Headphones, Image } from 'lucide-react';

const Festival = () => {
  // Apply a different class to the body for the festival page
  useEffect(() => {
    document.body.classList.add('festival-page');
    return () => {
      document.body.classList.remove('festival-page');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar variant="festival" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-festival-gradient overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto text-center z-10 px-4 py-32">
          <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm mb-6">MAY 25-27, 2023 • ROCITIZENS</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">VALENA<br/>ELECTRONIC MUSIC FESTIVAL</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Experience the future of music in the ultimate immersive environment
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
              Get Tickets
            </Button>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg">
              Lineup & Schedule
            </Button>
          </div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white/20 blur-md"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </section>
      
      {/* About the Festival */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="px-3 py-1 bg-gradient-to-r from-yellow-200 to-blue-300 text-black text-sm rounded-full">THE EXPERIENCE</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-white">More Than Just Music</h2>
              <p className="text-gray-300 mb-6">Valena Festival combines cutting-edge electronic music with immersive digital experiences in the heart of RoCitizens. Our three-day event features multiple stages, interactive installations, and a community of passionate music lovers.</p>
              <div className="flex space-x-2 mb-8">
                {['Music', 'Art', 'Community', 'Innovation'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-black font-semibold px-6 py-2">
                Discover Festival Map
              </Button>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Festival Experience" 
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-100 to-blue-300">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Festival Highlights</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">What makes our electronic music festival the most anticipated event in RoCitizens</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-black/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center mb-4">
                <Music className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Multiple Stages</h3>
              <p className="text-gray-700">Five unique stages featuring different electronic music genres and visual experiences.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-black/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center mb-4">
                <Headphones className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">World-Class Audio</h3>
              <p className="text-gray-700">State-of-the-art sound systems designed for the perfect listening experience.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-black/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center mb-4">
                <Image className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Visual Spectacle</h3>
              <p className="text-gray-700">Cutting-edge lighting, projections, and interactive visual elements throughout the venue.</p>
            </div>
            
            {/* Feature 4 */}
            <div className="p-6 rounded-lg bg-black/10 backdrop-blur-sm">
              <div className="w-14 h-14 bg-black/20 rounded-full flex items-center justify-center mb-4">
                <Share className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Community Spaces</h3>
              <p className="text-gray-700">Dedicated areas for relaxation, connection, and experiencing the festival community.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Artist Lineup */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Artists</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience performances from the biggest names in electronic music</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Artist 1 */}
            <div className="relative overflow-hidden group rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80" 
                alt="DJ Nova" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">DJ Nova</h3>
                <p className="text-yellow-300">Main Stage • Saturday</p>
              </div>
            </div>
            
            {/* Artist 2 */}
            <div className="relative overflow-hidden group rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80" 
                alt="ElectroBeats" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">ElectroBeats</h3>
                <p className="text-yellow-300">Techno Stage • Friday</p>
              </div>
            </div>
            
            {/* Artist 3 */}
            <div className="relative overflow-hidden group rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700&q=80" 
                alt="Synthwave Collective" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-1">Synthwave Collective</h3>
                <p className="text-yellow-300">Bass Stage • Sunday</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-black font-semibold px-8 py-2 text-lg">
              View Full Lineup
            </Button>
          </div>
        </div>
      </section>
      
      {/* Sponsor Marquee */}
      <SponsorMarquee />
      
      {/* Tickets & Registration */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400 to-blue-400">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Secure Your Spot</h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">Tickets are limited and selling fast. Don't miss out on the biggest electronic music event in RoCitizens.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Ticket 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2">Standard Pass</h3>
              <div className="text-3xl font-bold mb-4">R$ 1,000</div>
              <ul className="text-left text-gray-700 mb-6 space-y-2">
                <li>✓ 3-Day Festival Access</li>
                <li>✓ General Areas</li>
                <li>✓ Basic Amenities</li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-gray-800">Buy Now</Button>
            </div>
            
            {/* Ticket 2 */}
            <div className="bg-black text-white p-8 rounded-lg shadow-xl transform scale-105">
              <div className="uppercase text-xs font-bold text-yellow-400 mb-2">Most Popular</div>
              <h3 className="text-xl font-bold mb-2">VIP Pass</h3>
              <div className="text-3xl font-bold mb-4">R$ 2,500</div>
              <ul className="text-left text-gray-300 mb-6 space-y-2">
                <li>✓ 3-Day Festival Access</li>
                <li>✓ VIP Areas & Lounges</li>
                <li>✓ Premium Amenities</li>
                <li>✓ Fast Lane Entry</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-yellow-400 to-blue-400 text-black hover:from-yellow-500 hover:to-blue-500">Buy Now</Button>
            </div>
            
            {/* Ticket 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-2">Platinum Pass</h3>
              <div className="text-3xl font-bold mb-4">R$ 5,000</div>
              <ul className="text-left text-gray-700 mb-6 space-y-2">
                <li>✓ 3-Day Festival Access</li>
                <li>✓ Backstage Access</li>
                <li>✓ Artist Meet & Greets</li>
                <li>✓ Exclusive Merchandise</li>
              </ul>
              <Button className="w-full bg-black text-white hover:bg-gray-800">Buy Now</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready for the Ultimate Experience?</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">Join thousands of music lovers for three days of unforgettable electronic music and community.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-black font-semibold px-8 py-6 text-lg">
              Get Festival Tickets
            </Button>
            <Link to="/">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg">
                Back to Valena
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer variant="festival" />
    </div>
  );
};

export default Festival;
