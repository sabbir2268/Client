import { Eye, Pencil, Trash } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";

function CoffeeCard({ coffee, coffees, setCoffees }) {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Deleted ID:", _id);

        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });

        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
        setCoffees(remainingCoffees);
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 mb-4">
      {/* Left side: Image */}
      <div className="flex items-center gap-4">
        <img
          src={coffee.photo}
          alt={coffee.name}
          className="w-20 h-24 object-contain"
        />

        {/* Coffee details */}
        <div>
          <p>
            <span className="font-semibold">Name:</span> {coffee.name}
          </p>
          <p>
            <span className="font-semibold">taste:</span> {coffee.taste}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {coffee.price} Taka
          </p>
        </div>
      </div>

      {/* Right side: Action buttons */}
      <div className="flex flex-col gap-2">
        <Link
          to={`/coffee/${coffee._id}`}
          className="bg-yellow-500 p-2 rounded text-white hover:bg-yellow-600"
        >
          <Eye size={16} />
        </Link>
        <Link
          to={`/updateCoffee/${coffee._id}`}
          className="bg-gray-700 p-2 rounded text-white hover:bg-gray-800"
        >
          <Pencil size={16} />
        </Link>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="bg-red-600 p-2 rounded text-white hover:bg-red-700"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
