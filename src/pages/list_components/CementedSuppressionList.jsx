import React, { useEffect, useState } from 'react'
import DataTableV2 from '../../common/components/DataTableV2';
import Modal from '../../components/Modal';
import Icon_Download from "./../../images/nav/Icon_Download-removebg-preview.png"
import Icon_Trash from "./../../images/nav/Icon_Trash-removebg-preview.png"
import CircleIcon from './../../images/nav/Circle_Caution.png'
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import AddIcon from "./../../images/nav/AddIcon.png";
import SearchIcon from './../../images/nav/SearchIcon.png';
import InputTextfield from '../../components/InputTextfield';
import AddCementedList from './CementedModals/AddCementedList';
import { useDispatch, useSelector } from 'react-redux';
import { CEMENTED_SUPPRESSION_EVENT, selectCementSuppression } from '../../modules/cemented_suppression/cementedSuppressionSlice';
import { deleteCementedList, getCementedList } from '../../modules/cemented_suppression/cementedSuppressionThunk';
import { getSupressionList } from '../../modules/supression/supressionThunk';
import { toast } from 'react-toastify';
import useToast from '../../hooks/useToast';
import DeleteForm from './MyListForms/DeleteForm';



const CementedSuppressionList = () => {
    const [showModal, setShowModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [holderData, setHolderData] = useState(null);
    const dispatch = useDispatch();
    const [getToast, setToast] = useToast();
    const { status, event, data, message } = useSelector(selectCementSuppression);

    useEffect(() => {
        if (status === "initial") {
            dispatch(getCementedList({
                cemented: true,
                pageSize: 100,
                page: 1,
            }))
        }

        console.log({ status, event, data, message })

        if (event === CEMENTED_SUPPRESSION_EVENT.add) {
            if (status === "loading") {
                setToast(toast.loading("Please wait adding cemented list", {
                    isLoading: true,
                }))
            }

            if (status === "success") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "success"
                })
                setShowModal(false);
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                    cemented: false,
                    fetchPolicy: "network-only"
                }))
                dispatch(getCementedList({
                    cemented: true,
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }

            if (status === "error") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getCementedList({
                    cemented: true,
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }
        }

        if (event === CEMENTED_SUPPRESSION_EVENT.delete) {
            if (status === "loading") {
                setToast(toast.loading("Please wait deleting cemented list", {
                    isLoading: true,
                }))
            }

            if (status === "success") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "success"
                })
                setHolderData(null);
                setDeleteModal(false);
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                    cemented: false,
                    fetchPolicy: "network-only"
                }))
                dispatch(getCementedList({
                    cemented: true,
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }

            if (status === "error") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getCementedList({
                    cemented: true,
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }
        }
    }, [status, event])


    const downloadFile = async (file, fileNameExt) => {
        try {
            const getFileNameFromPath = (filePath) => {
                // Split the filePath string by both forward slash (/) and backslash (\)
                // The regular expression /[/\\]/ matches both / and \
                const parts = filePath.split(/[/\\]/);
                // The last element of the parts array is the file name
                return parts[parts.length - 1];
            };

            const response = await fetch(file);
            if (!response.ok) {
                toast.error("File not found.")
                return;
            }

            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            var fileName = file.split("\\")
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', getFileNameFromPath(fileNameExt));
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Clean up by revoking the Blob URL after a delay
            setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className='pb-11'>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3'
                        onClick={() => {
                            setShowModal(true);
                        }}>
                        <div className='flex flex-row gap-3 '>
                            <img src={AddIcon} alt="AddIcon" className='h-6 w-6' />
                            <span>
                                Add cemented list
                            </span>
                        </div>
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        CEMENTED SUPPRESSION FILES
                    </h1>
                </div>
                <div className='col-span-3'>
                </div>
            </div>
            <div className="w-full">
                {(() => {
                    var isLoading = false;
                    var isError = false;
                    var myList = data?.supressions ?? [];

                    if (event === CEMENTED_SUPPRESSION_EVENT.get_lists) {
                        if (status === "loading") {
                            isLoading = true;
                        }

                        if (status === "error") {
                            isLoading = false;
                            isError = true;
                            myList = [];
                        }

                        if (status === "success") {
                            isLoading = false;
                            isError = false;
                            myList = data?.supressions;
                        }
                    } else {
                        isLoading = true;
                    }

                    return (
                        <DataTableV2
                            hideHeaderOnMobile={true}
                            keys={[{
                                "key": "name",
                                "render": "list",
                                "col": "30%"
                            },
                            {
                                "key": "description",
                                "col": "30%",
                            },
                            {
                                "key": "status",
                                "col": "10%",
                            },
                            {
                                "key": "actions",
                                "col": "10%",
                                "render": (
                                    <div className="text-center flex flex-row gap-3 justify-center items-center">
                                        <span className="font-semibold text-black/40 uppercase xsm:text-base">
                                            Actions
                                        </span>
                                    </div>
                                )
                            }]}
                            data={myList.map((mock, index) => {
                                var data = { ...mock };


                                data.mobileCellView = (
                                    <div className='flex flex-col mb-4 justify-between'>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-black/30 text-md uppercase font-semibold">
                                                List
                                            </span>
                                            <button className=''>
                                                <img src={BurgerMenu} height={20} width={20} className='mx-1'></img>
                                            </button>
                                        </div>
                                        <span className='text-sm'>
                                            {data?.list}
                                        </span>
                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            description
                                        </span>
                                        <span className='text-sm'>
                                            {data?.description ?? "No Description"}
                                        </span>

                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            count
                                        </span>
                                        <span className='text-sm'>
                                            {data?.count}
                                        </span>
                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            status
                                        </span>
                                        <span className='text-sm mt-3'>
                                            {data?.status === "active" ? (
                                                <span className='w-2/3 text-center border-none bg-success px-7 border rounded font-thin text-white py-2'>
                                                    Active
                                                </span>
                                            ) : (
                                                <span className='w-2/3 text-center border-none bg-danger px-7 border rounded font-thin text-white py-2'>
                                                    Inactive
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                )

                                data.actions = (
                                    <div className="h-full flex flex-row gap-3 justify-center items-center">
                                        <button onClick={() => downloadFile(`${import.meta.env.VITE_SERVER_HOST}/${data?.filepath}?enc=true`, data?.filepath)}>
                                            <img src={Icon_Download} height={20} width={20} className='mx-1'></img>
                                        </button>
                                        <button className='' onClick={() => {
                                            setHolderData(data);
                                            setDeleteModal(true);
                                        }}>
                                            <img src={Icon_Trash} height={20} width={20} className='mx-1'></img>
                                        </button>
                                    </div>
                                )

                                data.description = data?.description ? data?.description : "No Description"

                                data.status = (
                                    <div className="h-full w-full flex items-center  text-xs justify-start">
                                        {data?.status ? (
                                            <span className='w-full text-center border-none bg-success px-5 border rounded font-thin text-white py-1'>
                                                Active
                                            </span>
                                        ) : (
                                            <span className='w-full text-center border-none bg-danger px-5 border rounded font-thin text-white py-1'>
                                                Inactive
                                            </span>
                                        )}
                                    </div>
                                )


                                return data;
                            })}
                            headerChildren={(
                                <div className='w-full max-sm:items-center max-sm:flex-col flex flex-row mb-3'>
                                    <InputTextfield className={"rounded-md border focus:border-primary focus-visible:border-primary border-black/10 bg-transparent px-2 py-2"} inputProps={{
                                        placeholder: "Search...",
                                        type: "text",
                                    }} iconComponent={(
                                        <div className='px-3 py-2'>
                                            <img src={SearchIcon} className="h-6 w-6" alt="SearchIcon" />
                                        </div>
                                    )} />
                                </div>
                            )} />
                    )
                })()}
            </div>
            <Modal onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                <AddCementedList setShowModal={setShowModal} />
            </Modal>

            <Modal onClose={() => {
                setHolderData(null);
                setDeleteModal(false);
            }} showModal={deleteModal}>
                <DeleteForm editList={holderData}
                    dispatchFunction={() => dispatch(deleteCementedList({ suppression_id: holderData?.suppression_id, cemented: false }))}
                    setShowModal={() => {
                        setHolderData(null);
                        setDeleteModal(false);
                    }} />
            </Modal>
        </div>
    )
}

export default CementedSuppressionList;