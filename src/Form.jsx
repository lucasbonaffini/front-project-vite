

// eslint-disable-next-line react/prop-types
export function Form({name, lastname, email}) {
    return (
<div className='card'>
        <form action=''>
          <label htmlFor='name'>
            <p>Name</p>
            <input placeholder={name} id='name'/>
          </label>
          <label htmlFor='lastname'>
            <p>Lastname</p>
            <input type='text' placeholder={lastname} id='lastname'/>
          </label>
          <label htmlFor='email'>
            <p>Email</p>
            <input type='email' placeholder={email} id='email'/>
          </label>
          <div className='card'>
          <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    )
}


