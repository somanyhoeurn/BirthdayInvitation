import React from 'react';
import { Calendar, Clock, MapPin, PartyPopper, User } from 'lucide-react';

interface InvitationPageProps {
  params: Promise<{ attendeeName: string }>; // Update the type to reflect that params is a Promise
}

export default async function InvitationPage({ params }: InvitationPageProps) {
  // Await the params to resolve the Promise
  const resolvedParams = await params;
  const { attendeeName } = resolvedParams;

  const eventDetails = {
    celebrantName: "Song ThaiHour",
    date: "March 31, 2025",
    time: "8:00 PM",
    location: "Top Afterwork",
    attendeeName: attendeeName ? `Dear ${decodeURIComponent(attendeeName)}` : "Dear Guest",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float opacity-20 
              ${i % 2 === 0 ? 'text-pink-500' : 'text-purple-500'}
              ${i % 3 === 0 ? 'text-4xl' : 'text-2xl'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 max-w-md w-full relative">
        {/* Decorative corner elements */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center rotate-12">
          🎉
        </div>
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center -rotate-12">
          🎂
        </div>

        <div className="text-center space-y-6">
          <div className="flex justify-center transform hover:scale-110 transition-transform">
            <PartyPopper className="w-16 h-16 text-pink-500" />
          </div>

          {/* Celebrant Images */}
          <div className="flex justify-center gap-4 -mt-2">
            <div className="relative w-32 h-32 transform transition-transform hover:scale-105">
              <img
                src="/images/bHour.png"
                alt="Celebrant with orange party hat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative w-32 h-32 transform transition-transform hover:scale-105">
              <img
                src="/images/bHour1.png"
                alt="Celebrant with pink party hat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg mb-6 hover:shadow-md transition-shadow">
            <User className="w-6 h-6 text-pink-500" />
            <div className="flex-1">
              <p className="text-xl font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {eventDetails.attendeeName}
              </p>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-transform">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">You`re Invited!</h1>
            <p className="text-2xl font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {`To ${eventDetails.celebrantName}'s Birthday`}
            </p>
          </div>

          <p className="text-gray-600 text-lg">
            Join us in celebrating this special day!
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {[
            { Icon: Calendar, label: "Date", value: eventDetails.date },
            { Icon: Clock, label: "Time", value: eventDetails.time },
            { Icon: MapPin, label: "Location", value: eventDetails.location },
          ].map(({ Icon, label, value }, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <Icon className="w-6 h-6 text-pink-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-gray-800 font-medium">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            {`"Let's make this birthday unforgettable!"`}
          </p>
        </div>

        {/* Decorative bottom elements */}
        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center rotate-45">
          🎁
        </div>
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center -rotate-45">
          ✨
        </div>
      </div>
    </div>
  );
}