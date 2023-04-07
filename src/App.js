
import './App.css';

function App() {

  const price = [
    {
      cost: "FREE",
      usd: "$0",
      line1: "✔ Single User",
      cond1: "true",
      line2: "✔ 5GB Storage",
      cond2: "true",
      line3: "✔ Unlimited Public Projects",
      cond3: "true",
      line4: "✔ Community Access",
      cond4: "true",
      line5: "✗ Unlimited private Projects",
      line6: "✗ Dedicated phone Support",
      line7: "✗ Free Subdomain",
      line8: "✗ Monthly Status Reports",
    },
    {
      cost: "PLUS",
      usd: "$9",
      line1: "✔ 5 User",
      b: "true",
      cond1: "true",
      line2: "✔ 50GB Storage",
      cond2: "true",
      line3: "✔ Unlimited Public Projects",
      cond3: "true",
      line4: "✔ Community Access",
      cond4: "true",
      line5: "✔ Unlimited private Projects",
      cond5: "true",
      line6: "✔ Dedicated phone Support",
      cond6: "true",
      line7: "✔ Free Subdomain",
      cond7: "true",
      line8: "✗ Monthly Status Reports",
    },
    {
      cost: "PRO",
      usd: "$49",
      line1: "✔ Unlimited User",
      b: "true",
      cond1: "true",
      line2: "✔ 150GB Storage",
      cond2: "true",
      line3: "✔ Unlimited Public Projects",
      cond3: "true",
      line4: "✔ Community Access",
      cond4: "true",
      line5: "✔ Unlimited private Projects",
      cond5: "true",
      line6: "✔ Dedicated phone Support",
      cond6: "true",
      line7b: "✔ Unlimited",
      line7: " Free Subdomain",
      cond7: "true",
      line8: "✔ Monthly Status Reports",
      cond8: "true",
    }
  ]

  return (
    <div className="App">
      {price.map((price,idx)=>(
         <PriceCard
         key={idx} 
         cost={price.cost} 
         usd={price.usd} 
         line1={price.line1}
         cond1={price.cond1}
         line2={price.line2}
         cond2={price.cond2}
         line3={price.line3}
         cond3={price.cond3}
         line4={price.line4}
         cond4={price.cond4}
         line5={price.line5}
         cond5={price.cond5}
         line6={price.line6}
         cond6={price.cond6}
         line7={price.line7}
         cond7={price.cond7}
         line8={price.line8}
         cond8={price.cond8}
         line7b={price.line7b}
         b={price.b}
         />
      ))}
     

    </div>
  );
}

export default App;

function PriceCard(props){
  return(
    <div className='card'>
    <div className='card-head'>
      <span className='text-muted'>{props.cost}</span>
      <h1 className='value'>{props.usd}<span className='subtext'>/month</span></h1>
      </div><hr></hr>
      <div className='card-body'>
        <ul>
          <li className={(props.cond1?"":"text-muted1")}><span className={props.b ? "bold" : ""}>{props.line1}</span></li>
          <li className={props.cond2?"":"text-muted1"}>{props.line2}</li>
          <li className={props.cond3?"":"text-muted1"}>{props.line3}</li>
          <li className={props.cond4?"":"text-muted1"}>{props.line4}</li>
          <li className={props.cond5?"":"text-muted1"}>{props.line5}</li>
          <li className={props.cond6?"":"text-muted1"}>{props.line6}</li>
          <li className={props.cond7?"":"text-muted1"}><b>{props.line7b}</b>{props.line7}</li>
          <li className={props.cond8?"":"text-muted1"}>{props.line8}</li>
        </ul>
      </div>
      <button>BUTTON</button>
    </div>
  )
}

