import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { PrintArea } from './PrintArea';

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
        <div className="container">
          <PrintArea ref={componentRef} />
            <div className="button mb-3">
                <Link className="btn btn-primary" to="/invoice"><i className="fa fa-long-arrow-alt-left"></i> BACK TO INVOICE LIST</Link>
                <button onClick={handlePrint} className="btn btn-success float-right"><i className="fa fa-print"></i> PRINT INVOICE</button>
            </div>
        </div>
    );
}

export default Print;



/* 

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import { PrintArea } from './PrintArea';

const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <PrintArea ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Print;


*/