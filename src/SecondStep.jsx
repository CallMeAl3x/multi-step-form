import PropTypes from 'prop-types';

const SecondStep = ({ formData, setFormData }) => {
  // Pour enregistrer les topics sélectionnés, vous devez ajouter une fonction 
  // pour gérer le changement des checkboxes.
  const handleTopicChange = (event) => {
    const { value, checked } = event.target;
    let updatedTopics = [...formData.Topics];
    if (checked) {
      updatedTopics.push(value);
    } else {
      updatedTopics = updatedTopics.filter(topic => topic !== value);
    }
    setFormData({ ...formData, Topics: updatedTopics });
  };

  return (
    <article className='text-[--text] p-12 flex flex-col'>
    <h2 className='text-[20px] font-medium'>Which topics you are interested in?</h2>
    
    <label><input type='checkbox' className='peer hidden' value="Software Development" onChange={handleTopicChange}/><span className="flex justify-start px-4 py-3 border-[1px] border-[#A1A1A9] rounded-xl bg-[--bg_form] mb-3 mt-6 hover:bg-[--dot_nav] peer-checked:bg-[--dot_nav]">Software Development</span></label>
    <label><input type='checkbox' className='peer hidden' value="User Experience" onChange={handleTopicChange}/><span className="flex justify-start px-4 py-3 border-[1px] border-[#A1A1A9] rounded-xl bg-[--bg_form] mb-3 mt-2 hover:bg-[--dot_nav] peer-checked:bg-[--dot_nav]">User Experience</span></label>
    <label><input type='checkbox' className='peer hidden' value="Graphic Designer" onChange={handleTopicChange}/><span className="flex justify-start px-4 py-3 border-[1px] border-[#A1A1A9] rounded-xl bg-[--bg_form] mb-3 mt-2 hover:bg-[--dot_nav] peer-checked:bg-[--dot_nav]">Graphic Designer</span></label>
   </article>
  )
}

SecondStep.propTypes = {
  formData: PropTypes.shape({
    Name: PropTypes.string,
    Email: PropTypes.string,
    Topics: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  setFormData: PropTypes.func.isRequired
}

export default SecondStep;
