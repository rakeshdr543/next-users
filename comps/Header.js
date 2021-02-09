import Link from 'next/link'
const Header = () => {
    return ( 
        <nav>
            <h2 className='logo'>Ninja list</h2>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Header;