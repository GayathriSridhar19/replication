import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {Pricecard} from "./components/Pricecard"



function App() {
  let data = [
    {
      product: "User",
      price: 0,
      user: "Single User",
      userEnabler: true,
      storage: "5GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: false,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: false,
      subDomain: "Free Sub Domain",
      subDomainEnabler: false,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "User",
      price: 9,
      user: "5 User",
      userEnabler: true,
      storage: "50GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Sub Domain",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: false,
    },
    {
      product: "User",
      price: 49,
      user: "Unlimited User",
      userEnabler: true,
      storage: "150GB Storage",
      storageEnabler: true,
      publicProjects: "Unlimited Public Projects",
      publicProjectsEnabler: true,
      communityAccess: "Community Access",
      communityAccessEnabler: true,
      privateProjects: "Unlimited Private Projects",
      privateProjectsEnabler: true,
      phoneSupport: "Dedicated Phone Support",
      phoneSupportEnabler: true,
      subDomain: "Free Sub Domain",
      subDomainEnabler: true,
      reports: "Monthly Status Reports",
      reportsEnabler: true,
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Pricecard type={data[0]} />
            <Pricecard type={data[1]} />
            <Pricecard type={data[2]} />
          </div>
        </div>
      </section>
    </>
  );
}

export default App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);