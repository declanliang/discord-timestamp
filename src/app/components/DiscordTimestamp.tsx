'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { locales, getLocaleFromPath } from '../i18n';
import DateTimePickerWithFormat from './DateTimePickerWithFormat';

const DiscordTimestamp = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [timestamp, setTimestamp] = React.useState('');
  const [showTimestamp, setShowTimestamp] = React.useState(false);
  
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = locales[locale as keyof typeof locales];
  
  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  const handleApply = () => {
    const unixTimestamp = Math.floor(selectedDate.getTime() / 1000);
    setTimestamp(unixTimestamp.toString());
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
          <h1 className="text-4xl font-bold text-gray-800">{t.title}</h1>
          <p className="text-gray-600">{t.description}</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          <DateTimePickerWithFormat 
            value={selectedDate}
            onChange={handleDateChange}
            onApply={handleApply}
          />

          {showTimestamp && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">{t.availableFormats}</h2>
              <div className="grid gap-4">
                {Object.entries(t.timeFormats).map(([key, format]) => (
                  <div key={key} 
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="space-y-1">
                      <p className="font-medium text-gray-800">{format.description}</p>
                      <code className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{`<t:${timestamp}:${key}>`}</code>
                      <p className="text-sm text-gray-500">Displays as: {format.example}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(key)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                      aria-label={`Copy ${format.description} format`}
                    >
                      {t.copy}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">{t.howToUse}</h2>
          <ol className="space-y-2 text-gray-700">
            {t.howToUseSteps.map((step, index) => (
              <li key={index}>{`${index + 1}. ${step}`}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
};

export default DiscordTimestamp;