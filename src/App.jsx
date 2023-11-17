import { useState } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import './index.css';
import Comfirm from './Comfirm';

function App() {
  const [stepNumIndex, setStepNumIndex] = useState(1);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Topics: []
  });

  const handleButton = (step) => {
    if (step >= 1 && step <= 4) {
      setStepNumIndex(step);
      event.preventDefault();
    }
  }

  return (
    <div>
      <form className='form bg-[#212936] max-w-lg ml-auto mr-auto mt-48 rounded-xl border-[1px] border-[#A1A1A9] ' method="post">
      {stepNumIndex === 1 && <FirstStep formData={formData} setFormData={setFormData} />}
        {stepNumIndex === 2 && <SecondStep formData={formData} setFormData={setFormData} />}
        {stepNumIndex === 3 && <ThirdStep formData={formData} />}
        {stepNumIndex === 4 && <Comfirm formData={formData} />}

        {stepNumIndex !== 3 && stepNumIndex !== 4 && (
        <button className='bg-[--boutton] flex w-fit ml-auto mr-auto py-2 px-6 rounded-3xl mb-8 -mt-4' onClick={() => handleButton(stepNumIndex + 1)}>
          Continue
        </button>
        )}

        {stepNumIndex === 3 && (
        <button className='bg-[--boutton] flex w-fit ml-auto mr-auto py-2 px-6 rounded-3xl mb-8 -mt-4' onClick={() => handleButton(stepNumIndex + 1)}>
          Comfirm
        </button>
        )}

        
      </form>
      <div className='mt-4 flex justify-center pr-32 items-center text-[--stroke] text-[14px]'>
        <p>Step {stepNumIndex} of 3 </p>

        {
  // Ici, on map sur un tableau de 3 éléments (représentant 3 étapes)
  [1, 2, 3].map((index) => (
    // Pour chaque élément du tableau, on crée une div avec une taille de 6x6 et une marge à gauche de 4.
    // Cette div contiendra l'étape (un cercle représentant l'étape).
    <div
      key={index}
      className={`relative w-6 h-6 ml-4 inline-block rounded-full`}
    >
      {
        // Si l'index actuel est égal à stepNumIndex (étape en cours), on affiche une div avec un background semi-transparent.
        index === stepNumIndex && (
          <div 
            className="absolute w-full h-full top-0 left-0 bg-opacity-50 bg-[#652CD1] rounded-full z-0">
          </div>
        )
      }
      {
        // Ici, on a l'input de type checkbox pour chaque étape.
        // La classe de cet input change en fonction de l'étape (actuelle, précédente ou future).
        <input
          type="checkbox"
          className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rounded-full appearance-none h-[13px] w-[13px] ${index < stepNumIndex ? 'bg-[#652CD1]' : (index === stepNumIndex ? 'bg-[#845EEE]' : 'bg-[--bg_form]')} z-10 cursor-pointer`}
          onClick={() => handleButton(index)}
        />
      }
    </div>
  ))
}



      </div>
    </div>
  );
}

export default App;