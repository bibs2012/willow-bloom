import React, { useState, useEffect } from 'react';
import { Heart, Search, ShoppingBag, User, MapPin, Instagram, Linkedin, Phone, Mail, X } from 'lucide-react';
import logo from './assets/logo.png';
const WillowsBloomsLanding = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showSubscriptionDialog, setShowSubscriptionDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('GIFTS');
  const [wishlistItems, setWishlistItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowSubscriptionDialog(true);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const toggleWishlist = (productId) => {
    setWishlistItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const Dialog = () => {
    if (!showDialog) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 max-w-md w-full mx-4 relative">
          <button 
            onClick={() => setShowDialog(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-xl font-light text-gray-900 mb-4">Coming Soon</h3>
          <p className="text-gray-600 mb-6">
            We are working diligently to make this feature available to you as soon as possible. 
            Please stay tuned for updates.
          </p>
          <button
            onClick={() => setShowDialog(false)}
            className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    );
  };

  const SubscriptionDialog = () => {
    if (!showSubscriptionDialog) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 max-w-md w-full mx-4 relative">
          <button 
            onClick={() => setShowSubscriptionDialog(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
          <h3 className="text-xl font-light text-gray-900 mb-4">Thank You</h3>
          <p className="text-gray-600 mb-6">
            We will get in touch with you soon. Thank you for your interest in Willows & Blooms.
          </p>
          <button
            onClick={() => setShowSubscriptionDialog(false)}
            className="w-full bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const products = [
    {
      id: 1,
      name: "Royal Velvet Chocolate Cake",
      category: "Artisan Cakes",
      delivery: "Delivery in 60 mins",
      price: "₹2500",
      image: "https://amintiri.in/cdn/shop/products/Amintiri01003.jpg?v=1613118683&width=1100",
      badge: "LIMITED EDITION",
      preOrder: false
    },
    {
      id: 2,
      name: "Platinum Rose Bouquet",
      category: "Luxury Bouquets", 
      price: "₹5950",
      image: "https://imgcdn.floweraura.com/IMG_2065_0_0.jpg",
      badge: "EXCLUSIVE COLLECTION",
      preOrder: false
    },
    {
      id: 3,
      name: "Executive Leather Portfolio",
      delivery: "Delivery in 60 mins",
      category: "Corporate Gifts",
      price: "₹3100",
      image: "https://www.leathertalks.com/cdn/shop/products/IMG_8825_1600x.jpg?v=1667901670",
      badge: "BESPOKE COLLECTION",
      preOrder: false
    },
    {
      id: 4,
      name: "Artisan Macarons Collection",
      delivery: "Delivery in 30 mins",
      category: "Artisan Cakes",
      price: "₹1000",
      image: "https://bizu.ph/cdn/shop/files/Bizu_Special_Box_of_8_Assorted_Macarons-Black.webp?v=1741770198",
      badge: "EXCLUSIVE ",
      preOrder: false
    },
    {
      id: 5,
      name: "Signature Red Velvet Cake",
      category: "Artisan Cakes",
      delivery: "Delivery in 45 mins",
      price: "₹1800",
      image: "https://imperialsugar.com/wp-content/uploads/sites/6/2024/07/chef-eddys-signature-red-velvet-cake-imperial-1.webp",
      badge: "BESTSELLER",
      preOrder: false
    },
    {
      id: 6,
      name: "Classic Tiramisu",
      category: "Artisan Cakes",
      delivery: "Delivery in 60 mins",
      price: "₹2200",
      image: "https://cdn.uengage.io/uploads/7175/image-542796-1746625079.jpeg",
      badge: "ITALIAN SPECIAL",
      preOrder: false
    },
    {
      id: 7,
      name: "Premium Wine Gift Set",
      category: "Corporate Gifts",
      delivery: "Delivery in 24 hours",
      price: "₹2500",
      image: "https://www.stallionbarware.com/cdn/shop/products/639923e4-eb45-47e4-8c3b-1692a346fd1b.jpg?v=1642842441",
      badge: "LUXURY COLLECTION",
      preOrder: false
    },
    {
      id: 8,
      name: "The Gilded Desk Gift Set ",
      category: "Corporate Gifts",
      delivery: "Delivery in 48 hours",
      price: "₹3800",
      image: "https://www.nicobar.com/cdn/shop/files/NBI034441_4_1024x.jpg?v=1722282514",
      badge: "OFFICE ESSENTIALS",
      preOrder: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-12 text-sm">
            <div className="flex space-x-8">
              <a href="#" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-600 font-medium border-b-2 border-black pb-3">Gifts</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Cakes</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Bouquets</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Corporate</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Occasions</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Bespoke</a>
              <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Sustainability</a>
            </div>
            <div className="flex items-center space-x-6">
              <button onClick={handleLinkClick} className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              <button onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Store Locator</button>
              <button onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">Login</button>
              <button onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">
                <ShoppingBag className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Logo and Main Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="Willows & Blooms" className="w-42 h-42" />
            <h1 className="text-4xl font-light tracking-wider text-gray-900 mb-8 uppercase">
              Exclusive Gifting for Professionals
            </h1>
            <nav className="flex justify-center space-x-12 text-sm">
            <a href="#" onClick={handleLinkClick} className="text-gray-900 hover:text-gray-600 font-medium">NEW IN</a>
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">CAKES</a>
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">BOUQUETS</a>
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">CORPORATE GIFTS</a>
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">OCCASIONS</a>
            <a href="#" onClick={handleLinkClick} className="text-gray-600 hover:text-gray-900">BESPOKE SERVICES</a>
          </nav>
          </div>
          
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[400px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=1080&fit=crop" 
            alt="Luxury Collection" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white max-w-3xl px-4">
              <h2 className="text-6xl font-light mb-6 tracking-wider">MONSOON COLLECTION</h2>
              <p className="text-2xl font-light mb-8">Exclusively curated for distinguished professionals</p>
              <button 
                onClick={handleLinkClick}
                className="bg-white text-gray-900 px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Header */}
      <section className="py-12 border-b border-gray-200 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=400&fit=crop" 
            alt="Spring Collection Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-20">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light text-gray-900">EXCLUSIVE COLLECTION</h2>
            <div className="flex space-x-8">
              <button 
                onClick={() => handleCategoryChange('GIFTS')}
                className={`${selectedCategory === 'GIFTS' ? 'text-gray-900 font-medium border-b border-gray-900' : 'text-gray-600 hover:text-gray-900'} pb-1`}
              >
                GIFTS
              </button>
              <button 
                onClick={() => handleCategoryChange('CAKES')}
                className={`${selectedCategory === 'CAKES' ? 'text-gray-900 font-medium border-b border-gray-900' : 'text-gray-600 hover:text-gray-900'} pb-1`}
              >
                CAKES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products
              .filter(product => {
                if (selectedCategory === 'GIFTS') {
                  return product.category === 'Corporate Gifts' || product.category === 'Luxury Bouquets';
                } else if (selectedCategory === 'CAKES') {
                  return product.category === 'Artisan Cakes';
                }
                return true;
              })
              .map((product) => (
                <div 
                  key={product.id}
                  className="group relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Badge */}
                  <div className="absolute left-0 top-24 z-10">
                    <div className="bg-white px-2 py-1 text-xs font-medium text-gray-900 transform -rotate-90 origin-left transition-transform duration-300 group-hover:scale-110">
                      {product.badge}
                    </div>
                  </div>

                  {/* Wishlist Heart */}
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute right-4 top-4 z-10 p-1 transform transition-all duration-300 hover:scale-110"
                  >
                    <Heart 
                      className={`h-5 w-5 transition-all duration-300 ${
                        wishlistItems.has(product.id) 
                          ? 'fill-red-500 text-red-500 scale-110' 
                          : 'text-gray-400 hover:text-gray-600'
                      }`} 
                    />
                  </button>

                  {/* Pre-order Badge */}
                  {product.preOrder && (
                    <div className="absolute right-4 bottom-4 z-10 transform transition-all duration-300 group-hover:scale-105">
                      <span className="bg-gray-900 text-white px-2 py-1 text-xs font-medium">
                        PRE ORDER
                      </span>
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative bg-gray-100 mb-4 overflow-hidden rounded-lg">
                    <div className="aspect-w-1 aspect-h-1">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className={`w-full h-96 object-cover transition-all duration-500 ${
                          hoveredProduct === product.id 
                            ? 'scale-110 transform' 
                            : 'scale-100'
                        }`}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-1 transform transition-all duration-300 group-hover:translate-y-1">
                    <h3 className="text-sm font-medium text-gray-900 hover:text-gray-600 cursor-pointer transition-colors duration-300">{product.name}</h3>
                    {product.delivery && (
                      <p className="text-xs text-gray-600">{product.delivery}</p>
                    )}
                    <p className="text-sm text-gray-900 font-medium">{product.price}</p>
                  </div>

                  {/* Quick Add Button */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <button 
                      onClick={handleLinkClick}
                      className="w-full bg-gray-900 text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                    >
                      Quick Add
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium text-gray-900 mb-4">ARTISAN CRAFTED</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Each piece is meticulously handcrafted by master artisans using only the finest ingredients and materials.
              </p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium text-gray-900 mb-4">LIMITED AVAILABILITY</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Exclusive collections with limited quantities to ensure rarity and maintain our commitment to excellence.
              </p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-105">
              <h3 className="text-lg font-medium text-gray-900 mb-4">CORPORATE EXCELLENCE</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Trusted by Fortune 500 companies for executive gifting and corporate milestone celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">STAY INFORMED</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Be the first to discover our new collections and exclusive offers.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:border-gray-900"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
           
            <div className=" text-center md:text-left">
            {/* <img src={logo} alt="Willows & Blooms" className="w-32 h-32" /> */}
              <h3 className="text-lg font-light tracking-wider mb-2">WILLOWS & BLOOMS</h3>
              <p className="text-sm text-gray-400">Crafting moments of distinction</p>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 8095056886</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Bangaluru, Karnataka</span>
              </div>
             
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Willows & Blooms. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add Dialog components at the end of the main div */}
      <Dialog />
      <SubscriptionDialog />
    </div>
  );
};

export default WillowsBloomsLanding;