import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <header className="bg-blue-500 text-white py-4 mt-5 rounded-md">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <h1 className="text-3xl font-semibold">
                        <Link href="/">Task Scheduler</Link>
                    </h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link href="/" className="hover:text-gray-200">Home</Link></li>
                            <li className="relative group">
                                <Link href="/login" className="hover:text-gray-200">Tasks</Link>
                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                    You have to login first
                                </span>
                            </li>
                            <li><Link href="/register" className="hover:text-gray-200">Register</Link></li>
                            <li><Link href="/login" className="hover:text-gray-200">Login</Link></li>
                            <li><Link href="#" className="hover:text-gray-200">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
