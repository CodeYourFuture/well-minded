import React,{useState} from "react";

// const Organisations = () => {
//   const[org, setOrg]=useState("")
//  const handleAddNew = () => {
//    fetch("https://staging-well-minded.herokuapp.com/", {
//      method: "GET",
//      headers: {
//        "Content-type": "application/json",
//      },
//      body: JSON.stringify({
      
//      }),
//    })
//      .then((res) => res.json())
//      .then(() => {
//        console.log("Message Added");
//      });
//  };

//  return (
//    <div className="container">
//      <h2>Search for Organization</h2>
//      <input
//        value={org}
//        onChange={(e) => setOrg(e.target.value)}
//        className="input-name"
//        type="search"
//        name="from"
//        placeholder="Search Organization"
//      />

//      <button onClick={() => handleAddNew()} type="submit">
//        Submit
//      </button>
//    </div>
//  );
// };

const Organisations =()=>{
  const data = [
    {
      logo:
        "https://www.nhs.uk/review/assets/img/service_directories/GenericServiceDirectory/AMHP.jpg?v=80ThbfyLC3bkhxtBnaevzL1ER3flYEJdQ5qYeRIcr5E",
      name: "Care In Mind",
      category: "Mental Health Support",
      website: "https://www.careinmind.org.uk/",
      location:
        "Unit 4, Nelson Street Studios, 2 Nelson Street, Canning Town, London, E16 1DS",
      description:
        "Care in Mind is a volunteer-led organisation. We work with local residents to improve conditions by supporting them to improve their physical and emotional wellbeing. We also aim to increase their confidence and self-esteem and provide opportunities for them to volunteer with us",
    },
    {
      logo:
        "https://www.nhs.uk/review/assets/img/service_directories/GenericServiceDirectory/MIND.jpg?v=k5YZz-Swe-zeEjd6oNPT9UL6nD9BW4TtxsZdtqLOo5g",
      name: "Greenwich Association for Mental Health",
      category: "Mental Health Support",
      website: "https://www.greenwichmind.co.uk/",
      location: "54-56 Ormiston Road, Greenwich, London, SE10 0LN",
      description:
        "To ensure that people in the community who have been affected by mental health issues can receive a full range of support activities and services in the community to enable them to live independent lives as contributing and integrated members of the community thus improving and maintaining their mental health and well being.",
    },
    {
      logo:
        "https://i.pinimg.com/originals/1d/cd/7d/1dcd7dc87f321fe96273d3a86e5f1c9c.png",
      name: "Action On Addiction - Hope House",
      category: "Drugs and Alcohol Misuse",
      website: "https://www.actiononaddiction.org.uk/",
      location: "Hope House, 52 Rectory Grove, London, Greater London, SW4 0EB",
      description:
        "Hope House is a safe, secure and comfortable place for women to recover from substance dependence and receive additional support for other compulsive disorders. If you have already undergone detoxification and first stage treatment but are in need of further support, we can help you come to terms with problems related to your addiction and help you maintain a substance free life.",
    },
    {
      logo:
        "https://www.nhs.uk/review/assets/img/service_directories/GenericServiceDirectory/AMHP.jpg?v=80ThbfyLC3bkhxtBnaevzL1ER3flYEJdQ5qYeRIcr5E",
      name: "Maytree",
      category: "Suicide Prevention",
      website: "https://www.maytree.org.uk/",
      location: "72 Moray Rd, Finsbury Park, London N4 3LG",
      description:
        "Maytree is a national charity offering people who are feeling suicidal a one off residential stay where they can safely talk about their suicidal thoughts and feelings rest and reflect.",
    },
    {
      logo:
        "https://www.nhs.uk/review/assets/img/service_directories/GenericServiceDirectory/MIND.jpg?v=k5YZz-Swe-zeEjd6oNPT9UL6nD9BW4TtxsZdtqLOo5g",
      name: "Havering Mind",
      category: "Mental Health Support",
      website: "https://www.haveringmind.org.uk/",
      location: "Harrow Lodge House, Hornchurch Road, Hornchurch, RM11 1JU",
      description:
        "Our mission is to provide advice and support to empower anyone experiencing a mental health problem, we provide services, raise awareness and promote understanding.",
    },
  ];
const [orgs, setOrgs] = useState([]);
  

  const filteredNames = (value) => {
    setOrgs(
      data.filter(
        (org) =>
          (org.name.toLowerCase() || org.category.toLowerCase()).includes(value)
      )
    );
  };

  const handleChange = (e) => {
    filteredNames(e.target.value.toLowerCase());
  };
  return (
    <div>
      <div>
        <input
          type="search"
          onChange={handleChange}
          placeholder="Search Name"
          className="search"
        />
      </div>
      <div>
        {orgs.map((data) => {
            return (
              <div >
                <span> {data.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );

}
export default Organisations;
