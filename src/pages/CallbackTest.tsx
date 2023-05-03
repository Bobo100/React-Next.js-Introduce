import Head from 'next/head'
import Layout from '../components/layout'
import { CommonPrism } from '../components/Common'
import Link from 'next/link'
import ContactForm from '../components/submit-form/submit-contact'
import { useState } from 'react'
export default function CallbackTest() {

    const [email, setEmail] = useState('')
    const [emailFocused, setEmailFocused] = useState(false)

    // handleInputFocus可以接收一個callback的function
    // 然後我們在handleInputFocus裡面還把他執行了
    const handleInputFocus = (callback: () => void) => {
        callback()
    }

    const handleInputFocus2 = (callback = () => { }) => {
        callback()
    }


    console.log(emailFocused)

    return (
        <Layout>
            <Head>
                <title>Next.js中的API</title>
            </Head>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => handleInputFocus(() => setEmailFocused(true))}
                onBlur={() => !email && setEmailFocused(false)}
                placeholder={emailFocused ? '' : 'log.in.email.placeholder'}
            />

        </Layout >
    )
}
