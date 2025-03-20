
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

// Define the Order interfaces
interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
}

interface PaymentInfo {
  method: string;
  details?: string;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: "pending" | "delivered" | "canceled";
  address: Address;
  payment: PaymentInfo;
}

export default function Orders() {
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Load orders from localStorage
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case "credit":
        return "Cartão de Crédito";
      case "debit":
        return "Cartão de Débito";
      case "pix":
        return "PIX";
      case "cash":
        return "Dinheiro";
      default:
        return method;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Meus Pedidos</h1>

      {orders.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-medium mb-4">Você ainda não fez nenhum pedido.</h2>
          <Button onClick={() => window.location.href = "/"}>Fazer Pedido</Button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Pedido #{order.id.slice(-6)}</CardTitle>
                    <CardDescription>{new Date(order.date).toLocaleDateString('pt-BR')}</CardDescription>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status === "pending" && "Em andamento"}
                    {order.status === "delivered" && "Entregue"}
                    {order.status === "canceled" && "Cancelado"}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>
                        {item.quantity}x {item.name}
                      </span>
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Endereço de Entrega</h3>
                    <p className="text-sm">{order.address.street}, {order.address.number}</p>
                    <p className="text-sm">{order.address.neighborhood}</p>
                    <p className="text-sm">{order.address.city}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Forma de Pagamento</h3>
                    <p className="text-sm">{getPaymentMethodDisplay(order.payment.method)}</p>
                    {order.payment.details && (
                      <p className="text-sm">{order.payment.details}</p>
                    )}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>R$ {order.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
