import { useState } from "react";
import { Search, MapPin, Scale, Map } from "lucide-react";
import { legalData } from "../../data/legalData";


export default function SearchBar() {


  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [keyword, setKeyword] = useState("");



  function handleSearch(){

    console.log({

      state,
      district,
      area,
      keyword

    });

  }



  return (

    <div
      className="
      w-full
      max-w-6xl
      mx-auto
      mt-10
      bg-slate-900/80
      backdrop-blur-xl
      border
      border-cyan-500/30
      rounded-3xl
      p-6
      shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
    >


      <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-4
      "
      >



        {/* STATE SELECT */}

        <div
        className="
        flex
        items-center
        gap-3
        bg-slate-950
        border
        border-cyan-500/20
        rounded-xl
        px-4
        "
        >

          <MapPin
          size={22}
          className="text-cyan-400"
          />


          <select

          value={state}

          onChange={(e)=>{

            setState(e.target.value);
            setDistrict("");
            setArea("");

          }}

          className="
          bg-transparent
          text-gray-300
          w-full
          py-3
          outline-none
          "

          >

            <option value="">
              Select State
            </option>


            {
              Object.keys(legalData).map((item)=>(

                <option
                key={item}
                value={item}
                >

                  {item}

                </option>

              ))
            }


          </select>


        </div>





        {/* DISTRICT SELECT */}

        <div
        className="
        flex
        items-center
        gap-3
        bg-slate-950
        border
        border-cyan-500/20
        rounded-xl
        px-4
        "
        >

          <Map
          size={22}
          className="text-purple-400"
          />


          <select

          value={district}

          onChange={(e)=>setDistrict(e.target.value)}

          disabled={!state}

          className="
          bg-transparent
          text-gray-300
          w-full
          py-3
          outline-none
          "

          >

            <option value="">
              Select District
            </option>


            {
              state &&
              legalData[state].districts.map((item)=>(

                <option
                key={item}
                value={item}
                >

                  {item}

                </option>

              ))
            }


          </select>


        </div>





        {/* PRACTICE AREA */}

        <div
        className="
        flex
        items-center
        gap-3
        bg-slate-950
        border
        border-cyan-500/20
        rounded-xl
        px-4
        "
        >

          <Scale
          size={22}
          className="text-yellow-400"
          />


          <select

          value={area}

          onChange={(e)=>setArea(e.target.value)}

          disabled={!state}

          className="
          bg-transparent
          text-gray-300
          w-full
          py-3
          outline-none
          "

          >

            <option value="">
              Practice Area
            </option>


            {
              state &&
              legalData[state].practiceAreas.map((item)=>(

                <option
                key={item}
                value={item}
                >

                  {item}

                </option>

              ))
            }


          </select>


        </div>





        {/* SEARCH INPUT */}

        <div
        className="
        flex
        items-center
        gap-3
        bg-slate-950
        border
        border-cyan-500/20
        rounded-xl
        px-4
        "
        >

          <Search
          size={22}
          className="text-green-400"
          />


          <input

          value={keyword}

          onChange={(e)=>setKeyword(e.target.value)}

          placeholder="Search lawyer..."

          className="
          bg-transparent
          text-white
          w-full
          py-3
          outline-none
          "

          />


        </div>


      </div>





      {/* SEARCH BUTTON */}


      <button

      onClick={handleSearch}

      className="
      mt-6
      w-full
      py-4
      rounded-xl
      bg-gradient-to-r
      from-cyan-400
      to-purple-500
      text-black
      font-bold
      text-lg
      hover:scale-105
      transition
      "

      >

        ⚔ Find Legal Warrior

      </button>



      {/* Selected Filters Preview */}

      {
        state && (

          <div
          className="
          mt-5
          text-sm
          text-gray-400
          flex
          gap-3
          flex-wrap
          "
          >

            <span className="
            bg-cyan-400/10
            px-3
            py-1
            rounded-full
            "
            >
              {state}
            </span>


            {
              district &&
              <span className="
              bg-purple-400/10
              px-3
              py-1
              rounded-full
              "
              >
                {district}
              </span>
            }



            {
              area &&
              <span className="
              bg-yellow-400/10
              px-3
              py-1
              rounded-full
              "
              >
                {area}
              </span>
            }


          </div>

        )
      }



    </div>

  );

}