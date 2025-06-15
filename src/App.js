import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>بطاقات معلومات الأشخاص</h1>

      <Card 
        name="غدير"
        age={28}
        image="https://via.placeholder.com/150"
        hobbies="القراءة، البرمجة، السفر"
      />

      <Card 
        name="ليلى"
        age={30}
        image="https://via.placeholder.com/150"
        hobbies="الرسم، الطبخ"
      />
    </div>
  );
}

export default App;