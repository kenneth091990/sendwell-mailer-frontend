import { useRef } from "react";
import { useDispatch } from "react-redux"
import { deleteList } from "../../../modules/lists/listThunk";
import Circle_Caution from './../../../images/nav/Circle_Caution.png'

const DeleteForm = ({ editList, setShowModal, dispatchFunction }) => {
    const formRef = useRef();
    const dispatch = useDispatch();

    const submitEditForm = (e) => {
        e.preventDefault();
        if (dispatchFunction) {
            dispatchFunction();
        } else {
            dispatch(deleteList({ list_id: editList?.list_id }));
        }
    }

    return (
        <form ref={formRef} onSubmit={submitEditForm} className='flex-inline'>
            <div className='text-center'>
                <img src={Circle_Caution} height={70} width={70} className='mx-auto my-0' />
            </div>
            <div className='mt-5'>
                <h2 className='text-blue'>{dispatchFunction ? "SUPPRESSION FILE" : "DELETE LISTS"}?</h2>
                <div className='mt-5'>
                    <p className='text-sm'>Are you sure you want to delete {dispatchFunction ? "supression file" : "list"} “{editList?.name}”? This cannot</p>
                    <p className='text-sm'>be undone and you will not be able to recover your list.</p>
                </div>
            </div>
            <div className='mt-5 '>
                <div>
                    <button type='submit' className='btn bg-blue p-2 border rounded-md text-white py-2 px-10'>
                        Delete
                    </button>
                </div>
                <div className='mt-3'>
                    <button type='button' className='btn bg-transparent text-blue px-10' onClick={() => dispatchFunction ? setShowModal() : setShowModal(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default DeleteForm;