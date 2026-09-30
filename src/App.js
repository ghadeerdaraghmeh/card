import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
const [age, setAge] = useState('');
const [hobbies, setHobbies] = useState('');
  
  
  const [people, setPeople] = useState([
  {
    name: 'غدير',
    age: 28,
    image: 'https://via.placeholder.com/150',
    hobbies: 'القراءة، البرمجة، السفر'
  },
  {
    name: 'ليلى',
    age: 30,
    image: 'https://via.placeholder.com/150',
    hobbies: 'الرسم، الطبخ'
  }
]);
  return (
    <div className="App">
      <h1>بطاقات معلومات الأشخاص</h1>
      <input
  type="text"
  placeholder="ابحث عن شخص..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
<input
  type="text"
  placeholder="اسم الشخص"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
<input
  type="number"
  placeholder="عمر الشخص"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
<input
  type="text"
  placeholder="هوايات الشخص"
  value={hobbies}
  onChange={(e) => setHobbies(e.target.value)}
/>
<button onClick={() => {
  if (!name || !age) {
    alert('يرجى إدخال الاسم والعمر');
    return;
  }

  setPeople([
    ...people,
    {
      name: name,
      age: age,
      image: 'https://via.placeholder.com/150',
      hobbies: hobbies
    }
  ]);
  setName('');
setAge('');
setHobbies('');
}}>
  إضافة شخص
</button>
<div className="cards-container">
  {people
    .filter((person) =>
      person.name.includes(search)
    )
    .map((person) => (
      <Card
        key={person.name}
        name={person.name}
        age={person.age}
        image={person.image}
        hobbies={person.hobbies}
        onDelete={() => {
          setPeople(people.filter((p) => p.name !== person.name));
        }}
      />
    ))}
</div>
      
  </div>
  );
}

export default App;