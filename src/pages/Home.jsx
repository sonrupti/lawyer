import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/Sidebar/Sidebar";
import LawyerList from "../components/LawyerCard/LawyerList";
import Stats from "../components/Stats/Stats";


export default function Home(){

  return (

    <main className="
      min-h-screen
      bg-slate-950
      text-white
    ">

      <Navbar />


      <div className="
        flex
        pt-20
      ">


        <Sidebar />


        <div className="flex-1">

          <Hero />

          <Stats />

          <LawyerList />

        </div>


      </div>


    </main>

  );

}