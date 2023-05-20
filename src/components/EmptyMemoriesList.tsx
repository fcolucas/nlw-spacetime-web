export default function EmptyMemoriesList() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[22.5rem] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece{" "}
        <a className="underline hover:text-gray-50" href="">
          a criar agora
        </a>
        !
      </p>
    </div>
  );
}
