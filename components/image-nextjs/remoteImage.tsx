import Image from 'next/image'

function RemoteImage() {
    return (
        <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default RemoteImage