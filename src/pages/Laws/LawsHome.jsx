import { Link } from "react-router-dom";
import { legalResources } from "../../data/legalResources";

export default function LawsHome() {
  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1100px",
        margin: "auto"
      }}
    >

      <h1
        style={{
          fontSize: "36px",
          marginBottom: "10px"
        }}
      >
        LexArena Legal Library
      </h1>

      <p
        style={{
          fontSize: "18px",
          opacity: 0.8,
          marginBottom: "35px"
        }}
      >
        Explore Indian laws, acts and legal resources in a simple format.
      </p>


      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px"
        }}
      >

        {legalResources.map((law) => (

          <Link
            key={law.id}
            to={`/laws/${law.id}`}
            style={{
              padding: "25px",
              borderRadius: "18px",
              border: "1px solid #555",
              textDecoration: "none",
              color: "inherit",
              transition: "0.3s",
              background:
                "rgba(255,255,255,0.05)"
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-5px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >

            <div
              style={{
                fontSize: "35px",
                marginBottom: "15px"
              }}
            >
              ⚖️
            </div>


            <h2
              style={{
                marginBottom: "12px"
              }}
            >
              {law.title}
            </h2>


            <p
              style={{
                opacity: 0.8,
                lineHeight: "1.6"
              }}
            >
              {law.description}
            </p>


            <div
              style={{
                marginTop: "20px",
                fontWeight: "600",
                color: "#2563eb"
              }}
            >
              Browse Sections →
            </div>


          </Link>

        ))}

      </div>

    </div>
  );
}