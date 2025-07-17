export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
  available: boolean;
  isVeg: boolean;
  spiceLevel?: 'mild' | 'medium' | 'hot' | 'very_hot';
}

export const menuItems: MenuItem[] = [
  // Bella Italia (Restaurant ID: 1)
  {
    id: '1',
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil, and olive oil on thin crust',
    price: 399,
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza',
    restaurantId: '1',
    available: true,
    isVeg: true
  },
  {
    id: '2',
    name: 'Spaghetti Carbonara',
    description: 'Creamy pasta with pancetta, eggs, and parmesan cheese',
    price: 449,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pasta',
    restaurantId: '1',
    available: true,
    isVeg: false
  },
  {
    id: '3',
    name: 'Bruschetta',
    description: 'Toasted bread with tomatoes, garlic, and basil',
    price: 199,
    image: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'appetizers',
    restaurantId: '1',
    available: true,
    isVeg: true
  },
  {
    id: '4',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee and mascarpone',
    price: 249,
    image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'desserts',
    restaurantId: '1',
    available: true,
    isVeg: true
  },
  {
    id: '5',
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with mozzarella cheese',
    price: 499,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'pizza',
    restaurantId: '1',
    available: true,
    isVeg: false
  },

  // Spice Garden (Restaurant ID: 2)
  {
    id: '6',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based chicken curry with aromatic spices',
    price: 349,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '2',
    available: true,
    isVeg: false,
    spiceLevel: 'medium'
  },
  {
    id: '7',
    name: 'Paneer Tikka Masala',
    description: 'Grilled paneer in rich tomato and cream gravy',
    price: 299,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '2',
    available: true,
    isVeg: true,
    spiceLevel: 'medium'
  },
  {
    id: '8',
    name: 'Garlic Naan',
    description: 'Soft bread with garlic and herbs',
    price: 79,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bread',
    restaurantId: '2',
    available: true,
    isVeg: true
  },
  {
    id: '9',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice with spiced chicken',
    price: 399,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'rice',
    restaurantId: '2',
    available: true,
    isVeg: false,
    spiceLevel: 'hot'
  },
  {
    id: '10',
    name: 'Dal Makhani',
    description: 'Rich and creamy black lentils',
    price: 249,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '2',
    available: true,
    isVeg: true,
    spiceLevel: 'mild'
  },

  // Tokyo Sushi (Restaurant ID: 3)
  {
    id: '11',
    name: 'California Roll',
    description: 'Crab, avocado, and cucumber with sesame seeds',
    price: 599,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sushi',
    restaurantId: '3',
    available: true,
    isVeg: false
  },
  {
    id: '12',
    name: 'Salmon Sashimi',
    description: 'Fresh salmon slices served with wasabi',
    price: 799,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'sashimi',
    restaurantId: '3',
    available: true,
    isVeg: false
  },
  {
    id: '13',
    name: 'Vegetable Tempura',
    description: 'Crispy battered and fried vegetables',
    price: 399,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'appetizers',
    restaurantId: '3',
    available: true,
    isVeg: true
  },
  {
    id: '14',
    name: 'Chicken Teriyaki',
    description: 'Grilled chicken with teriyaki sauce',
    price: 549,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '3',
    available: true,
    isVeg: false
  },
  {
    id: '15',
    name: 'Miso Soup',
    description: 'Traditional Japanese soup with tofu and seaweed',
    price: 149,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'soup',
    restaurantId: '3',
    available: true,
    isVeg: true
  },

  // Punjabi Dhaba (Restaurant ID: 4)
  {
    id: '16',
    name: 'Sarson Ka Saag',
    description: 'Traditional mustard greens with makki ki roti',
    price: 279,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '4',
    available: true,
    isVeg: true,
    spiceLevel: 'medium'
  },
  {
    id: '17',
    name: 'Amritsari Kulcha',
    description: 'Stuffed bread with potato and onion filling',
    price: 149,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'bread',
    restaurantId: '4',
    available: true,
    isVeg: true
  },
  {
    id: '18',
    name: 'Chole Bhature',
    description: 'Spicy chickpeas with fluffy fried bread',
    price: 199,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '4',
    available: true,
    isVeg: true,
    spiceLevel: 'hot'
  },
  {
    id: '19',
    name: 'Lassi',
    description: 'Traditional yogurt drink with sugar or salt',
    price: 89,
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'beverages',
    restaurantId: '4',
    available: true,
    isVeg: true
  },
  {
    id: '20',
    name: 'Tandoori Chicken',
    description: 'Clay oven roasted chicken with spices',
    price: 399,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'main_course',
    restaurantId: '4',
    available: true,
    isVeg: false,
    spiceLevel: 'hot'
  }
];

export const getMenuByRestaurant = (restaurantId: string): MenuItem[] => {
  return menuItems.filter(item => item.restaurantId === restaurantId);
};

export const getMenuCategories = (restaurantId: string): string[] => {
  const items = getMenuByRestaurant(restaurantId);
  const categories = Array.from(new Set(items.map(item => item.category)));
  return categories;
};

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};