import { useState, useEffect } from "react";

function ChatPage() {
  const users = ["User 1", "User 2", "User 3"];
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState(users[0]);

  const quickReplies = [
    "I'm interested in this product.",
    "How can I reach out?",
    "Can you share more details?",
    "What are the payment options?",
  ];

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem(selectedUser)) || [];
    setMessages(storedMessages);
  }, [selectedUser]);

  useEffect(() => {
    localStorage.setItem(selectedUser, JSON.stringify(messages));
  }, [messages, selectedUser]);

  const sendMessage = (text) => {
    const message = text || newMessage.trim();
    if (message) {
      const newMessages = [
        ...messages,
        { id: Date.now(), text: message, sender: "user" },
      ];
      setMessages(newMessages);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className=" bg-white shadow-lg rounded-lg flex flex-col h-[80vh] md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div
          className="md:w-1/4 p-6 flex flex-col gap-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
          style={{
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        >
          <h2 className="text-3xl font-extrabold text-white mb-6">Chats</h2>
          <ul className="space-y-4 flex-1 overflow-y-auto">
            {users.map((user) => (
              <li
                key={user}
                onClick={() => setSelectedUser(user)}
                className={`cursor-pointer p-4 rounded-lg text-lg font-medium transition-all hover:bg-gray-600 ${
                  selectedUser === user
                    ? "bg-gray-700 text-white"
                    : "bg-transparent text-gray-300"
                }`}
              >
                {user}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Header */}
          <div className="bg-gray-900 text-white p-4 shadow-md flex items-center justify-between">
            <h1 className="text-xl font-semibold">Chat with {selectedUser}</h1>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-4 max-w-xs rounded-xl shadow-md text-sm font-medium transition-all duration-300 ease-in-out ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 bg-gray-100 border-t border-gray-300 flex flex-wrap gap-4">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => sendMessage(reply)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200 ease-in-out"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Message Input Section */}
          <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center gap-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
            />
            <button
              onClick={() => sendMessage()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200 ease-in-out"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
