import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "10,000+ Active Members",
  "500+ Workout Routines",
  "200+ Nutrition Guides",
  "50+ Expert Trainers",
  "24/7 Community Support",
  "Personalized Training Plans",
  "Success Stories Daily",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
