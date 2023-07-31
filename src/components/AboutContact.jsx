import React from "react";

const AboutContact = () => {
  return (
    <div className="text-primary-100">
      <h1 className="text-5xl mb-10 font-semibold">Contact</h1>
      <div className="mb-8">
        <p>
          The University Counseling Center (UCC) is located on the third floor
          of Saint Liam Hall. There is elevator access to the third floor
          through the entrance on the east side of the building (facing Stanford
          Hall).
        </p>

        <p>
          The UCC is open Monday through Friday from 8 a.m. to 5 p.m. Hours may
          vary during University holidays and breaks.
        </p>
      </div>
      <div>
        <div className="mb-2">
          <h4 className="text-lg font-semibold">Telephone:</h4>
          <p>574-631-7336</p>
        </div>
        <div className="mb-2">
          <h4 className="text-lg font-semibold">Fax:</h4>
          <p>574-631-5643</p>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold">Mailing Address:</h4>
          <p>
            University Counseling Center <br />
            P.O. Box 709 <br />
            University of Notre Dame <br />
            Notre Dame, IN 46556
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutContact;
