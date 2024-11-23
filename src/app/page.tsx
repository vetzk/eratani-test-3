"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";

const data = [
  {
    firstName: "Thomas",
    lastName: "Williams",
    email: "thomas.williams@sample.org",
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Gonzalez",
    email: "michael.gonzalez@test.com",
    gender: "Male",
  },
  {
    firstName: "Thomas",
    lastName: "Perez",
    email: "thomas.perez@mail.com",
    gender: "Female",
  },
  {
    firstName: "Alex",
    lastName: "Hernandez",
    email: "alex.hernandez@sample.org",
    gender: "Female",
  },
  {
    firstName: "James",
    lastName: "Perez",
    email: "james.perez@example.com",
    gender: "Male",
  },
  {
    firstName: "David",
    lastName: "Anderson",
    email: "david.anderson@test.com",
    gender: "Male",
  },
  {
    firstName: "Robert",
    lastName: "Perez",
    email: "robert.perez@demo.com",
    gender: "Female",
  },
  {
    firstName: "David",
    lastName: "Jackson",
    email: "david.jackson@mail.com",
    gender: "Male",
  },
  {
    firstName: "Isabella",
    lastName: "White",
    email: "isabella.white@mail.com",
    gender: "Female",
  },
  {
    firstName: "Robert",
    lastName: "Smith",
    email: "robert.smith@sample.org",
    gender: "Female",
  },
  {
    firstName: "Sophia",
    lastName: "Garcia",
    email: "sophia.garcia@demo.com",
    gender: "Female",
  },
  {
    firstName: "Thomas",
    lastName: "Brown",
    email: "thomas.brown@sample.org",
    gender: "Female",
  },
  {
    firstName: "Sophia",
    lastName: "Taylor",
    email: "sophia.taylor@mail.com",
    gender: "Female",
  },
  {
    firstName: "Thomas",
    lastName: "Perez",
    email: "thomas.perez@mail.com",
    gender: "Male",
  },
  {
    firstName: "Chris",
    lastName: "Hernandez",
    email: "chris.hernandez@test.com",
    gender: "Female",
  },
  {
    firstName: "Michael",
    lastName: "Taylor",
    email: "michael.taylor@sample.org",
    gender: "Female",
  },
  {
    firstName: "Sophia",
    lastName: "Hernandez",
    email: "sophia.hernandez@mail.com",
    gender: "Female",
  },
  {
    firstName: "Alex",
    lastName: "Gonzalez",
    email: "alex.gonzalez@sample.org",
    gender: "Female",
  },
  {
    firstName: "Chris",
    lastName: "Brown",
    email: "chris.brown@test.com",
    gender: "Male",
  },
  {
    firstName: "Sophia",
    lastName: "Garcia",
    email: "sophia.garcia@example.com",
    gender: "Female",
  },
];

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
};

export default function Home() {
  const [allData, setAllData] = useState<Data[]>(data);
  const [search, setSearch] = useState<string>("");
  const [form, setForm] = useState<Data>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    const deletedData = data.filter((_, i) => i !== index);
    setAllData(deletedData);
  };

  const handleSearch = () => {
    setAllData(
      data.filter(
        (e) =>
          e.firstName.toLowerCase().includes(search.toLowerCase()) ||
          e.email.toLowerCase().includes(search.toLowerCase()) ||
          e.lastName.toLowerCase().includes(search.toLowerCase()) ||
          e.gender.toLowerCase().includes(search.toLowerCase())
      )
    );
  };
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setForm(data[index]);
  };

  const handleEditOrAdd = () => {
    if (editIndex != null) {
      const updatedData = [...data];
      updatedData[editIndex] = form;
      setAllData(updatedData);
      setEditIndex(null);
    } else {
      setAllData([...data, form]);
    }

    setForm({ firstName: "", lastName: "", email: "", gender: "" });
  };

  return (
    <main className="p-10 w-full flex flex-col gap-10">
      <div className="flex gap-5">
        <Input
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={() => handleSearch()}>Search</Button>
      </div>

      <div className="w-1/2 flex flex-col gap-5">
        <Input
          placeholder="First Name"
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          value={form.firstName}
        />
        <Input
          placeholder="Last Name"
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          value={form.lastName}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          value={form.email}
        />
        <Input
          placeholder="Gender"
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
          value={form.gender}
        />
        <Button
          onClick={() => handleEditOrAdd()}
          disabled={
            form.firstName === "" ||
            form.lastName === "" ||
            form.email === "" ||
            form.gender === ""
          }
        >
          {editIndex != null ? "Update" : "Add"}
        </Button>
      </div>

      <Table>
        <TableCaption>User Visit</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Gender</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allData.map((e, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{e.firstName}</TableCell>
              <TableCell>{e.lastName}</TableCell>
              <TableCell>{e.email}</TableCell>
              <TableCell>{e.gender}</TableCell>
              <TableCell className="flex gap-5">
                <Button onClick={() => handleEdit(i)}>Edit</Button>
                <Button className="bg-red-600" onClick={() => handleDelete(i)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
