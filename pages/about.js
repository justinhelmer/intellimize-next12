import Link from 'next/link';

export default function About() {
  return (
    <>
    <nav style={{textAlign: 'center', paddingBlock: '30px', display: 'flex', gap: '20px', justifyContent: 'center'}}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
    </nav>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About Page</h1>
    </main>
    </>
  );
}