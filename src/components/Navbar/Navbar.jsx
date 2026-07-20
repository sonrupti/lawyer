import { 
  Scale, 
  Search, 
  Bell, 
  UserCircle 
} from "lucide-react";

export default function Navbar() {

  return (
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-slate-950/70
      backdrop-blur-xl
      border-b border-cyan-500/20
    ">

      <div className="
        max-w-7xl mx-auto
        px-6 py-4
        flex items-center justify-between
      ">


        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="
            w-12 h-12
            rounded-xl
            bg-cyan-400/10
            border border-cyan-400/40
            flex items-center justify-center
            shadow-[0_0_20px_#06b6d4]
          ">
            <Scale 
              className="text-cyan-400"
              size={28}
            />
          </div>


          <div>
            <h1 className="
              text-2xl 
              font-bold
              text-cyan-400
              tracking-wider
            ">
              LEXARENA
            </h1>

            <p className="
              text-xs
              text-gray-400
              tracking-widest
            ">
              LEGAL GAMING HUB
            </p>

          </div>

        </div>



        {/* NAV LINKS */}
        <nav className="
          hidden md:flex
          items-center
          gap-8
          text-gray-300
        ">

          <a 
            className="
            hover:text-cyan-400
            transition
            cursor-pointer
            "
          >
            Marketplace
          </a>


          <a 
            className="
            hover:text-cyan-400
            transition
            cursor-pointer
            "
          >
            Active Cases
          </a>


          <a 
            className="
            hover:text-cyan-400
            transition
            cursor-pointer
            "
          >
            AI Assistant
          </a>


          <a 
            className="
            hover:text-cyan-400
            transition
            cursor-pointer
            "
          >
            Community
          </a>


        </nav>




        {/* RIGHT ACTIONS */}

        <div className="
          flex
          items-center
          gap-5
        ">


          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
          ">
            <Search 
              size={20}
              className="text-cyan-400"
            />
          </button>



          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
          ">
            <Bell 
              size={20}
              className="text-cyan-400"
            />
          </button>



          <button className="
            w-10 h-10
            rounded-lg
            border
            border-cyan-500/30
            flex
            items-center
            justify-center
            hover:bg-cyan-500/10
            transition
          ">
            <UserCircle 
              size={22}
              className="text-cyan-400"
            />
          </button>


        </div>


      </div>


    </header>
  );
}