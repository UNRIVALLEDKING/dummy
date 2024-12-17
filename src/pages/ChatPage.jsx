import { useState, useEffect } from "react";
import { MessageCircle, Send, Users, Search } from "lucide-react";

function ChatPage() {
  const users = ["Sarah Miller", "John Cooper", "Emma Watson", "Michael Chen"];
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
        {
          id: Date.now(),
          text: message,
          sender: "user",
          timestamp: new Date().toLocaleTimeString(),
        },
      ];
      setMessages(newMessages);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen w-full bg-background ">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl flex flex-col h-[85vh] md:flex-row overflow-hidden border border-gray-100">
        {/* Sidebar */}
        <div className="md:w-80 bg-secondary flex flex-col">
          {/* Search and Title */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Messages
              </h2>
              <Users className="w-6 h-6 text-tri" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full bg-gray-700 text-white placeholder-gray-400 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* User List */}
          <div className="flex-1 overflow-y-auto">
            {users.map((user) => (
              <div
                key={user}
                onClick={() => setSelectedUser(user)}
                className={`cursor-pointer p-4 transition-all hover:bg-gray-700 flex items-center gap-3
                  ${selectedUser === user ? "bg-gray-700" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  {user
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-white font-medium">{user}</h3>
                  <p className="text-tri text-sm">Online</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col bg-background">
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              {selectedUser
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary">
                {selectedUser}
              </h2>
              <p className="text-tri text-sm">Active now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[70%]">
                  <div
                    className={`p-4 rounded-2xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-primary text-white"
                        : "bg-white text-secondary border border-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                  <span className="text-xs text-tri mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => sendMessage(reply)}
                className="bg-white hover:bg-gray-50 text-secondary px-4 py-2 rounded-full text-sm border border-gray-200 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-2">
              <textarea
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-transparent px-4 py-2 focus:outline-none resize-none max-h-32"
                rows={1}
              />
              <button
                onClick={() => sendMessage()}
                className="bg-primary hover:bg-opacity-90 text-white p-3 rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
