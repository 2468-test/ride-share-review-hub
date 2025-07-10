
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Clock, DollarSign, Star, Users, Car } from 'lucide-react';

const RideSharingSection = () => {
  const rides = [
    {
      id: 1,
      driver: {
        name: 'David Wilson',
        rating: 4.9,
        reviewCount: 127,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
      },
      from: 'Downtown Seattle',
      to: 'Seattle Airport',
      departureTime: '2:30 PM',
      date: 'Today',
      price: 25,
      availableSeats: 3,
      car: 'Toyota Prius',
      duration: '45 min',
      distance: '18 miles'
    },
    {
      id: 2,
      driver: {
        name: 'Jennifer Lopez',
        rating: 4.8,
        reviewCount: 89,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
      },
      from: 'University District',
      to: 'Bellevue Square',
      departureTime: '4:15 PM',
      date: 'Today',
      price: 18,
      availableSeats: 2,
      car: 'Honda Civic',
      duration: '35 min',
      distance: '12 miles'
    },
    {
      id: 3,
      driver: {
        name: 'Robert Kim',
        rating: 4.7,
        reviewCount: 203,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
      },
      from: 'Capitol Hill',
      to: 'Microsoft Campus',
      departureTime: '8:00 AM',
      date: 'Tomorrow',
      price: 22,
      availableSeats: 1,
      car: 'Tesla Model 3',
      duration: '28 min',
      distance: '15 miles'
    }
  ];

  const features = [
    {
      icon: DollarSign,
      title: 'Save Money',
      description: 'Split gas costs and save up to 60% compared to solo driving'
    },
    {
      icon: Users,
      title: 'Meet People',
      description: 'Connect with like-minded commuters in your area'
    },
    {
      icon: Car,
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint by sharing rides'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Available Rides
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect ride match and travel comfortably with verified drivers
          </p>
        </div>

        {/* Rides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {rides.map((ride, index) => (
            <Card key={ride.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                      <AvatarFallback>{ride.driver.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{ride.driver.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600">
                          {ride.driver.rating} ({ride.driver.reviewCount})
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{ride.car}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Route */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="font-medium">{ride.from}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="font-medium">{ride.to}</span>
                  </div>
                </div>

                {/* Trip Details */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{ride.departureTime}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{ride.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">{ride.date}</span>
                  </div>
                  <div>
                    <span>{ride.distance}</span>
                  </div>
                </div>

                {/* Price and Seats */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    ${ride.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    {ride.availableSeats} seats left
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Book Ride
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="mr-4">
            Offer a Ride
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Find More Rides
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RideSharingSection;
