import sel1ngan from "../assets/selingan.jpg";

function selingan() {
  return (
    <div>
      <div className="bg-fixed relative bg-cover bg-center h-screen flex justify-center items-center" style={{ backgroundImage: `url(${sel1ngan})` }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative flex flex-col items-center z-10 p-2">
          <h1 className="text-4xl popBold text-white">THE MORE YOU SCROLL</h1>
          <h1 className="text-4xl popBold text-white">THE MORE YOU INTERESTED</h1>
        </div>
      </div>
    </div>
  );
}

export default selingan;
