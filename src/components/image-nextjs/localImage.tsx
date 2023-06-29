
import Image from 'next/image'
import profilePic from '../../../public/images/profile.jpg'
import { useRef } from 'react'

function LocalImage() {
    const imageRef = useRef(null)
    console.log(imageRef.current)
    return (
        <div className='flex'>
            <Image
                ref={imageRef}
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <Image
                src={profilePic}
                alt="Picture of the author"
                width={500}
                height={500}
                quality={1}
            />
        </div>
    )
}

export default LocalImage
