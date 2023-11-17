import PropTypes from 'prop-types';


const FirstStep = ({ formData, setFormData }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  return (
    <article className='text-[--text] p-12 flex flex-col'>
        <h2 className='text-[20px] font-medium'>Register</h2>

        <div className='mt-10 flex-col flex'>
          <label htmlFor="name" className='text-[--gray]'>Name</label>
          <input type="text" id='name' name='Name' placeholder='enter your name' value={formData.Name} onChange={handleInputChange} className='bg-transparent rounded-lg h-10 w-full mt-2 border-2 border-[--stroke] pl-4'/>
        </div>

        <div className='mt-6 flex-col flex'>
          <label htmlFor="email" className='text-[--gray]'>Email</label>
          <input type="email" id='email' name='Email' placeholder='example@gmail.com' value={formData.Email} onChange={handleInputChange} className='bg-transparent rounded-lg h-10 w-full border-2 border-[--stroke] pl-4 mt-2'/>
        </div>
    </article>
  )
}

FirstStep.propTypes = {
  formData: PropTypes.shape({
    Name: PropTypes.string,
    Email: PropTypes.string,
    Topics: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setFormData: PropTypes.func.isRequired
}

export default FirstStep