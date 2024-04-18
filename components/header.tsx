import Link from "next/link";
import Container from "../components/container";

export default function Header() {
  return (
    <header className="py-6">
      <Container>
        <nav className="flex space-x-4">
          <Link className="hover:text-gray-600 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="/">Home</Link>
          <Link className="hover:text-gray-600 transition [text-shadow:_1px_1px_5px_rgb(0_0_0_/_40%)]" href="/posts">Aventuras</Link>
        </nav>
      </Container>
    </header>
  );
}
