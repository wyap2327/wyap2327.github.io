import { NavLink } from 'react-router'

const links = [
{ to: '/', label: 'Home' },
{ to: '/projects', label: 'Projects' },
{ to: '/skills', label: 'Skills' },
{ to: '/experience', label: 'Experience' },
]

export function Navbar() {
return (
    <nav aria-label="Main" className="border-b border-border">
    <ul className="mx-auto flex max-w-3xl flex-wrap gap-x-6 gap-y-2 px-6 py-4">
        {links.map((link) => (
        <li key={link.to}>
            <NavLink
            to={link.to}
            end
            className={({ isActive }) =>
                isActive
                ? 'font-semibold text-primary no-underline'
                : 'text-secondary no-underline hover:text-primary'
            }
            >
            {link.label}
            </NavLink>
        </li>
        ))}
    </ul>
    </nav>
)
}