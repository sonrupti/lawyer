import {
  Star,
  MapPin,
  Trophy,
  ShieldCheck
} from "lucide-react";

import { useNavigate } from "react-router-dom";
export default function LawyerCard({ lawyer }) {

const navigate = useNavigate();

  if (!lawyer) {
    return null;
  }


  return (

    <div className="
      bg-slate-900/80
      backdrop-blur-xl
      border
      border-cyan-500/20
      rounded-2xl
      p-6
      hover:border-cyan-400
      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
      transition
    ">


      {/* Profile */}

      <div className="
        flex
        items-center
        gap-4
      ">

        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="
            w-20
            h-20
            rounded-full
            border-2
            border-cyan-400
          "
        />


        <div>

          <div className="
            flex
            items-center
            gap-2
          ">

            <h2 className="
              text-xl
              font-bold
            ">
              {lawyer.name}
            </h2>


            <ShieldCheck
              size={20}
              className="text-cyan-400"
            />

          </div>


          <p className="text-gray-400">
            {lawyer.speciality}
          </p>

        </div>

      </div>



      {/* Stats */}

      <div className="
        grid
        grid-cols-2
        gap-4
        mt-6
      ">


        <div className="
          bg-slate-950
          rounded-xl
          p-3
        ">

          <p className="text-gray-400 text-sm">
            Experience
          </p>

          <p className="text-cyan-400 font-bold">
            {lawyer.exp} XP
          </p>

        </div>



        <div className="
          bg-slate-950
          rounded-xl
          p-3
        ">

          <p className="text-gray-400 text-sm">
            Win Rate
          </p>

          <p className="text-green-400 font-bold">
            {lawyer.win}%
          </p>

        </div>


      </div>



      {/* Progress Bar */}

      <div className="mt-5">

        <div className="
          flex
          justify-between
          text-sm
          mb-2
        ">

          <span>
            Rank Progress
          </span>

          <span className="text-cyan-400">
            Elite
          </span>

        </div>


        <div className="
          h-2
          bg-slate-800
          rounded-full
          overflow-hidden
        ">

          <div
            className="
              h-full
              bg-gradient-to-r
              from-cyan-400
              to-purple-500
            "
            style={{
              width:`${lawyer.progress}%`
            }}
          />

        </div>


      </div>



      {/* Details */}

      <div className="
        mt-5
        space-y-3
        text-gray-300
      ">


        <p className="flex gap-2">
          <MapPin size={18}/>
          {lawyer.location}
        </p>



        <p className="flex gap-2">
          <Star 
            size={18}
            className="text-yellow-400"
          />
          {lawyer.rating} Rating
        </p>



        <p className="flex gap-2">
          <Trophy size={18}/>
          {lawyer.cases} Cases Won
        </p>


      </div>



     <button

onClick={()=>navigate(`/lawyer/${lawyer.id}`)}

className="
mt-6
w-full
py-3
rounded-xl
bg-gradient-to-r
from-cyan-400
to-purple-500
text-black
font-bold
hover:scale-105
transition
"

>

View Profile

</button>


    </div>

  );

}

