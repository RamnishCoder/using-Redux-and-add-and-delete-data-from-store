import {
  CButton,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
} from "@coreui/react";


const Popup = (props) => {
  console.log("props", props);



  
  

  return (
    <>
      <CModal visible={props.del} onClose={() => props.hide()}>
        <CModalHeader onClose={() => false}>
          <CModalTitle>Delete!!!!</CModalTitle>
        </CModalHeader>`
        <CModalBody>Are you sure????</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => props.hide()}>
            No
          </CButton>

          <CButton color="primary" onClick={()=>props.deleted()}>yes sure.</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Popup;
