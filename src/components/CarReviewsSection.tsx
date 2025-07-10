
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, MessageCircle, Fuel, Gauge, Users } from 'lucide-react';

const CarReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2023,
      rating: 4.8,
      reviewCount: 124,
      price: '$28,000',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=250&fit=crop',
      reviewer: 'Sarah Johnson',
      reviewText: 'Excellent fuel efficiency and reliability. Perfect for daily commuting.',
      pros: ['Great fuel economy', 'Comfortable ride', 'Spacious interior'],
      cons: ['Road noise at highway speeds'],
      specs: {
        fuel: '32 MPG',
        power: '203 HP',
        seats: '5 seats'
      }
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      rating: 4.6,
      reviewCount: 89,
      price: '$24,500',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=250&fit=crop',
      reviewer: 'Mike Chen',
      reviewText: 'Sporty design with great handling. Tech features are impressive.',
      pros: ['Sporty handling', 'Modern tech', 'Good value'],
      cons: ['Limited rear space'],
      specs: {
        fuel: '31 MPG',
        power: '180 HP',
        seats: '5 seats'
      }
    },
    {
      id: 3,
      make: 'Tesla',
      model: 'Model 3',
      year: 2023,
      rating: 4.9,
      reviewCount: 256,
      price: '$42,000',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=250&fit=crop',
      reviewer: 'Alex Rivera',
      reviewText: 'Revolutionary electric vehicle with cutting-edge technology.',
      pros: ['Zero emissions', 'Advanced autopilot', 'Minimal maintenance'],
      cons: ['Charging infrastructure'],
      specs: {
        fuel: '130 MPGe',
        power: '283 HP',
        seats: '5 seats'
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Car Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from verified owners to help you make the right choice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={review.id} className="group hover:shadow-xl transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={review.image}
                  alt={`${review.make} ${review.model}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-white/90 text-gray-900">
                  {review.year}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    {review.make} {review.model}
                  </CardTitle>
                  <div className="text-lg font-bold text-blue-600">
                    {review.price}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(review.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{review.rating}</span>
                  <span className="text-gray-500">({review.reviewCount} reviews)</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Specs */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 mr-1" />
                    {review.specs.fuel}
                  </div>
                  <div className="flex items-center">
                    <Gauge className="h-4 w-4 mr-1" />
                    {review.specs.power}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {review.specs.seats}
                  </div>
                </div>

                {/* Review */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-gray-700 text-sm italic">
                    "{review.reviewText}"
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    - {review.reviewer}
                  </p>
                </div>

                {/* Pros */}
                <div>
                  <h4 className="text-sm font-semibold text-green-600 mb-2">Pros:</h4>
                  <div className="space-y-1">
                    {review.pros.map((pro, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-600">
                        <ThumbsUp className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {pro}
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Read Full Review
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarReviewsSection;
