'use client';

import React, { useState } from 'react';
import TimePickerWithOptions from './TimePickerWithOptions';
import { usePathname } from 'next/navigation';
import { locales, getLocaleFromPath } from '../i18n';

interface DateTimePickerProps {
  value: Date;
  onChange: (newDate: Date) => void;
  onApply: () => void;
}

const DateTimePickerWithFormat: React.FC<DateTimePickerProps> = ({ value, onChange, onApply }) => {
  const [date, setDate] = useState(new Date(value));
  const [timeConfirmed, setTimeConfirmed] = useState(false);
  
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = locales[locale as keyof typeof locales];

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    
    // Keep the time from the current date
    newDate.setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    
    setDate(newDate);
    onChange(newDate);
    setTimeConfirmed(false); // Reset time confirmation state when date changes
  };

  const handleTimeChange = (newTime: Date) => {
    const updatedDate = new Date(date);
    updatedDate.setHours(newTime.getHours(), newTime.getMinutes(), newTime.getSeconds());
    
    setDate(updatedDate);
    onChange(updatedDate);
  };

  const handleTimeConfirmed = () => {
    setTimeConfirmed(true);
  };

  const handleApply = () => {
    onApply();
  };

  // Format date for the date input (YYYY-MM-DD)
  const formattedDate = date.toISOString().split('T')[0];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">{t.selectDateTime}</label>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="date"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={formattedDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="flex-1">
            <TimePickerWithOptions
              value={date}
              onChange={handleTimeChange}
              onConfirm={handleTimeConfirmed}
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleApply}
          disabled={!timeConfirmed}
          className={`px-6 py-2 rounded-md transition-colors ${
            timeConfirmed
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {t.apply}
        </button>
      </div>
    </div>
  );
};

export default DateTimePickerWithFormat; 