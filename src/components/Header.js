function Header() {
    return (
        <>
            <header className="bg-teal-300 p-4 flex justify-between">
                <h1 className="text-xl font-blod">KSU Computer Engineering</h1>
                <div>
                    <button className="bg-blue-500 px-5 py-2">Logout</button>
                </div>
            </header>
        </>
    );
}
export default Header;