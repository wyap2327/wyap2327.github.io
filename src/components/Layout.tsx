import { Outlet } from 'react-router'
import { Navbar } from './Navbar'

export function Layout() {
return (
    <>
    <Navbar />

    <main className="mx-auto max-w-3xl px-6 sm:py-10">
        <Outlet />
    </main>

    <footer className="mx-auto max-w-3xl border-t border-border px-6 py-8 text-sm text-secondary">
        Built with React, TypeScript and Tailwind CSS.
    </footer>
    </>
)
}