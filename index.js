import express from "express";




const app = express();

const sampleEmployee = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

app.get("/employees", (req, res) => {
  res.json({
    results: [sampleEmployee],
   });
});

const port = 5000;

app.listen(port, () => {

  fetch("http://localhost:5000/employees")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  });
});

