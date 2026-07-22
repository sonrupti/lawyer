import { useParams } from "react-router-dom";

export default function SectionPage() {
  const { act, section } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{act.toUpperCase()}</h1>
      <h2>Section {section}</h2>
      <p>Section details will appear here.</p>
    </div>
  );
}