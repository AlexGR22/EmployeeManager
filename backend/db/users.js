import {Employee} from "../models/employeeModel.js";
import { mongoURI } from "../config.js"
import mongoose from "mongoose";

  const employees = [

    {
      name: "Jane Smith",
      age: 35,
      workArea: "Engineering",
      yearsOfService: 7,
      phone: "555-5678"
    },
    {
      name: "Alice Johnson",
      age: 42,
      workArea: "Human Resources",
      yearsOfService: 10,
      phone: "555-8765"
    },
    {
      name: "David Lee",
      age: 38,
      workArea: "IT",
      yearsOfService: 8,
      phone: "555-1111"
    },
    {
      name: "John Doe",
      age: 28,
      workArea: "Marketing",
      yearsOfService: 3,
      phone: "555-1234"
    },
    {
      name: "Bob Brown",
      age: 30,
      workArea: "Sales",
      yearsOfService: 5,
      phone: "555-4321"
    },
    {
      name: "Maria Rodriguez",
      age: 25,
      workArea: "Finance",
      yearsOfService: 2,
      phone: "555-9012"
    },
    {
      name: "Emily Chen",
      age: 29,
      workArea: "Marketing",
      yearsOfService: 4,
      phone: "555-2222"
    },
    {
      name: "Kevin White",
      age: 41,
      workArea: "Sales",
      yearsOfService: 9,
      phone: "555-3333"
    },
    {
      name: "Sophia Patel",
      age: 26,
      workArea: "Engineering",
      yearsOfService: 3,
      phone: "555-4444"
    },
    {
      name: "Michael Kim",
      age: 39,
      workArea: "Sales",
      yearsOfService: 6,
      phone: "555-5555"
    },
    {
      name: "Olivia Martin",
      age: 24,
      workArea: "Finance",
      yearsOfService: 1,
      phone: "555-6666"
    },
    {
      name: "William Davis",
      age: 37,
      workArea: "IT",
      yearsOfService: 7,
      phone: "555-7777"
    },
    {
      name: "Ava Taylor",
      age: 27,
      workArea: "Marketing",
      yearsOfService: 2,
      phone: "555-8888"
    },
    {
      name: "Ethan Hall",
      age: 40,
      workArea: "Marketing",
      yearsOfService: 8,
      phone: "555-9999"
    },
    {
      name: "Lily Brooks",
      age: 23,
      workArea: "Marketing",
      yearsOfService: 1,
      phone: "555-0000"
    },
    {
      name: "Noah Jenkins",
      age: 36,
      workArea: "Sales",
      yearsOfService: 5,
      phone: "555-1111"
    },
    {
      name: "Isabella Garcia",
      age: 28,
      workArea: "Sales",
      yearsOfService: 3,
      phone: "555-2222"
    },
    {
      name: "Alexander Sanchez",
      age: 39,
      workArea: "IT",
      yearsOfService: 6,
      phone: "555-3333"
    },
    {
      name: "Mia Thompson",
      age: 25,
      workArea: "Marketing",
      yearsOfService: 2,
      phone: "555-4444"
    },
    {
      name: "Julian Lee",
      age: 41,
      workArea: "Engineering",
      yearsOfService: 9,
      phone: "555-5555"
    },
    {
      name: "Charlotte Brown",
      age: 26,
      workArea: "Human Resources",
      yearsOfService: 3,
      phone: "555-6666"
    },
    {
      name: "Gabriel Martin",
      age: 38,
      workArea: "Sales",
      yearsOfService: 6,
      phone: "555-7777"
    },
    {
      name: "Abigail White",
      age: 24,
      workArea: "Finance",
      yearsOfService: 1,
      phone: "555-8888"
    },
    {
      name: "Benjamin Kim",
      age: 37,
      workArea: "IT",
      yearsOfService: 7,
      phone: "555-9999"
    },
  ]
  
mongoose
.connect(mongoURI)
.then(() => {
    console.log("Connected to MongoDB");
    return Employee.insertMany(employees);   
})
.then((docs) => {
  console.log('Documents inserted:', docs);
  return mongoose.connection.close(); 
})
.catch((err) => {
  console.error('Error inserting documents::', err);
  mongoose.connection.close(); 
});
