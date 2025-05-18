
import React from 'react';

// Define the sponsor type
interface Sponsor {
  id: number;
  name: string;
  imageUrl: string;
}

// Sample sponsor data
const sponsors: Sponsor[] = [
  { id: 1, name: "RoCitizens", imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80" },
  { id: 2, name: "Beats Pro", imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80" },
  { id: 3, name: "Sound Wave", imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80" },
  { id: 4, name: "Digital Audio", imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80" },
  { id: 5, name: "Wave Records", imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=100&q=80" },
];

const SponsorMarquee = () => {
  return (
    <div className="bg-black py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">Our Partners & Sponsors</h2>
      </div>
      
      <div className="marquee">
        <div className="marquee-content">
          {/* Duplicate the sponsors to create a seamless loop */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div 
              key={`${sponsor.id}-${index}`} 
              className="flex flex-col items-center justify-center px-8"
            >
              <img 
                src={sponsor.imageUrl}
                alt={sponsor.name}
                className="h-24 w-auto object-contain"
              />
              <p className="mt-2 text-white">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorMarquee;
