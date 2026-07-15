export default function Category() {
  return (
    <div className="hero bg-zinc-50 text-zinc-900 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="carousel carousel-vertical rounded-box h-96">
          <div className="carousel-item">
            <img
              src="/Gaming PC Essentials — High-Performance Desktops for Smooth Gameplay & Streaming.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Microsoft Surface Laptop 3 - An Awesome Travel Laptop.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/image.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="sony wh1000xm4 headphones _ best headphones.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/TikTok - Make Your Day.jpg"
              className="rounded-box"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/Microsoft Surface Laptop 3 - An Awesome Travel Laptop.jpg"
              className="rounded-box"
            />
          </div>
        </div>

       <div className="flex flex-col justify-center">
  <h1 className="text-5xl font-bold text-slate-900">
    Découvrez les meilleures offres chez OctoStore
  </h1>

  <p className="py-6">
    Retrouvez une large sélection de produits de qualité aux meilleurs prix.
    Profitez d'une livraison rapide, d'un paiement sécurisé et d'un service
    client à votre écoute pour une expérience d'achat simple et fiable.
  </p>

  <button className="btn btn-success flex">
    Commander sur WhatsApp
  </button>
        </div>
      </div>
    </div>
  );
}