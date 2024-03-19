import { useEffect, useReducer, useRef } from "react"
import InputWithCounter from "../../../components/InputWithCounter";
import TextAreaWithCounter from "../../../components/TextAreaWithCounter";
import Circle_Merge from "./../../../images/nav/Circle_Merge.png"
import { useDispatch } from "react-redux";
import { mergeList } from "../../../modules/lists/listThunk";


const MergeListForm = ({ checkedItems, showModal }) => {
    const dispatch = useDispatch();
    const [body, setBody] = useReducer(
        (prev, next) => {
            var newEvent = { ...prev, ...next };

            return newEvent;
        },
        {
            name: "",
            description: "",
            list_ids: checkedItems
        }
    )

    useEffect(() => {
        if (!showModal) {
            setBody({
                name: "",
                description: "",
            })
        }
    }, [showModal])


    const handleInput = (e) => {
        const { name, value } = e.target;
        setBody({
            [name]: value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(checkedItems, "checkedItemscheckedItems");
        console.log(body);
        dispatch(mergeList(body));
        e.target.reset();
    }

    return (
        <form onSubmit={submitForm} className='flex-inline'>
            <div className='text-center'>
                <img src={Circle_Merge} height={70} width={70} className='mx-auto my-0' />
            </div>
            <div className='mt-3'>
                <h2 className='text-blue'>MERGE LISTS?</h2>
                <div className='mt-5'>
                    <p className='text-sm'>The selected lists will be merged into one new list.</p>
                    <p className='text-sm'>Please provide a new title and description for the merged list</p>
                </div>
            </div>
            <div className='mt-5 text-left'>
                <InputWithCounter required={true}
                    value={body?.name}
                    name="name"
                    onChange={handleInput} limit="30" label='MERGED LIST TITLE' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
            </div>
            <div className='mt-5 text-left'>
                <TextAreaWithCounter cols='50' required={true} rows='3'
                    value={body?.description}
                    name="description"
                    onChange={handleInput}
                    label="MERGED LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
            </div>
            <div className='mt-5 '>
                <div>
                    <button type="submit" className='btn  bg-blue p-2 border rounded-md text-white py-2 px-4'>Create Merged List</button>
                </div>
                <div className='mt-3'>
                    <button type="button" className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default MergeListForm;