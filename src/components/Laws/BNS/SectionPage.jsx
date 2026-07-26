import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSection } from "../../../services/laws";

export default function SectionPage() {

  const { id } = useParams();

  const [section, setSection] = useState(null);

  useEffect(() => {

    getSection(id).then(setSection);

  }, [id]);

  if (!section) return <div>Loading...</div>;

  return (

    <div className="max-w-4xl mx-auto p-8">

      <div className="text-sm text-gray-500">

        {section.chapter_title}

      </div>

      <h1 className="text-3xl font-bold mt-2">

        Section {section.section_number}

      </h1>

      <h2 className="text-xl mt-2 mb-8">

        {section.section_title}

      </h2>

      <div className="whitespace-pre-wrap leading-8">

        {section.body}

      </div>

      {section.explanations?.length > 0 && (

        <>

          <h3 className="font-bold mt-10">

            Explanation

          </h3>

          {section.explanations.map((e, i) => (

            <div key={i} className="mt-2">

              {e}

            </div>

          ))}

        </>

      )}

      {section.illustrations?.length > 0 && (

        <>

          <h3 className="font-bold mt-10">

            Illustration

          </h3>

          {section.illustrations.map((e, i) => (

            <div key={i} className="mt-2">

              {e}

            </div>

          ))}

        </>

      )}

    </div>

  );

}