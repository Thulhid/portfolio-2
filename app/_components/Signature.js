import Image from "next/image";

function Signature() {
  return (
    <div className="w-[3rem] md:w-[4rem]">
      <Image
        src="/signature.png"
        alt="Signature"
        width={1000}
        height={1000}
        className="h-auto w-full"
      />
    </div>
  );
}

export default Signature;
