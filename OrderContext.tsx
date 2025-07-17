import React, { createContext, useContext, useState, ReactNode } from 'react';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveryAddress: string;
  paymentMethod: string;
  estimatedDeliveryTime: number; // in minutes
}

interface OrderContextType {
  orders: Order[];
  createOrder: (order: Omit<Order, 'id' | 'createdAt'>) => string;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  getOrderById: (orderId: string) => Order | undefined;
  getOrdersByRestaurant: (restaurantId: string) => Order[];
  getAvailableDeliveries: () => Order[];
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const createOrder = (orderData: Omit<Order, 'id' | 'createdAt'>): string => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      createdAt: new Date(),
    };
    setOrders(prev => [...prev, newOrder]);
    return newOrder.id;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status } : order
    ));
  };

  const getOrderById = (orderId: string): Order | undefined => {
    return orders.find(order => order.id === orderId);
  };

  const getOrdersByRestaurant = (restaurantId: string): Order[] => {
    return orders.filter(order => order.restaurantId === restaurantId);
  };

  const getAvailableDeliveries = (): Order[] => {
    return orders.filter(order => order.status === 'preparing' || order.status === 'out_for_delivery');
  };

  return (
    <OrderContext.Provider value={{ 
      orders, 
      createOrder, 
      updateOrderStatus, 
      getOrderById, 
      getOrdersByRestaurant,
      getAvailableDeliveries
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};