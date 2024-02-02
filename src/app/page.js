import { Header } from "../../components/Header";
import { Headline } from "../../components/Headline";
import { LinkBtn } from "../../components/LinkBtn";
import { Links } from "../../components/Links";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <LinkBtn/>

      <Header file="src/app/page.js"/>

      <Headline title="home page"/>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Links/>
      </div>
    </main>
  );
}
