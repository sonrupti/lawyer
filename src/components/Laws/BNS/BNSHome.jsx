import { useEffect, useState } from "react";

import { getAllBNSSections } from "../../../services/laws";

import SectionCard from "../../../components/Laws/SectionCard";

export default function BNSHome() {

  const [sections, setSections] = useState([]);

  useEffect(() => {

    getAllBNSSections().then(setSections);

  }, []);

  return (

    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">

        Bharatiya Nyaya Sanhita

      </h1>

      <div className="grid gap-4">

        {sections.map(section => (

          <SectionCard
            key={section.id}
            section={section}
          />

        ))}

      </div>

    </div>

  );

}