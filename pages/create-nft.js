import { useState, useMemo, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Button } from '../components';
import images from '../assets';


const CreateNFT = () => {
    const [fileUrl, setFileUrl] = useState(null);
    const { theme } = useTheme();

    const onDrop = useCallback(async (acceptedFile) => {
        await uploadToInfura(acceptedFile[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
        onDrop,
        accept: 'image/*',
        maxSize: 5000000,
    });

    const fileStyle = useMemo(() => (
        ''
    ), [])


    return (
        <div className="flex justify-center sm:px-4 p-12">
            <div className="w-3/5 md:w-full">
                <h1 className="font-poppins dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">Create new NFT</h1>
                <div className="mt-16">
                    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">Upload File</p>
                    <div className="mt-4">
                        <div className={fileStyle}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default CreateNFT;
