import LawyerCard from "./LawyerCard";


const lawyers = [

  {
    id:"rahul-sharma",
name:"Adv. Rahul Sharma",
speciality:"Criminal Defense",
image:"https://i.pravatar.cc/150?img=12",
exp:1200,
win:96,
progress:90,
location:"Delhi",
rating:4.9,
cases:850
  },

  {
    id:"priya-mehta",
    name: "Adv. Priya Mehta",
    speciality: "Corporate Law",
    image: "https://i.pravatar.cc/150?img=47",
    exp: 980,
    win: 92,
    progress: 80,
    location: "Mumbai",
    rating: 4.8,
    cases: 620
  },

  {
    id:"arjun-rao",
    name: "Adv. Arjun Rao",
    speciality: "Cyber Law",
    image: "https://i.pravatar.cc/150?img=33",
    exp: 1500,
    win: 98,
    progress: 95,
    location: "Bangalore",
    rating: 5,
    cases: 1100
  }

];


export default function LawyerList(){

  return (

    <section className="px-6 py-12">

      <h2 className="
        text-3xl
        font-bold
        text-cyan-400
        mb-8
      ">
        Elite Legal Warriors
      </h2>


      <div className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">

        {
          lawyers.map((lawyer)=>(
            
            <LawyerCard
              key={lawyer.name}
              lawyer={lawyer}
            />

          ))
        }

      </div>

    </section>

  );

}