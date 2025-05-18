export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'fr', 'de'],
}

export const getLocaleFromPath = (pathname) => {
  const segments = pathname.split('/')
  const localeSegment = segments.find(segment => i18n.locales.includes(segment))
  return localeSegment || i18n.defaultLocale
}

export const locales = {
  en: {
    name: 'English',
    title: 'Discord Timestamp Converter',
    description: 'Convert your local time into Discord timestamp format',
    selectDateTime: 'Select Date and Time:',
    apply: 'Apply',
    confirm: 'Confirm',
    availableFormats: 'Available Formats',
    copy: 'Copy',
    howToUse: 'How to Use',
    howToUseSteps: [
      'Select your desired date using the date picker',
      'Choose the time and select 12h or 24h format',
      'Use mouse wheel over hours/minutes to adjust values',
      'Click "Confirm" to set the time and "Apply" to generate timestamps to copy'
    ],
    timeFormats: {
      t: { description: 'Short Time', example: '16:20' },
      T: { description: 'Long Time', example: '16:20:30' },
      d: { description: 'Short Date', example: '20/04/2024' },
      D: { description: 'Long Date', example: 'April 20, 2024' },
      f: { description: 'Short Date/Time', example: 'April 20, 2024 16:20' },
      F: { description: 'Long Date/Time', example: 'Saturday, April 20, 2024 16:20' },
      R: { description: 'Relative Time', example: '5 minutes ago' }
    }
  },
  es: {
    name: 'Español',
    title: 'Conversor de Marcas de Tiempo de Discord',
    description: 'Convierte tu hora local al formato de marca de tiempo de Discord',
    selectDateTime: 'Selecciona Fecha y Hora:',
    apply: 'Aplicar',
    confirm: 'Confirmar',
    availableFormats: 'Formatos Disponibles',
    copy: 'Copiar',
    howToUse: 'Cómo Usar',
    howToUseSteps: [
      'Selecciona la fecha deseada usando el selector de fecha',
      'Elige la hora y selecciona el formato de 12h o 24h',
      'Usa la rueda del ratón sobre horas/minutos para ajustar valores',
      'Haz clic en "Confirmar" para establecer la hora y en "Aplicar" para generar y copiar marcas de tiempo'
    ],
    timeFormats: {
      t: { description: 'Hora Corta', example: '16:20' },
      T: { description: 'Hora Larga', example: '16:20:30' },
      d: { description: 'Fecha Corta', example: '20/04/2024' },
      D: { description: 'Fecha Larga', example: '20 de abril de 2024' },
      f: { description: 'Fecha/Hora Corta', example: '20 de abril de 2024 16:20' },
      F: { description: 'Fecha/Hora Larga', example: 'sábado, 20 de abril de 2024 16:20' },
      R: { description: 'Tiempo Relativo', example: 'hace 5 minutos' }
    }
  },
  fr: {
    name: 'Français',
    title: 'Convertisseur de Timestamp Discord',
    description: 'Convertissez votre heure locale au format timestamp Discord',
    selectDateTime: 'Sélectionner la date et l\'heure:',
    apply: 'Appliquer',
    confirm: 'Confirmer',
    availableFormats: 'Formats Disponibles',
    copy: 'Copier',
    howToUse: 'Comment Utiliser',
    howToUseSteps: [
      'Sélectionnez la date souhaitée à l\'aide du sélecteur de date',
      'Choisissez l\'heure et sélectionnez le format 12h ou 24h',
      'Utilisez la molette de la souris sur les heures/minutes pour ajuster les valeurs',
      'Cliquez sur "Confirmer" pour définir l\'heure et sur "Appliquer" pour générer et copier les timestamps'
    ],
    timeFormats: {
      t: { description: 'Heure Courte', example: '16:20' },
      T: { description: 'Heure Longue', example: '16:20:30' },
      d: { description: 'Date Courte', example: '20/04/2024' },
      D: { description: 'Date Longue', example: '20 avril 2024' },
      f: { description: 'Date/Heure Courte', example: '20 avril 2024 16:20' },
      F: { description: 'Date/Heure Longue', example: 'samedi 20 avril 2024 16:20' },
      R: { description: 'Temps Relatif', example: 'il y a 5 minutes' }
    }
  },
  de: {
    name: 'Deutsch',
    title: 'Discord Zeitstempel-Konverter',
    description: 'Konvertieren Sie Ihre lokale Zeit in das Discord-Zeitstempelformat',
    selectDateTime: 'Datum und Uhrzeit auswählen:',
    apply: 'Anwenden',
    confirm: 'Bestätigen',
    availableFormats: 'Verfügbare Formate',
    copy: 'Kopieren',
    howToUse: 'Wie man es benutzt',
    howToUseSteps: [
      'Wählen Sie das gewünschte Datum mit dem Datumsauswähler',
      'Wählen Sie die Uhrzeit und das 12- oder 24-Stunden-Format',
      'Verwenden Sie das Mausrad über Stunden/Minuten, um Werte anzupassen',
      'Klicken Sie auf "Bestätigen", um die Zeit festzulegen und auf "Anwenden", um Zeitstempel zu generieren und zu kopieren'
    ],
    timeFormats: {
      t: { description: 'Kurze Zeit', example: '16:20' },
      T: { description: 'Lange Zeit', example: '16:20:30' },
      d: { description: 'Kurzes Datum', example: '20.04.2024' },
      D: { description: 'Langes Datum', example: '20. April 2024' },
      f: { description: 'Kurzes Datum/Zeit', example: '20. April 2024 16:20' },
      F: { description: 'Langes Datum/Zeit', example: 'Samstag, 20. April 2024 16:20' },
      R: { description: 'Relative Zeit', example: 'vor 5 Minuten' }
    }
  }
} 