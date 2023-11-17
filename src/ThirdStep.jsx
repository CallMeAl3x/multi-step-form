import PropTypes from 'prop-types';

const ThirdStep = ({ formData }) => {


  return (

    <article className='text-[--text] p-12 flex flex-col'>
    <h2 className='text-[20px] font-medium'>Summary</h2>
    
    <div className='flex mt-6'>
    <p className='text-[--gray] font-medium'>Name: </p> &nbsp;{formData.Name}  <p className='ml-1'></p> 
    </div>

    <div className='flex'>
    <p className='text-[--gray] font-medium'>Email: </p> &nbsp;{formData.Email} <p className='ml-1'></p>
    </div>

    <p className='mt-5 text-[--gray] font-medium'>Topics:</p>
    <ul className='list-disc ml-7 mt-1'>
    {formData.Topics.map(topic => (
          <li key={topic}>{topic}</li>
        ))}
    </ul>
    </article>
  )
}

ThirdStep.propTypes = {
  formData: PropTypes.shape({
    Name: PropTypes.string,
    Email: PropTypes.string,
    Topics: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}


export default ThirdStep;