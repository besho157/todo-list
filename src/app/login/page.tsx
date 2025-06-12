'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { MdErrorOutline } from "react-icons/md";


export default function Login() {

    const users = [
        { email: 'besho@gmail.com', password: '3516', auth: 'user' },
        { email: 'sayd@gmail.com', password: '5993', auth: 'user' },
        { email: 'torsha@gmail.com', password: '1485', auth: 'gest' }

    ]

    const [email, setEmail] = useState("sayd@gmail.com");
    const [password, setPassword] = useState("5993");
    const [error, setError] = useState<string | undefined>(undefined);
    const Router = useRouter();

    useEffect(() => {
        const IsLogin = localStorage.getItem('isLogin');
        if (IsLogin) {
            Router.replace('/todo-list')
        }
    }, []);




    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const foundUser = users.find((user) => user.email === email && user.password === password)

        if (foundUser) {
            localStorage.setItem('isLogin', 'true');
            Router.replace('/todo-list');

        }
        else {
            setError(" Incorrect username or password")
        }

    }
    return (
        <div className='min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4  items-center justify-center'>

        <form onSubmit={handleLogin} className="mx-auto max-w-sm lg:max-w-4xl">
            <div className='flex items-center gap-5'>
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <img className="rounded-full w-20  " src="/logo.png" />
            </div>

            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-4xl font-semibold text-black text-center">Log in</h2>
                    <a href="" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div>
                            <svg className="h-6 w-6" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.9-5.9C34.3 6.5 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.1-.4-3.5z" />
                                <path fill="#FF3D00" d="M6.3 14.1l6.6 4.8C14.2 15.1 18.7 12 24 12c3 0 5.7 1.1 7.8 3l5.9-5.9C34.3 6.5 29.4 4 24 4c-7.9 0-14.6 4.6-17.7 11.3z" />
                                <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2.1 13.9-5.4l-6.4-5.3c-2 1.5-4.5 2.3-7.5 2.3-5.3 0-9.7-3.4-11.3-8L6.3 33.9C9.4 40.4 16.1 44 24 44z" />
                                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-0.7 2.2-2 4.1-3.7 5.6l6.4 5.3C41.6 34.3 44 29.6 44 24c0-1.2-.1-2.1-.4-3.5z" />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-black font-bold">Continue with Google</h1>
                    </a>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                                <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-black font-bold">Continue with Facebook</h1>
                    </a>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                        <div>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                <path d="M44.527344 34.75C43.449219 37.144531 42.929688 38.214844 41.542969 40.328125C39.601563 43.28125 36.863281 46.96875 33.480469 46.992188C30.46875 47.019531 29.691406 45.027344 25.601563 45.0625C21.515625 45.082031 20.664063 47.03125 17.648438 47C14.261719 46.96875 11.671875 43.648438 9.730469 40.699219C4.300781 32.429688 3.726563 22.734375 7.082031 17.578125C9.457031 13.921875 13.210938 11.773438 16.738281 11.773438C20.332031 11.773438 22.589844 13.746094 25.558594 13.746094C28.441406 13.746094 30.195313 11.769531 34.351563 11.769531C37.492188 11.769531 40.8125 13.480469 43.1875 16.433594C35.421875 20.691406 36.683594 31.78125 44.527344 34.75Z M31.195313 8.46875C32.707031 6.527344 33.855469 3.789063 33.4375 1C30.972656 1.167969 28.089844 2.742188 26.40625 4.78125C24.878906 6.640625 23.613281 9.398438 24.105469 12.066406C26.796875 12.152344 29.582031 10.546875 31.195313 8.46875Z"></path>
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-black font-bold">Continue with Apple</h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <label className="block text-black text-sm font-bold mb-2">Email Address</label>
                        <input
                            className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            value={email}

                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}

                            type="email"

                            placeholder='Enter your email...' />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-black text-sm font-bold mb-2">Password</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" placeholder='Enter your password...' />
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-800">Log in</button>
                        {error ? (
                            <p className='flex m-auto items-center gap-4 bg-red-100 border border-red-400 text-red-700 px-4 py-2 mt-4 rounded relative'>
                                <MdErrorOutline /> {error}
                            </p>
                        ) : null}


                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <span>
                            Don&apos;t have an account? 
                            <Link href="/sign-up" className="text-xs text-blue-800 uppercase"> Sign up</Link>
                        </span>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 h-[700] bg-no-repeat  bg-center"
                    style={{ backgroundImage: "url('https://www.teamly.com/blog/wp-content/uploads/2021/12/Master-Task-List.png')" }}>
                </div>
            </div>
        </form>
        </div>
    )
}
