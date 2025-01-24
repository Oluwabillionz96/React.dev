import React from "react";
const people = [
  {
    name: "Emmanuel",
    room: 1,
  },
  {
    name: "Gift",
    room: 2,
  },
  {
    name: "Treasure",
    room: 3,
  },
  {
    name: "Treasure",
    room: 4,
  },
  {
    name: "New Neighbors",
    room: 5,
  },
  {
    name: "Emmanuel",
    room: 6,
  },
  {
    name: "Reuben",
    room: 7,
  },
  {
    name: "Ima-obong",
    room: 8,
  },
  {
    name: "Gabriel",
    room: 9,
  },
  {
    name: "Ruth",
    room: 10,
  },
];

const List1 = () => {
  const even = people.filter((person) => person.room % 2 === 0);
  const odd = people.filter((person) => person.room % 2 !== 0);

  const evenNames = even.map((person) => (
    <li key={person.room}>{person.name}</li>
  ));
  const oddNames = odd.map((person) => (
    <li key={person.room}>{person.name}</li>
  ));

  return (
    <>
      <h1>Block A</h1>
      <h2>Even Rooms</h2>
      <ul>{evenNames}</ul>
      <h2>Odd Rooms</h2>
      <ul>{oddNames}</ul>
    </>
  );
};

export default List1;
