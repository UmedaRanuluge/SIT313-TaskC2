function Card({ image, title, description, rating, username }) {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <div className="flex items-center gap-2 text-yellow-500 font-bold border-t pt-3">
        <span>⭐ {rating}</span>
        <span className="text-gray-600 font-normal">{username}</span>
      </div>
    </div>
  )
}

export default Card