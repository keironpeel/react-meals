const Hero = () => {
  return (
    <section className="relative mb-8 flex h-96 w-full items-center justify-center">
      <div className="z-10 flex flex-col items-center gap-4 rounded-xl bg-gray-800 p-8 text-white">
        <h1 className="text-2xl font-bold">Delicious Food Delivered to You</h1>
        <p className="text-xl">
          Choose your favourite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="text-xl">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
      <img
        src="./takeaway-hero.jpg"
        alt="Takeaway pizza"
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default Hero;
