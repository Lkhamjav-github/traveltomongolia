<!-- 
1. icon iin component daraah zagvariin daguu uusgej export hiine.

export const ExampleIcon =()=>{
    return(
        <svg></svg>
    )
}

2. icons folder iin page buriin folder-t bga 'index.ts' folder daraah zagvariin daguu export hiine.

export * from './ExampleIcon'

3. icon ashiglah component der icon iig daraah baidlaar importloj ashiglana

import { ExampleIcon , ExampleShape } from "@/components/icons/aboutPage"; 

-->