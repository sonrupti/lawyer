import Navbar from "../components/Navbar/Navbar";
import LawyerList from "../components/LawyerCard/LawyerList";
export default function Home(){

  return(

    <main className="
      min-h-screen
      bg-slate-950
      text-white
    ">

      <Navbar />


      <section className="
        pt-40
        flex
        justify-center
        items-center
      ">

        <h1 className="
          text-6xl
          font-bold
          text-cyan-400
        ">
          LEXARENA
        </h1>

      </section>
    <section className="py-10 px-8">
    <LawyerList />
</section>

    </main>

  );

}