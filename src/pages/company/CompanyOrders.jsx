function CompanyOrders() {
  // Dummy data for orders
  const orders = [
    {
      id: 1,
      product: "Product 1",
      customer: "John Doe",
      status: "Delivered",
      price: "$30.00",
      orderDate: "2024-12-10",
    },
    {
      id: 2,
      product: "Product 2",
      customer: "Jane Smith",
      status: "Pending",
      price: "$50.00",
      orderDate: "2024-12-09",
    },
    {
      id: 3,
      product: "Product 3",
      customer: "Alice Johnson",
      status: "Shipped",
      price: "$40.00",
      orderDate: "2024-12-08",
    },
    // Add more orders as needed
  ];

  return (
    <div className="bg-background grid px-5 sm:px-10 grid-cols-10 min-h-screen  ">
      <div className="col-span-12 lg:col-span-10 lg:ml-[200px] p-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Orders</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="card bg-white shadow-lg rounded-lg overflow-hidden p-4 border border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-secondary">
                  {order.product}
                </h2>
                <span
                  className={`badge badge-md py-3 ${
                    order.status === "Delivered"
                      ? "bg-green-500"
                      : order.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  } text-white`}
                >
                  {order.status}
                </span>
              </div>
              <div className="mt-2 text-tri text-sm">
                <p>
                  <strong>Customer:</strong> {order.customer}
                </p>
                <p>
                  <strong>Order Date:</strong> {order.orderDate}
                </p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-primary font-bold">{order.price}</span>
                <button className="btn btn-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyOrders;
