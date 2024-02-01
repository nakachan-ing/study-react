import Link from "next/link";

export function LinkBtn() {
  return (
    <header>
      <Link href="/">
        Home
      </Link>
      <Link href="/practice">
        Practice
      </Link>
    </header>
  );
}
