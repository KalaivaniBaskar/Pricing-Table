import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';

function App() { 

  const priceDetails = [
    {
      title: "Free",
      price: "$0",
      details : [
        {liClass: "", icon: "fas fa-check", desc: "Single User"},
        {liClass: "", icon: "fas fa-check", desc: "5GB Storage"},
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Public Projects"},
        {liClass: "", icon: "fas fa-check", desc: "Community Access"},
        {liClass: "text-muted", icon: "fas fa-times", desc: "Unlimited Private Projects"},
        {liClass: "text-muted", icon: "fas fa-times", desc: "Dedicated Phone Support"},
        {liClass: "text-muted", icon: "fas fa-times", desc: "Free Subdomain"},
        {liClass: "text-muted", icon: "fas fa-times", desc: "Monthly Status Reports"}
      ]
    }, 

    {
      title: "Plus",
      price: "$9",
      details : [
        {liClass: "", icon: "fas fa-check", desc: "5 Users"},
        {liClass: "", icon: "fas fa-check", desc: "50GB Storage"},
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Public Projects"},
        {liClass: "", icon: "fas fa-check", desc: "Community Access"},
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Private Projects"},
        {liClass: "", icon: "fas fa-check", desc: "Dedicated Phone Support"},
        {liClass: "", icon: "fas fa-check", desc: "Free Subdomain"},
        {liClass: "text-muted", icon: "fas fa-times", desc: "Monthly Status Reports"}
      ]
    }, 

    {
      title: "Pro",
      price: "$49",
      details : [
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Users"},
        {liClass: "", icon: "fas fa-check", desc: "150GB Storage"},
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Public Projects"},
        {liClass: "", icon: "fas fa-check", desc: "Community Access"},
        {liClass: "", icon: "fas fa-check", desc: "Unlimited Private Projects"},
        {liClass: "", icon: "fas fa-check", desc: "Dedicated Phone Support"},
        {liClass: "", icon: "fas fa-check", desc: "Free Subdomains"},
        {liClass: "", icon: "fas fa-check", desc: "Monthly Status Reports"}
      ]
    }
  ]
  return (
    <div className="App">
      <Header />
      <Body  priceDetails = {priceDetails}/>
    </div>
  );
}

export default App;
