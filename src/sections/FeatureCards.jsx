import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols gap-8">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="size-14 flex items-center justify-center rounded-full bg-zinc-800">
            <img src={imgPath} alt={title} className="object-contain h-8 w-8" />
          </div>
          <h3 className="text-white text-2xl font-semibold">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;
