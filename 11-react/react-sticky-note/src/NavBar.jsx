export default function NavBar({ user, onLogout }) {
    return (
        <header>
            Logged in as {user.email}
            <button onClick={() => onLogout()}>Logout</button>
        </header>
    )
}