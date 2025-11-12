export const ONTARIO_BOARDS = [
  { id: 'tdsb', name: 'Toronto District School Board' },
  { id: 'pdsb', name: 'Peel District School Board' },
  { id: 'yrdsb', name: 'York Region District School Board' },
  { id: 'ocdsb', name: 'Ottawa-Carleton District School Board' },
  { id: 'hdsb', name: 'Halton District School Board' },
];

export const SCHOOLS_BY_BOARD: Record<string, Array<{ id: string; name: string }>> = {
  tdsb: [
    { id: 'cts', name: 'Central Technical School' },
    { id: 'nss', name: 'Northern Secondary School' },
    { id: 'ehss', name: 'Earl Haig Secondary School' },
    { id: 'fhci', name: 'Forest Hill Collegiate Institute' },
    { id: 'jci', name: 'Jarvis Collegiate Institute' },
  ],
  pdsb: [
    { id: 'pcss', name: 'Port Credit Secondary School' },
    { id: 'lpss', name: 'Lorne Park Secondary School' },
    { id: 'tcss', name: 'Turner Fenton Secondary School' },
  ],
  yrdsb: [
    { id: 'mdhs', name: 'Markham District High School' },
    { id: 'rhs', name: 'Richmond Hill High School' },
  ],
  ocdsb: [
    { id: 'lcvi', name: 'Lisgar Collegiate Institute' },
    { id: 'ghss', name: 'Glebe Collegiate Institute' },
  ],
  hdsb: [
    { id: 'whss', name: 'White Oaks Secondary School' },
    { id: 'aess', name: 'Abbey Park High School' },
  ],
};

export const CLASS_SIZES = [
  { id: 'less-than-25', label: 'Less than 25 students' },
  { id: '25-to-35', label: '25 to 35 students' },
  { id: 'large-group', label: 'Large group (35+ students)' },
];

export const GRADE_LEVELS = [
  { id: '7-8', label: '7s and/or 8s' },
  { id: '9', label: 'Grade 9' },
  { id: '10', label: 'Grade 10' },
  { id: '11', label: 'Grade 11' },
  { id: '12', label: 'Grade 12' },
  { id: 'mixed', label: 'Mixed Grades' },
];
