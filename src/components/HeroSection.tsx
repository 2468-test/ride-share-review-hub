
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, MapPin, Calendar, Users, Star } from 'lucide-react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('ride');

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Text */}
          <div className="animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey Starts Here
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Find the perfect ride or discover your next car through trusted reviews. 
              Connect with drivers and fellow car enthusiasts in your community.
            </p>
          </div>

          {/* Search Card */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 shadow-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Tab Selector */}
            <div className="flex bg-gray-100 p-1 rounded-lg mb-6 max-w-xs mx-auto">
              <button
                onClick={() => setActiveTab('ride')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'ride'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Find Ride
              </button>
              <button
                onClick={() => setActiveTab('review')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'review'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Car Reviews
              </button>
            </div>

            {/* Ride Search Form */}
            {activeTab === 'ride' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="From location"
                      className="pl-10 h-12"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="To location"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="date"
                      className="pl-10 h-12"
                    />
                  </div>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Passengers"
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
                <Button size="lg" className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Search className="h-5 w-5 mr-2" />
                  Search Rides
                </Button>
              </div>
            )}

            {/* Car Review Search Form */}
            {activeTab === 'review' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Car make (e.g., Toyota)"
                    className="h-12"
                  />
                  <Input
                    placeholder="Car model (e.g., Camry)"
                    className="h-12"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Year"
                    className="h-12"
                  />
                  <Input
                    placeholder="Price range"
                    className="h-12"
                  />
                </div>
                <Button size="lg" className="w-full h-12 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  <Search className="h-5 w-5 mr-2" />
                  Find Reviews
                </Button>
              </div>
            )}
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Happy Riders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/80">Car Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-white/80">Cities</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-white">4.8</span>
                <Star className="h-6 w-6 text-yellow-400 ml-1 fill-current" />
              </div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
