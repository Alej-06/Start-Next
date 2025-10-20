import Image from "next/image";
import Header from "@/components/header";
import CoreConceptsList from "@/components/core-concepts-list";
import TabExampleSection from "@/components/Tab/tab-example-section";
import Dropdown from "@/components/dropdown";


export default function Home() {
  return (<>
     <Header />
     <nav className="flex flex-col md:flex-row bg-violet-900 justify-center md:justify-between">
      <Dropdown menuText="Hola"/>
      <Dropdown menuText="Adiós"/>
     </nav>
      <CoreConceptsList />
      <TabExampleSection/>
   </>
  );
}
