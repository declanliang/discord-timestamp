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
    <div className="space-y-10">
      <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
        <DateTimePickerWithFormat 
          value={selectedDate}
          onChange={handleDateChange}
          onApply={handleApply}
        />

        {showTimestamp && (
          <div className="space-y-8 mt-10">
            <h2 className="text-3xl font-semibold text-gray-800 leading-relaxed">{t.availableFormats}</h2>
            <div className="grid gap-6">
              {Object.entries(t.timeFormats).map(([key, format]) => (
                <div key={key} 
                  className="flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="space-y-3">
                    <p className="font-medium text-2xl text-gray-800 leading-relaxed">{format.description}</p>
                    <code className="text-xl text-gray-600 bg-gray-200 px-4 py-2 rounded leading-relaxed">{`<t:${timestamp}:${key}>`}</code>
                    <p className="text-xl text-gray-500 leading-relaxed">Displays as: {format.example}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(key)}
                    className="px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-xl"
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

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 leading-relaxed">{t.howToUse}</h2>
        <ol className="space-y-4 text-xl text-gray-700 list-decimal pl-6">
          {t.howToUseSteps.map((step, index) => (
            <li key={index} className="pl-2 leading-relaxed">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default DiscordTimestamp;