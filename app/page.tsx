import Image from "next/image";
import Header from "@/components/header";
import componentsImg from "@/public/components.png";
import configImg from "@/public/config.png";
import stateImg from "@/public/state-mgmt.png";
import jsxImg from "@/public/jsx-ui.png";
import CoreComponents from "@/components/core-concepts";
import CoreConceptsList from "@/components/core-concepts-list";
import TabExampleSection from "@/components/Tab/tab-example-section";


export default function Home() {
  return (<>
     <Header />
      <CoreConceptsList />
      <TabExampleSection/>
   </>
  );
}
