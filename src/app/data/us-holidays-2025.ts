export interface Holiday {
  id: string;
  name: string;
  date: string; // ISO format
  description: string;
  keywords: string[];
}

export const US_HOLIDAYS_2025: Holiday[] = [
  {
    id: 'new-years-day-2025',
    name: 'New Year\'s Day 2025',
    date: '2025-01-01T00:00:00.000Z',
    description: 'The first day of the year, celebrated with parties, fireworks, and resolutions for the coming year.',
    keywords: ['new year', 'January 1', '2025 holidays', 'discord new year', 'new year planning']
  },
  {
    id: 'mlk-day-2025',
    name: 'Martin Luther King Jr. Day 2025',
    date: '2025-01-20T00:00:00.000Z',
    description: 'A federal holiday honoring civil rights leader Martin Luther King Jr., observed on the third Monday of January.',
    keywords: ['MLK day', 'Martin Luther King', 'civil rights', 'January holiday', 'federal holiday']
  },
  {
    id: 'presidents-day-2025',
    name: 'Presidents\' Day 2025',
    date: '2025-02-17T00:00:00.000Z',
    description: 'A federal holiday honoring all U.S. presidents, observed on the third Monday of February.',
    keywords: ['Presidents Day', 'Washington birthday', 'federal holiday', 'February holiday']
  },
  {
    id: 'memorial-day-2025',
    name: 'Memorial Day 2025',
    date: '2025-05-26T00:00:00.000Z',
    description: 'A federal holiday for honoring and mourning military personnel who died while serving in the United States Armed Forces.',
    keywords: ['Memorial Day', 'May holiday', 'military remembrance', 'federal holiday', 'long weekend']
  },
  {
    id: 'juneteenth-2025',
    name: 'Juneteenth 2025',
    date: '2025-06-19T00:00:00.000Z',
    description: 'A federal holiday commemorating the emancipation of enslaved African Americans, observed on June 19.',
    keywords: ['Juneteenth', 'Freedom Day', 'Emancipation Day', 'June holiday', 'federal holiday']
  },
  {
    id: 'independence-day-2025',
    name: 'Independence Day 2025',
    date: '2025-07-04T00:00:00.000Z',
    description: 'A federal holiday commemorating the Declaration of Independence of the United States, on July 4, 1776.',
    keywords: ['July 4th', 'Fourth of July', 'Independence Day', 'fireworks', 'national holiday']
  },
  {
    id: 'labor-day-2025',
    name: 'Labor Day 2025',
    date: '2025-09-01T00:00:00.000Z',
    description: 'A federal holiday honoring the American labor movement, observed on the first Monday of September.',
    keywords: ['Labor Day', 'September holiday', 'long weekend', 'worker holiday', 'end of summer']
  },
  {
    id: 'columbus-day-2025',
    name: 'Columbus Day 2025',
    date: '2025-10-13T00:00:00.000Z',
    description: 'A federal holiday commemorating the arrival of Christopher Columbus in the Americas, observed on the second Monday of October.',
    keywords: ['Columbus Day', 'Indigenous Peoples Day', 'October holiday', 'federal holiday']
  },
  {
    id: 'veterans-day-2025',
    name: 'Veterans Day 2025',
    date: '2025-11-11T00:00:00.000Z',
    description: 'A federal holiday honoring military veterans, observed on November 11.',
    keywords: ['Veterans Day', 'November 11', 'military service', 'federal holiday', 'remembrance']
  },
  {
    id: 'thanksgiving-day-2025',
    name: 'Thanksgiving Day 2025',
    date: '2025-11-27T00:00:00.000Z',
    description: 'A federal holiday celebrating the harvest and blessings of the past year, observed on the fourth Thursday of November.',
    keywords: ['Thanksgiving', 'turkey day', 'November holiday', 'family gathering', 'thanksgiving dinner']
  },
  {
    id: 'christmas-day-2025',
    name: 'Christmas Day 2025',
    date: '2025-12-25T00:00:00.000Z',
    description: 'A federal holiday celebrating the Nativity of Jesus Christ, observed on December 25.',
    keywords: ['Christmas', 'December 25', 'winter holiday', 'Christmas celebration', 'holiday season']
  },
  {
    id: 'new-years-eve-2025',
    name: 'New Year\'s Eve 2025',
    date: '2025-12-31T00:00:00.000Z',
    description: 'The last day of the year, celebrated with parties and fireworks to welcome the new year.',
    keywords: ['New Year\'s Eve', 'December 31', 'year end', 'countdown', 'new year celebration']
  }
]; 