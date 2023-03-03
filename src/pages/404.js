import Link from "next/link";
const notfound = () => {
    return (
        <div className='not-found'>
            <h2>Opppp....</h2>
            <p>Your pages not found</p>
            <Link href={'/'}>Back to home</Link>
        </div>
    );
}

export default notfound