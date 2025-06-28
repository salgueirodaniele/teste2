
import Link from 'next/link';

export default function Header(){
    return   (
        <>
        <header>
            <div>
              
            </div>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/pages/galeria">Galeria</Link>
                <Link href="/pages/contato">Contato</Link>
            </nav>
        </header>
        </>
        

    )
}
