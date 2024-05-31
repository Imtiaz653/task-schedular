// pages/index.js
import Head from 'next/head';
import Navbar from './navbar/page';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <Head>
                <title>Task Scheduler</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            {/* Main Section */}
            <section className="py-16 flex flex-col items-center justify-center">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-4">Welcome to Task Scheduler</h2>
                    <p className="text-lg text-gray-700 mb-8">Organize your tasks efficiently and stay productive.</p>
                    <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300">Get Started</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-200 py-8">
                <div className="container mx-auto text-center">
                    <p className="text-gray-600">Don not have an account? <Link href="/register" className="text-blue-500">Sign up</Link></p>
                    <p className="text-gray-600 mt-2">Already have an account? <Link href="/login" className="text-blue-500">Sign in</Link></p>
                </div>
            </footer>
        </div>
    )
}
