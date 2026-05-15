import React from 'react'
import Card from './assets/components/card';

const App = () => {

  const jobOpenings = [
  {
    id: 1,
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    type: "Part time",
    level: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968870.png",
  },

  {
    id: 2,
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Developer",
    type: "Full time",
    level: "Mid Level",
    salary: "$140/hr",
    location: "Bangalore, India",
    image: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  },

  {
    id: 3,
    company: "Microsoft",
    posted: "1 week ago",
    role: "React Developer",
    type: "Remote",
    level: "Junior Level",
    salary: "$100/hr",
    location: "Hyderabad, India",
    image: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  },

  {
    id: 4,
    company: "Spotify",
    posted: "3 days ago",
    role: "Product Designer",
    type: "Contract",
    level: "Senior Level",
    salary: "$110/hr",
    location: "Delhi, India",
    image: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  },

  {
    id: 5,
    company: "Netflix",
    posted: "1 day ago",
    role: "Backend Engineer",
    type: "Full time",
    level: "Senior Level",
    salary: "$160/hr",
    location: "Pune, India",
    image: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
  },

  {
    id: 6,
    company: "Adobe",
    posted: "4 days ago",
    role: "Motion Graphics Designer",
    type: "Hybrid",
    level: "Mid Level",
    salary: "$115/hr",
    location: "Noida, India",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
  },

  {
    id: 7,
    company: "Meta",
    posted: "6 days ago",
    role: "Full Stack Developer",
    type: "Remote",
    level: "Senior Level",
    salary: "$170/hr",
    location: "Gurgaon, India",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
  },

  {
    id: 8,
    company: "Apple",
    posted: "2 weeks ago",
    role: "iOS App Developer",
    type: "Full time",
    level: "Mid Level",
    salary: "$180/hr",
    location: "Chennai, India",
    image: "https://cdn-icons-png.flaticon.com/512/0/747.png",
  },

  {
    id: 9,
    company: "Tesla",
    posted: "3 days ago",
    role: "Software Engineer",
    type: "Internship",
    level: "Entry Level",
    salary: "$90/hr",
    location: "Ahmedabad, India",
    image: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png",
  },

  {
    id: 10,
    company: "Airbnb",
    posted: "Today",
    role: "UX Researcher",
    type: "Part time",
    level: "Senior Level",
    salary: "$130/hr",
    location: "Kolkata, India",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111320.png",
  },
];
  
  return (
    <div className='parent'>
      {jobOpenings.map((elem) =>(
        <Card 
          key={elem.id}
          company={elem.company}
          posted={elem.posted}
          role={elem.role}
          type={elem.type}
          level={elem.level}
          salary={elem.salary}
          location={elem.location}
          image={elem.image}
        />
      ))}
    </div>
  )
}

export default App
