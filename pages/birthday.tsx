export const metadata = {
  title: "Birthday Celebrants",
};

type Person = { name: string; age: number; birthday: string }[];

const data: Person = [
  { name: "John Doe", age: 22, birthday: "01/01/2000" },
  { name: "Jane Doe", age: 27, birthday: "01/01/1995" },
  { name: "Ben Doe", age: 60, birthday: "01/01/1962" },
];
function BirthdayList() {
  return (
    <ul>
      {data.map((person, index) => (
        <li key={index}>
          {person.name} - {person.age} years old - Birthday: {person.birthday}
        </li>
      ))}
    </ul>
  );
}
export default function BirthdayPage() {
  return (
    <>
      <h1>Birthday Celebrants</h1>
      <p>Happy Birthday!</p>
      <BirthdayList />
    </>
  );
}
