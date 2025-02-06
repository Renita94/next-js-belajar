import { Home, Search, FileText, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrderHistory() {
  return (
    (<div className="max-w-md mx-auto h-screen flex flex-col bg-white">
      {/* Status Bar */}
      <div className="p-4 flex items-center justify-between text-sm">
        <span>04:40</span>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-black" />
          <div className="h-3 w-3 rounded-full bg-black" />
          <div className="h-3 w-3 rounded-full bg-black" />
        </div>
      </div>
      {/* Header and Tabs */}
      <div className="px-4 pb-2">
        <h1 className="text-xl font-semibold mb-4">Orders</h1>
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent h-auto gap-4">
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:shadow-none rounded-none">
              History
            </TabsTrigger>
            <TabsTrigger
              value="ongoing"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:shadow-none rounded-none">
              Ongoing
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-green-500 data-[state=active]:shadow-none rounded-none">
              Scheduled
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {/* Order List */}
      <div className="flex-1 overflow-auto px-4">
        <div className="space-y-4 py-4">
          <OrderItem
            icon="🍖"
            name="Nasi Goreng Tomboy, BSD"
            status="Food delivered"
            time="Yesterday, 19:33"
            hasChat />
          <OrderItem
            icon="🛵"
            iconBg="bg-green-100"
            name="Jalan Alintara"
            status="Trip completed"
            time="Yesterday, 15:12" />
          <OrderItem
            icon="🍖"
            name="KOI The, AEON Mall BSD"
            status="Food delivered"
            time="15 Jul, 14:42" />
          <OrderItem
            icon="🍕"
            name="Pizza Hut Delivery - PHD, Cisauk Lapan BSD"
            status="Food delivered"
            time="15 Jul, 14:09" />
          <OrderItem
            icon="🍖"
            name="Auntie Anne's, AEON Mall"
            status="Food delivered"
            time="16 Jul, 12:04" />
          <OrderItem
            icon="🍦"
            name="Cold Stone Ice Cream, Aeon Mall"
            status="Food delivered"
            time="16 Jul, 12:04" />
          <OrderItem
            icon="🍕"
            name="Pizza Hut Delivery - PHD, Cisauk Lapan BSD"
            status="Food delivered"
            time="16 Jul, 11:45" />
        </div>
      </div>
      {/* Bottom Navigation */}
      <div className="border-t flex justify-around py-2">
        <Button variant="ghost" size="icon" className="flex flex-col gap-1 h-auto py-2">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col gap-1 h-auto py-2">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex flex-col gap-1 h-auto py-2 text-green-500">
          <FileText className="w-6 h-6" />
          <span className="text-xs">Orders</span>
        </Button>
        <Button variant="ghost" size="icon" className="flex flex-col gap-1 h-auto py-2">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Chat</span>
        </Button>
      </div>
    </div>)
  );
}

function OrderItem({
  icon,
  iconBg = "bg-red-100",
  name,
  status,
  time,
  hasChat = false
}) {
  return (
    (<div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center text-lg`}>{icon}</div>
        <div>
          <h3 className="font-medium text-sm">{name}</h3>
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <span>{status}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
      {hasChat && (
        <Button
          size="sm"
          variant="outline"
          className="text-green-500 border-green-500 h-8">
          <MessageCircle className="w-4 h-4 mr-1" />
          Chat
        </Button>
      )}
    </div>)
  );
}

