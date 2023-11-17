import Valid from './assets/img/valid-icon.svg';

const Comfirm = () => {
  return (
    <div>
        <article className='text-[--text] p-12 flex flex-col text-center'>
            <img src={Valid} alt="" />
            <h3>Thanks for your submition ! </h3>
        </article>
    </div>
  )
}

export default Comfirm