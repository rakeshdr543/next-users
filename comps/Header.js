import Link from 'next/link'
const Header = () => {
    return ( 
        <div>
            <h2>Ninja list</h2>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/ninjas'><a>Ninja Listing</a></Link>
        </div>
     );
}
 
export default Header;