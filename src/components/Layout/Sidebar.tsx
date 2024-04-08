import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import ConnectWallet from "@/components/WalletConnection";
import { Button } from "../ui/button";

export default function Sidebar({ show, setter, setIsConnected }: any) {
  const { data: session } = useSession();
  const user = session?.user;
  const className =
    "bg-white w-[300px] transition-[margin-left] ease-in-out duration-500 fixed lg:static top-0 bottom-0 left-0 z-40 text-black h-screen";
  const appendClass = show ? " ml-0" : " ml-[-300px] lg:ml-0";

  const ModalOverlay = () => (
    <div
      className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-white/50 z-30`}
      onClick={() => {
        setter((oldVal: any) => !oldVal);
      }}
    />
  );

  return (
    <>
      <div className={`${className}${appendClass}`}>
        <div className="h-full w-full">
          <div className="h-1/3 flex flex-col items-center justify-center ">
            <ConnectWallet setIsConnected={setIsConnected} />
          </div>
          <div className="h-1/3 flex items-center justify-center">
            <img src="./img/ethereum.svg" width="50" height="100" />
            <span className="text-lg ml-1">
              <span className="text-3xl font-sans font-bold">DEX</span>{" "}
              Dashboard
            </span>
          </div>
          <div className="h-1/3 flex items-end justify-center pb-8">
            {user && (
              <Button className="text-white mx-8" onClick={() => signOut()}>
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
      {show ? <ModalOverlay /> : <></>}
    </>
  );
}
