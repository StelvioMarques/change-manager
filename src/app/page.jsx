import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div>
      <header className="h-14 flex justify-around items-center border-b">
        <div className="flex gap-12 items-center">
          <h1 className="text-xl font-semibold">Logo</h1>

          <nav className="flex list-none gap-8 justify-center">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Sobre</a>
            </li>

            <li>
              <a href="#">Serviços</a>
            </li>
          </nav>
        </div>

        <Button>Começar agora</Button>
      </header>

      <main>
        <div>

        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}
