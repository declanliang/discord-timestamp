'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { locales, getLocaleFromPath } from '../i18n';

interface TimePickerProps {
  value: Date;
  onChange: (newDate: Date) => void;
  onConfirm: () => void;
}

const TimePickerWithOptions: React.FC<TimePickerProps> = ({ value, onChange, onConfirm }) => {
  const [is24Hour, setIs24Hour] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [tempHours, setTempHours] = useState(value.getHours());
  const [tempMinutes, setTempMinutes] = useState(value.getMinutes());
  const [amPm, setAmPm] = useState(value.getHours() >= 12 ? 'PM' : 'AM');
  const [showHourSelect, setShowHourSelect] = useState(false);
  const [showMinuteSelect, setShowMinuteSelect] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const t = locales[locale as keyof typeof locales];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowHourSelect(false);
        setShowMinuteSelect(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Update tempHours and tempMinutes when value changes
    setTempHours(value.getHours());
    setTempMinutes(value.getMinutes());
    setAmPm(value.getHours() >= 12 ? 'PM' : 'AM');
  }, [value]);

  const formatTimeDisplay = () => {
    let hours = tempHours;
    if (!is24Hour) {
      hours = hours % 12;
      hours = hours ? hours : 12; // Convert 0 to 12 for 12-hour format
    }
    return `${hours.toString().padStart(2, '0')}:${tempMinutes.toString().padStart(2, '0')}${!is24Hour ? ` ${amPm}` : ''}`;
  };

  const toggleAmPm = (newAmPm: 'AM' | 'PM') => {
    if (newAmPm === amPm) return;
    setAmPm(newAmPm);
    
    // Update hours for 24-hour storage
    if (newAmPm === 'PM' && tempHours < 12) {
      setTempHours(tempHours + 12);
    } else if (newAmPm === 'AM' && tempHours >= 12) {
      setTempHours(tempHours - 12);
    }
  };

  const handleSelectHour = (hour: number) => {
    let newHour = hour;
    
    // Convert to 24-hour format if in 12-hour mode
    if (!is24Hour) {
      if (amPm === 'PM' && hour < 12) {
        newHour = hour + 12;
      } else if (amPm === 'AM' && hour === 12) {
        newHour = 0;
      }
    }
    
    setTempHours(newHour);
    setShowHourSelect(false);
  };

  const handleSelectMinute = (minute: number) => {
    setTempMinutes(minute);
    setShowMinuteSelect(false);
  };

  const handleConfirm = () => {
    const newDate = new Date(value);
    newDate.setHours(tempHours);
    newDate.setMinutes(tempMinutes);
    onChange(newDate);
    setIsOpen(false);
    onConfirm();
  };

  // Generate hour options
  const generateHourOptions = () => {
    const hours = [];
    const maxHour = is24Hour ? 24 : 12;
    for (let i = 0; i < maxHour; i++) {
      const displayHour = is24Hour ? i : (i === 0 ? 12 : i);
      hours.push(
        <div 
          key={i} 
          className="cursor-pointer hover:bg-gray-100 py-2"
          onClick={() => handleSelectHour(displayHour)}
        >
          {displayHour.toString().padStart(2, '0')}
        </div>
      );
    }
    return hours;
  };

  // Generate minute options
  const generateMinuteOptions = () => {
    const minutes = [];
    for (let i = 0; i < 60; i++) {
      minutes.push(
        <div 
          key={i} 
          className="cursor-pointer hover:bg-gray-100 py-2"
          onClick={() => handleSelectMinute(i)}
        >
          {i.toString().padStart(2, '0')}
        </div>
      );
    }
    return minutes;
  };

  return (
    <div className="relative" ref={containerRef}>
      <div 
        className="p-2 border rounded-md cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{formatTimeDisplay()}</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-10 mt-1 w-64 bg-white rounded-md shadow-lg p-4">
          {/* 24h/12h Toggle Switch */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-200 rounded-full p-1 inline-flex items-center">
              <button
                type="button"
                onClick={() => setIs24Hour(true)}
                className={`px-3 py-1 rounded-full text-sm ${
                  is24Hour ? 'bg-blue-500 text-white' : 'text-gray-700'
                } transition-colors duration-200`}
              >
                24h
              </button>
              <button
                type="button"
                onClick={() => setIs24Hour(false)}
                className={`px-3 py-1 rounded-full text-sm ${
                  !is24Hour ? 'bg-blue-500 text-white' : 'text-gray-700'
                } transition-colors duration-200`}
              >
                12h
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-start space-x-2 mb-4">
            {/* AM/PM Toggle (only in 12h mode) - vertical style */}
            {!is24Hour && (
              <div className="bg-gray-200 rounded-full p-1 inline-flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => toggleAmPm('AM')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    amPm === 'AM' ? 'bg-blue-500 text-white' : 'text-gray-700'
                  } transition-colors duration-200`}
                >
                  AM
                </button>
                <button
                  type="button"
                  onClick={() => toggleAmPm('PM')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    amPm === 'PM' ? 'bg-blue-500 text-white' : 'text-gray-700'
                  } transition-colors duration-200 mt-1`}
                >
                  PM
                </button>
              </div>
            )}
            
            {/* Time Selection Area */}
            <div className="flex items-start space-x-2">
              {/* Hours */}
              <div className="relative w-16">
                <div
                  className="p-3 text-center border rounded bg-gray-50 cursor-pointer text-center font-mono"
                  onClick={() => {
                    setShowHourSelect(!showHourSelect);
                    setShowMinuteSelect(false);
                  }}
                >
                  {is24Hour
                    ? tempHours.toString().padStart(2, '0')
                    : (tempHours % 12 || 12).toString().padStart(2, '0')}
                </div>
                
                {showHourSelect && (
                  <div className="absolute top-full mt-1 left-0 w-16 max-h-48 overflow-y-auto bg-white border rounded shadow-lg z-20">
                    <div className="text-center font-mono">
                      {generateHourOptions()}
                    </div>
                  </div>
                )}
              </div>
              
              <span className="mt-3 text-xl">:</span>
              
              {/* Minutes */}
              <div className="relative w-16">
                <div
                  className="p-3 text-center border rounded bg-gray-50 cursor-pointer text-center font-mono"
                  onClick={() => {
                    setShowMinuteSelect(!showMinuteSelect);
                    setShowHourSelect(false);
                  }}
                >
                  {tempMinutes.toString().padStart(2, '0')}
                </div>
                
                {showMinuteSelect && (
                  <div className="absolute top-full mt-1 left-0 w-16 max-h-48 overflow-y-auto bg-white border rounded shadow-lg z-20">
                    <div className="text-center font-mono">
                      {generateMinuteOptions()}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              type="button"
              onClick={handleConfirm}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {t.confirm || 'Confirm'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePickerWithOptions; 