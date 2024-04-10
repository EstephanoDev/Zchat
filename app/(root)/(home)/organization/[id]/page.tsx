import { MainContent } from "./components/maincontent";

function OrganizationPage({ params }: { params: { id: string } }) {
  
    return (
      <section className="flex size-full flex-col gap-10 text-white">
        <MainContent  />
      </section>
    );
  }
  
  export default OrganizationPage;