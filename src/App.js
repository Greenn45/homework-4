import React, {useState} from 'react';

const App = () => {
  const infoUser = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
  };

    const [form, setForm] = useState(infoUser);

    const sub = () => {
        console.log(form);
    };

    return (
        <>
        <div className='app' >
          <label htmlFor='fname'>First Name:</label>
            <input type="text"
                   id='fname'
                   placeholder='Enter name'
                    value={form.firstName}
                    onChange={e => {setForm({...form,
                                                                  firstName: e.target.value})}}/>
          <label htmlFor="lname">Last Name: </label>
            <input type="text"
                   id='lname'
                   placeholder='Enter last name'
                   value={form.lastName}
                   onChange={e => {setForm({...form,
                       lastName: e.target.value})}}/>
          <label htmlFor="email">Email: </label>
            <input type="text"
                   id='email'
                   value={form.email}
                   placeholder='Enter email'
                   onChange={e => {setForm({...form,
                       email: e.target.value})}}/>
          <label htmlFor="tel">Telephone: </label>
            <input type="text"
                   id='tel'
                   value={form.tel}
                   placeholder='Enter telephone number'
                   onChange={e => {setForm({...form,
                       tel: e.target.value})}}/>
            <div>
            <button className='btn' onClick={() => sub()}>Submit</button>
            </div>
        </div>
        </>
    );
};

export default App;