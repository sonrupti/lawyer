const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];


const practiceAreas = [

  "Criminal Law",
  "Civil Law",
  "Corporate Law",
  "Constitutional Law",
  "Family Law",
  "Divorce Law",
  "Marriage Law",
  "Child Custody",
  "Property Law",
  "Real Estate Law",
  "Land Dispute",
  "Consumer Protection",
  "Cyber Law",
  "IT Law",
  "Data Privacy Law",
  "Intellectual Property Rights",
  "Patent Law",
  "Trademark Law",
  "Copyright Law",
  "Tax Law",
  "GST Law",
  "Income Tax Law",
  "Labour Law",
  "Employment Law",
  "Banking Law",
  "Insurance Law",
  "Environmental Law",
  "Medical Negligence",
  "Immigration Law",
  "Startup Law",
  "Contract Law",
  "Arbitration",
  "International Law",
  "Human Rights",
  "Cyber Crime",
  "White Collar Crime",
  "Consumer Court",
  "Motor Accident Claims",
  "Civil Litigation",
  "Criminal Litigation"

];


const experience = [
  "0-3 Years",
  "3-7 Years",
  "7-15 Years",
  "15+ Years"
];


const ratings = [
  "5 Star",
  "4+ Star",
  "3+ Star"
];


const languages = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Gujarati",
  "Bengali",
  "Punjabi"
];


function FilterBox({title,items}){

  return (

    <div className="
      bg-slate-950/70
      border
      border-cyan-500/20
      rounded-xl
      p-4
      hover:border-cyan-400
      transition
    ">

      <h3 className="
        text-cyan-400
        font-semibold
        mb-3
      ">
        {title}
      </h3>


      <select
        className="
          w-full
          bg-slate-900
          text-gray-300
          border
          border-cyan-500/30
          rounded-lg
          p-2
        "
      >

        <option>
          Select {title}
        </option>


        {
          items.map(item=>(
            <option key={item}>
              {item}
            </option>
          ))
        }


      </select>


    </div>

  );

}



export default function Sidebar(){

return (

<aside className="
w-80
min-h-screen
bg-slate-900/80
backdrop-blur-xl
border-r
border-cyan-500/20
p-5
">

<h2 className="
text-xl
font-bold
text-cyan-400
mb-6
">
⚔ ARENA FILTERS
</h2>


<div className="space-y-5">


<FilterBox
title="State"
items={states}
/>


<FilterBox
title="Practice Area"
items={practiceAreas}
/>


<FilterBox
title="Experience"
items={experience}
/>


<FilterBox
title="Rating"
items={ratings}
/>


<FilterBox
title="Language"
items={languages}
/>


</div>


</aside>

)

}