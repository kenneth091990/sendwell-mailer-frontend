import { useRef } from "react";
import { useDispatch } from "react-redux";
import Circle_Edit from "./../../../images/nav/Circle_Edit.png"
import InputWithCounter from "../../../components/InputWithCounter";
import TextAreaWithCounter from "../../../components/TextAreaWithCounter";
import { updateList } from "../../../modules/lists/listThunk";


const EditForm = ({ editList, setEditList, setShowModal }) => {
    const formRef = useRef();
    const dispatch = useDispatch();


    const submitEditForm = (e) => {
        e.preventDefault();
        // console.
        dispatch(updateList(editList));
    }

    return (
        <form ref={formRef} onSubmit={submitEditForm} className='flex-inline'>
            <div className='text-center'>
                <img src={Circle_Edit} height={70} width={70} className='mx-auto my-0' />
            </div>
            <div className='mt-5'>
                <h2 className='text-blue'>EDIT LISTS?</h2>
            </div>
            <div className='mt-5 text-left'>
                <InputWithCounter
                    value={editList?.name}
                    name="name"
                    onChange={(event) => {
                        const { name, value } = event.target;

                        setEditList({
                            [name]: value
                        })
                    }}
                    limit="30" label='EDIT LIST TITLE'
                    className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
            </div>
            <div className='mt-5 text-left'>
                <TextAreaWithCounter cols='50' rows='3'
                    value={editList?.description}
                    name="description"
                    onChange={(event) => {
                        const { name, value } = event.target;

                        setEditList({
                            [name]: value
                        })
                    }} label="EDIT LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
            </div>
            <div className='mt-5 text-left'>
                <div>
                    <label className='text-blue'>STATUS</label>
                </div>
                {editList?.status}
                <div className="flex items-center">

                    <input id="disabled-radio-1" type="radio" value="true" checked={editList?.status === true} onChange={e => {
                        setEditList({
                            status: true
                        })

                        console.log(e.target.value)
                    }} name="status" className="radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="disabled-radio-1" className="tracking-tight ms-2 text-sm font-medium text-success ">Active</label>
                </div>
                <div className="flex items-center">
                    <input id="disabled-radio-2" type="radio" value="false" checked={editList?.status === false} onChange={e => {
                        setEditList({
                            status: false
                        })

                        console.log(e.target.value)
                    }} name="status" className=" radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="disabled-radio-2" className="tracking-tight ms-2 text-sm font-medium text-danger ">Inactive</label>
                </div>
            </div>
            <div className='mt-5'>
                <div>
                    <button type='submit' className='btn bg-blue p-2 border rounded-md text-white py-2 px-6'>Save Changes</button>
                </div>
                <div className='mt-3'>
                    <button type="button" className='btn bg-transparent text-blue px-6' onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default EditForm;