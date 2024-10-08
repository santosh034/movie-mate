import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full max-w-screen p-4 flex flex-col items-center md:flex md:flex-row md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 md:mt-0">
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/santoshkumarch1/" rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://x.com/?lang=en-in" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline">YouTube</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}