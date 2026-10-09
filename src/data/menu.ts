export interface MenuItem {
  id: string;
  category: string;
  group: string;
  name: string;
  description: string;
  price: number | null;
  image?: string;
  tags?: string[];
}

export const menuItems: MenuItem[] = [
  // Main Dishes - Chicken
  { id: 'c1', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Satay', description: 'Grilled chicken skewers with classic peanut sauce.', price: 34, image: '/images/chicken_satay.jpg' },
  { id: 'c2', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Burger', description: 'Juicy chicken patty with fresh lettuce and house sauce.', price: 43, image: '/images/chicken_burger.jpg' },
  { id: 'c3', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Fried Noodle', description: 'Stir-fried noodles with savory chicken bites.', price: 45, image: '/images/chicken_fried_noodle.jpg' },
  { id: 'c4', category: 'Main Dishes', group: 'Chicken', name: 'Capcay', description: 'Stir-fried mixed vegetables with tender chicken.', price: 45, image: '/images/capcay.jpg' },
  { id: 'c5', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Kwetiau', description: 'Flat rice noodles tossed with chicken and greens.', price: 45, image: '/images/chicken_kwetiau.jpg' },
  { id: 'c6', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Garlic', description: 'Crispy chicken pieces wok-tossed in garlic sauce.', price: 47, image: '/images/chicken_garlic.jpg' },
  { id: 'c7', category: 'Main Dishes', group: 'Chicken', name: 'Fried Rice Chicken Lahar', description: 'Signature spicy fried rice topped with chicken.', price: 48, image: '/images/fried_rice_chicken_lahar.jpg', tags: ['Spicy'] },
  { id: 'c8', category: 'Main Dishes', group: 'Chicken', name: 'Butter Fried Chicken', description: 'Deep-fried chicken coated in a rich butter sauce.', price: 46, image: '/images/butter_fried_chicken.jpg' },
  { id: 'c9', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Kung Pao', description: 'Sichuan-style chicken with peanuts and chili.', price: 46, image: '/images/chicken_kung_pao.jpg' },
  { id: 'c10', category: 'Main Dishes', group: 'Chicken', name: 'Chicken Mushroom', description: 'Sautéed chicken and fresh mushrooms in a savory sauce.', price: 46, image: '/images/chicken_mushroom.jpg' },
  { id: 'c11', category: 'Main Dishes', group: 'Chicken', name: 'Spiced Grill Chicken', description: 'Chef\'s special spiced grilled chicken with sambal.', price: 78, image: '/images/spiced_grill_chicken.jpg', tags: ['Popular', 'Chef\'s pick'] },
  
  // Main Dishes - Beef
  { id: 'b1', category: 'Main Dishes', group: 'Beef', name: 'Beef Burger', description: 'Premium beef patty with cheese, lettuce, and tomato.', price: 52, image: '/images/beef_burger.jpg' },
  { id: 'b2', category: 'Main Dishes', group: 'Beef', name: 'Sweet and Sour Beef', description: 'Tender beef strips in a tangy sweet and sour glaze.', price: 73, image: '/images/sweet_and_sour_beef.jpg' },
  { id: 'b3', category: 'Main Dishes', group: 'Beef', name: 'Uma Beef Fried Rice', description: 'Signature fried rice served with savory beef ribs.', price: 75, image: '/images/uma_beef_ribs_fried_rice.jpg' },
  { id: 'b4', category: 'Main Dishes', group: 'Beef', name: 'Grilled Beef Ribs 300 g', description: 'Generous portion of slow-grilled beef ribs.', price: 99, image: '/images/grilled_beef_ribs_300g.jpg' },
  { id: 'b5', category: 'Main Dishes', group: 'Beef', name: 'Grilled Beef Ribs with Piercing Chili Sauce', description: 'Grilled beef ribs served with an extra spicy chili sauce.', price: 105, image: '/images/grilled_beef_ribs_plecing.jpg', tags: ['Spicy'] },
  
  // Extras & Sides
  { id: 'e1', category: 'Extras & Sides', group: 'Sides', name: 'Steamed Rice', description: 'Portion of warm, fluffy white rice.', price: 9, image: '/images/steamed_rice.jpg' },
  { id: 'e2', category: 'Extras & Sides', group: 'Sides', name: 'French Fries', description: 'Crispy golden fries served hot.', price: 35, image: '/images/french_fries.jpg' },
  { id: 'e3', category: 'Extras & Sides', group: 'Sides', name: 'Sunny Side Up', description: 'Perfectly fried egg with a runny yolk.', price: 7, image: '/images/sunny_side_up.jpg' },
  
  // Dessert Treats
  { id: 'd1', category: 'Dessert Treats', group: 'Desserts', name: 'Balinese Pancake (Laklak)', description: 'Traditional mini green pancakes with coconut and palm sugar.', price: 15, image: '/images/balinese_pancake_laklak.jpg' },
  { id: 'd2', category: 'Dessert Treats', group: 'Desserts', name: 'Classic Chocolate Toast', description: 'Warm toasted bread topped with rich chocolate.', price: 35, image: '/images/classic_chocolate_toast.jpg' },
  { id: 'd3', category: 'Dessert Treats', group: 'Desserts', name: 'Rose Strawberry Toast', description: 'Artisan toast topped with fresh strawberries and sweet spread.', price: 35, image: '/images/rose_strawberry_toast.jpg' },
  { id: 'd4', category: 'Dessert Treats', group: 'Desserts', name: 'Banana Fritters', description: 'Crispy fried banana slices served warm.', price: 15, image: '/images/banana_fritters.jpg' },
  { id: 'd5', category: 'Dessert Treats', group: 'Desserts', name: 'Rissole', description: 'Savory fried pastry roll with a creamy filling.', price: 16, image: '/images/rissole.jpg' },
  { id: 'd6', category: 'Dessert Treats', group: 'Desserts', name: 'Klepon', description: 'Sweet pandan rice balls coated in coconut, bursting with palm sugar.', price: 5, image: '/images/klepon.jpg' },
  
  // Coffee & Drinks
  { id: 'k1', category: 'Coffee & Drinks', group: 'Coffee', name: 'Latte', description: 'Smooth espresso mixed with steamed milk.', price: null },
  { id: 'k2', category: 'Coffee & Drinks', group: 'Coffee', name: 'Cappuccino', description: 'Rich espresso layered with frothy milk.', price: null },
  { id: 'k3', category: 'Coffee & Drinks', group: 'Coffee', name: 'Espresso', description: 'A bold, concentrated shot of house blend coffee.', price: null },
  { id: 'k4', category: 'Coffee & Drinks', group: 'Coffee', name: 'Iced Coffee', description: 'Chilled coffee served over ice for a refreshing boost.', price: null },
  { id: 'k5', category: 'Coffee & Drinks', group: 'Drinks', name: 'Iced Tea', description: 'Cold brewed tea served with a hint of lemon.', price: null, image: '/images/iced-tea.jpg' },
  { id: 'k6', category: 'Coffee & Drinks', group: 'Drinks', name: 'Fresh Juice', description: 'Freshly blended fruit juice, packed with vitamins.', price: null, image: '/images/green-drinks.jpg' },
];
