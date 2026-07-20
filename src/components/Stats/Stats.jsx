import {
  Trophy,
  Users,
  Target,
  Clock
} from "lucide-react";


const stats = [

  {
    title:"Cases Won",
    value:"12,000+",
    icon:Trophy,
    color:"text-yellow-400"
  },

  {
    title:"Elite Lawyers",
    value:"350+",
    icon:Users,
    color:"text-cyan-400"
  },

  {
    title:"Success Rate",
    value:"98%",
    icon:Target,
    color:"text-green-400"
  },

  {
    title:"Legal Support",
    value:"24/7",
    icon:Clock,
    color:"text-purple-400"
  }

];



export default function Stats(){

return (

<section className="
px-6
py-16
max-w-7xl
mx-auto
">


<h2 className="
text-center
text-3xl
font-bold
text-cyan-400
mb-10
">

Arena Statistics

</h2>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{
stats.map((item)=>{


const Icon=item.icon;


return (

<div
key={item.title}
className="
bg-slate-900/80
backdrop-blur-xl
border
border-cyan-500/20
rounded-2xl
p-8
text-center
hover:border-cyan-400
hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
transition
group
">


<div className="
flex
justify-center
mb-5
">

<Icon

size={42}

className={`
${item.color}
group-hover:scale-110
transition
`}

/>

</div>



<h3 className="
text-4xl
font-bold
text-white
">

{item.value}

</h3>


<p className="
mt-2
text-gray-400
">

{item.title}

</p>


</div>

)


})

}


</div>


</section>

)

}