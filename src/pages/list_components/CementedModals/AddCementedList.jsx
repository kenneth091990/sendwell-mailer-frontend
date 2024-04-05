import { useRef } from "react";
import SelectDropdown from "../../../components/SelectDropdown";
import { useDispatch } from "react-redux";
import Circle_Add from "./../../../images/nav/Circle_Add.png";
import { useQuery } from "@apollo/client";
import { SELECTION_SUPPRESSION } from "../../../graphql/supression.schema";
import serialize from "form-serialize";
import { addCementedList } from "../../../modules/cemented_suppression/cementedSuppressionThunk";

const AddCementedList = ({ setShowModal }) => {
    const { loading, error, data, refetch } = useQuery(SELECTION_SUPPRESSION, {
        variables: {
            cemented: false,
            status: true
        },
        fetchPolicy: "network-only"
    })
    const formRef = useRef();
    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();
        const body = serialize(formRef.current, { hash: true, empty: true });

        console.log(body);
        dispatch(addCementedList({ ...body, cemented: true, }));
    }

    return (
        <form ref={formRef} onSubmit={submitForm} className='flex-inline w-[49vh] max-sm:w-[95%]'>
            <div className='text-center'>
                <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
            </div>
            <div className='mt-3'>
                <h2 className='text-blue'>ADD CEMENTED LIST</h2>
                {/* <div className='mt-5'>
                        <p className='text-sm'>The selected lists will be merged into one new list.</p>
                        <p className='text-sm'>Please provide a new title and description for the merged list</p>
                    </div> */}
            </div>
            <div className='mt-5 text-left'>
                {(!loading && !error && data?.selectionSuppression) && (
                    <SelectDropdown
                        required={true}
                        label={"SUPPRESSION LIST"}
                        name={"suppression_id"}
                        labelClassName="font-normal text-primary text-sm uppercase"
                        containerClassName={"w-full max-sm:w-full"}>
                        {/* <option value="">Test Campaign 1</option>
                        <option value="">Test Campaign 2</option> */}
                        {(data?.selectionSuppression ?? []).map((list, i) => {
                            return (
                                <option key={i} value={list?.suppression_id}>{list?.name}</option>
                            )
                        })}
                    </SelectDropdown>
                )}
            </div>
            {/* <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="MERGE LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div> */}
            <div className='mt-5 '>
                <div>
                    <button type="submit" className='btn  bg-blue p-2 border rounded-md text-white py-2'>Cement List</button>
                </div>
                <div className='mt-3'>
                    <button type="button" className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default AddCementedList;