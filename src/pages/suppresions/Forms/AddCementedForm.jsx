import { useEffect, useReducer, useRef } from "react";
import { csvToJson, formatFileSize } from "../../../core/constants";
import Icon_DragAndDrop from "./../../../images/nav/Icon_DragAndDrop.png"
import InputWithCounter from "../../../components/InputWithCounter";
import TextAreaWithCounter from "../../../components/TextAreaWithCounter";
import { createList } from "../../../modules/lists/listThunk";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


const AddCementedForm = ({
    setShowModal,
    formRef
}) => {
 

    return (
       

    <form  ref={formRef} >
        <div className='text-center'>
            <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
        </div>
        <div className='mt-3'>
            <h2 className='text-xl text-blue'>ADD CEMENTED LIST</h2>
        </div>
        <div className='mt-5 text-left'>
            <div>
                <label className='text-blue'>SUPPRESSION LIST</label>
            </div>
            <div>
                <select className='p-3 border border-line-gray w-full'>
                    <option value="">Campaign Name</option>
                </select>
            </div>
        </div>
        <div className='mt-5 '>
            <div>
                <button className='btn  bg-blue p-3 border rounded-md text-white py-3'>Cement List</button>
            </div>
            <div className='mt-3'>
                <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
        </div>
    </form>
    )
}

export default AddCementedForm;