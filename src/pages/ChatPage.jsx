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
    <div className="min-h-screen  flex items-center justify-center  ">
      <div className="w-full max-w-6xl h-[70vh] bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden transition-all duration-300 ease-in-out">
        {/* Sidebar */}
        <div
          className="md:w-1/4 p-6 flex flex-col gap-4 transition-shadow shadow-lg"
          style={{
            background: "#333333",
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
          }}
        >
          <h2 className="text-3xl font-extrabold mb-6 text-white">Chats</h2>
          <ul className="space-y-3 flex-1 overflow-y-auto">
            {users.map((user) => (
              <li
                key={user}
                onClick={() => setSelectedUser(user)}
                className={`cursor-pointer p-3 rounded-lg font-semibold text-lg transition-all hover:scale-105 ${
                  selectedUser === user
                    ? "bg-white text-black"
                    : "bg-transparent hover:bg-gray-500 text-white"
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
          <div className="bg-gray-900 text-white p-4 shadow-md ">
            <h1 className="text-lg font-bold">Chat with {selectedUser}</h1>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto px-6 pt-4 space-y-3 pb-12 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg shadow-md max-w-xs text-sm font-medium transition duration-200 ease-in-out ${
                    message.sender === "user"
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 bg-gray-100 border-t border-gray-300 flex flex-wrap gap-3 shadow-md">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => sendMessage(reply)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Message Input Section */}
          <div className="p-4 bg-gray-100 border-t border-gray-300 flex items-center gap-3 shadow-md">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition duration-200 ease-in-out"
            />
            <button
              onClick={() => sendMessage()}
              className="bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md transition duration-200 ease-in-out"
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
