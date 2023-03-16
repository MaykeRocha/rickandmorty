import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  let clear=()=>{
    setStatus("");
     setPageNumber("");
      setGender("");
       setSpecies("");
       window.location.reload(false);
  };
  return (
    <div className='col-3' >
      <div className='text-center fw-bold fs-4 mb-2'>Filter</div>
      <div 
      onClick={clear}
      style={{cursor:"pointer"}}
       className='text-center text-primary text-decoration-underline'
      >
        Clear  Filters
      </div>

      <div className="accordion" id="accordionExample">
        <Status
          setPageNumber={setPageNumber}
          updateStatus={setStatus}
        />
        <Species
          setPageNumber={setPageNumber}
          updateSpecies={setSpecies}
        />
        <Gender
          setPageNumber={setPageNumber}
          updateGender={setGender}
        />
      </div>


    </div>
  )
}

export default filters
