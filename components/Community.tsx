'use client';

import { useState } from 'react';

const initialMessages = [
  {
    id: 1,
    author: 'Sarah M.',
    pet: 'Max',
    message: 'Has anyone tried the daycare service? Max would be joining a group...',
    timestamp: '2 days ago',
    replies: 3,
  },
  {
    id: 2,
    author: 'James L.',
    pet: 'Biscuit',
    message: 'Great service! Biscuit has been with Tails & Trails for 6 months now.',
    timestamp: '1 week ago',
    replies: 5,
  },
  {
    id: 3,
    author: 'Emily T.',
    pet: 'Luna',
    message: 'Looking for tips on training puppies. Anyone have recommendations?',
    timestamp: '3 days ago',
    replies: 8,
  },
];

export default function Community() {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handlePostMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        author: 'You',
        pet: 'Your Pet',
        message: newMessage,
        timestamp: 'just now',
        replies: 0,
      };
      setMessages([message, ...messages]);
      setNewMessage('');
    }
  };

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-navy mb-4">Community</h2>
        <p className="text-center text-lg text-navy/70 mb-12">
          Connect with other pet owners and share experiences.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
          <h3 className="text-xl font-bold text-navy mb-4">Share Your Story</h3>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="What would you like to share with the community?"
            className="mb-4"
            rows={4}
          />
          <button onClick={handlePostMessage} className="btn btn-primary">
            Post to Community
          </button>
        </div>

        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white rounded-2xl p-8 shadow-soft">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-bold text-navy text-lg">{msg.author}</p>
                  <p className="text-sm text-sage-600">Pet: {msg.pet}</p>
                </div>
                <p className="text-sm text-navy/60">{msg.timestamp}</p>
              </div>
              <p className="text-navy/80 mb-4">{msg.message}</p>
              <button className="text-sage-700 font-semibold text-sm hover:text-sage-600">
                {msg.replies} replies →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
