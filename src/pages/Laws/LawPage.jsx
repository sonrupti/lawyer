import { useParams } from "react-router-dom";

export default function LawPage() {
  const { act } = useParams();

  return (
    <div style={{ padding: "40px" }}>
      <h1>{act.toUpperCase()}</h1>
      <p>Sections will appear here.</p>
    </div>
  );
}