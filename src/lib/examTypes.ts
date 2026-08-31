export type ExamRow = {
  course: string;
  courseTitle: string;
  date: string; // "YYYY-MM-DD"
  time: string; // "HH:MM:SS", 24h
  location: string;
  surnameRange: string;
};

export type ExamTermData = {
  term: string;
  label: string;
  lastPulled: string; // ISO 8601
  exams: ExamRow[];
};
