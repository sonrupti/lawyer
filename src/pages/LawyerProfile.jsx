import {
  ShieldCheck,
  Trophy,
  Star,
  MapPin,
  Award
} from "lucide-react";


import { useParams } from "react-router-dom";


export default function LawyerProfile(){

const {id}=useParams();


return (

<div className="
min-h-screen
bg-slate-950
text-white
p-8
">


<div className="
max-w-5xl
mx-auto
bg-slate-900/80
border
border-cyan-500/30
rounded-3xl
p-8
backdrop-blur-xl
">


{/* Header */}

<div className="
flex
items-center
gap-6
">


<img

src="https://i.pravatar.cc/200?img=12"

className="
w-32
h-32
rounded-full
border-4
border-cyan-400
"

/>


<div>


<div className="
flex
items-center
gap-3
">

<h1 className="
text-4xl
font-bold
">

Adv. Rahul Sharma

</h1>


<ShieldCheck
className="text-cyan-400"
size={32}
/>

</div>


<p className="
text-gray-400
text-lg
">

Elite Criminal Defense Specialist

</p>


<div className="
flex
gap-2
mt-3
text-yellow-400
">

<Star/>
<Star/>
<Star/>
<Star/>
<Star/>

</div>


</div>


</div>




{/* Stats */}


<div className="
grid
md:grid-cols-4
gap-5
mt-10
">


<div className="
bg-slate-950
p-5
rounded-xl
text-center
">

<Trophy className="mx-auto text-yellow-400"/>

<h2 className="text-2xl font-bold">
850+
</h2>

<p>
Cases Won
</p>

</div>



<div className="
bg-slate-950
p-5
rounded-xl
text-center
">

<Award className="mx-auto text-purple-400"/>

<h2 className="text-2xl font-bold">
15
</h2>

<p>
Years Experience
</p>

</div>



<div className="
bg-slate-950
p-5
rounded-xl
text-center
">

<Star className="mx-auto text-yellow-400"/>

<h2 className="text-2xl font-bold">
4.9
</h2>

<p>
Rating
</p>

</div>



<div className="
bg-slate-950
p-5
rounded-xl
text-center
">

<MapPin className="mx-auto text-cyan-400"/>

<h2 className="text-xl font-bold">
Delhi
</h2>

<p>
Location
</p>

</div>


</div>



{/* Skills */}


<div className="mt-10">


<h2 className="
text-2xl
font-bold
text-cyan-400
">

Legal Arsenal

</h2>


<div className="
flex
flex-wrap
gap-3
mt-4
">


{
[
"Criminal Law",
"Civil Litigation",
"Cyber Crime",
"High Court",
"Supreme Court"
].map(skill=>(

<span

key={skill}

className="
px-4
py-2
rounded-full
bg-cyan-400/10
border
border-cyan-400/30
">

{skill}

</span>

))
}


</div>


</div>



<button
className="
mt-10
w-full
py-4
rounded-xl
bg-gradient-to-r
from-cyan-400
to-purple-500
text-black
font-bold
text-lg
"
>

⚔ Challenge Lawyer / Book Consultation

</button>



</div>


</div>

)

}