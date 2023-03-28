
import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'

function LocalImage() {
    return (
        <Image
            src={profilePic}
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default LocalImage
