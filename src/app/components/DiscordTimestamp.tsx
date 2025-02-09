'use client';

import React from 'react';

interface DiscordTimestampProps {}

const DiscordTimestamp: React.FC<DiscordTimestampProps> = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().slice(0, 16));
  const [date, setDate] = React.useState(new Date());
  const [timestamp, setTimestamp] = React.useState('');
  const [showTimestamp, setShowTimestamp] = React.useState(false);
  
  const formats = [
    { key: 't', description: 'Short Time', example: '16:20' },
    { key: 'T', description: 'Long Time', example: '16:20:30' },
    { key: 'd', description: 'Short Date', example: '20/04/2024' },
    { key: 'D', description: 'Long Date', example: 'April 20, 2024' },
    { key: 'f', description: 'Short Date/Time', example: 'April 20, 2024 16:20' },
    { key: 'F', description: 'Long Date/Time', example: 'Saturday, April 20, 2024 16:20' },
    { key: 'R', description: 'Relative Time', example: '5 minutes ago' }
  ];

  React.useEffect(() => {
    if (showTimestamp) {
      const unixTimestamp = Math.floor(date.getTime() / 1000);
      setTimestamp(unixTimestamp.toString());
    }
  }, [date, showTimestamp]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleApply = () => {
    setDate(new Date(selectedDate));
    setShowTimestamp(true);
  };

  const copyToClipboard = (format: string) => {
    const textToCopy = `<t:${timestamp}:${format}>`;
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Discord Timestamp Converter</h1>
          <p className="text-gray-600">Convert your local time into Discord timestamp format</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-4">
            <label className="block text-gray-700 font-medium">Select Date and Time (24-hour format):</label>
            <div className="flex gap-4">
              <input
                type="datetime-local"
                className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={handleDateChange}
                value={selectedDate}
              />
              <button
                onClick={handleApply}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          {showTimestamp && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Available Formats</h2>
              <div className="grid gap-4">
                {formats.map((format) => (
                  <div key={format.key} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-800">{format.description}</p>
                      <code className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{`<t:${timestamp}:${format.key}>`}</code>
                      <p className="text-sm text-gray-500">Displays as: {format.example}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(format.key)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                      aria-label={`Copy ${format.description} format`}
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Use</h2>
          <ol className="space-y-2 text-gray-700">
            <li>1. Select your desired date and time in 24-hour format</li>
            <li>2. Click the "Apply" button to generate timestamps</li>
            <li>3. Click the "Copy" button next to your preferred format</li>
            <li>4. Paste the copied timestamp into your Discord message</li>
            <li>5. Send your message and see the formatted timestamp!</li>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default DiscordTimestamp;