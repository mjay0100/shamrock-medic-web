import { main_card } from "../data";


function Main_card() {
  return (
    <section>
      <div className="py-10 w-4/5 mx-auto grid grid-cols-3 items-center gap-8">
        {/* <img src={img1} alt="" /> */}
        {main_card.map((card) => {
          const { id, img, title, body } = card;
          return (
            <div
              key={id}
              className="text-center grid gap-3 items-center justify-center shadow-md shadow-slate-400 p-4 rounded-md h-full">
              <img src={img} className="w-20 mx-auto" alt="" />
              <h2 className="text-[#2F327D] text-lg">{title}</h2>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main_card;
