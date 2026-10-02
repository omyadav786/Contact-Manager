import React from 'react'

function ContactList(props) {
    const {contacts , handleDelete} = props;
    const contactList = contacts.map((val) => {
        return (
            <div key={val.id}
            className='flex items-center justify-between p-4 mb-2 bg-white rounded shadow'>
                <div>
                    <p className='text-lg font-semibold'>{val.data.name}</p>
                    <p className='text-gray-600'>{val.data.email}</p>
                </div>
                <button className='px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600'onClick={() => {handleDelete(val.id)}}>Delete</button>
            </div>
        ) 
    })
  return (
    <div>
      {contactList}
    </div>
  )
}

export default ContactList