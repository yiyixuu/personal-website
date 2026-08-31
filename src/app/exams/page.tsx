import { ExamScheduler } from "./ExamScheduler";

export const metadata = {
  // The root layout appends "· Yiyi Xu".
  title: "Exam Calendar Export Tool",
  description: "Export your UofT Engineering final exam schedule to a calendar file",
  alternates: { canonical: "/exams/" },
  openGraph: {
    title: "Exam Calendar Export Tool · Yiyi Xu",
    description: "Export your UofT Engineering final exam schedule to a calendar file",
    url: "/exams/",
    type: "website",
  },
};

export default function ExamsPage() {
  return <ExamScheduler />;
}
