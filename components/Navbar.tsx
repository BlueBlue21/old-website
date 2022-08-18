import Link from 'next/link'

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center p-5 border-b shadow-md border-light-gray dark:border-gray">
            <Link href="./">
                <h1 className="text-xl font-semibold text-blue hover:text-dark-blue hover:cursor-pointer">BlueBlue21</h1>
            </Link>
            <div className="inline-flex ml-auto text-base font-semibold">
                <Link href="./blog">
                    <p className="px-3 hover:text-blue hover:cursor-pointer">Blog</p>
                </Link>
                <Link href="./projects">
                    <p className="px-3 hover:text-blue hover:cursor-pointer">Projects</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
