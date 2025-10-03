import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, price, supplier, taste, photo, details, category } =
    useLoaderData();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update coffee");
        return res.json();
      })
      .then((data) => {
        console.log("Updated coffee:", data);
        Swal.fire({
          icon: "success",
          title: "Updated!",
          text: "Coffee updated successfully!",
          confirmButtonColor: "#f59e0b", // amber-500 color
        });
      })
      .catch((error) => {
        console.error("Error updating coffee:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while updating coffee!",
          confirmButtonColor: "#f59e0b",
        });
      });
  };

  return (
    <div>
      <div className="px-24 py-10 space-y-5">
        <Link to="/" className="btn btn-neutral">
          Back Home
        </Link>
        <div className="p-12 bg-amber-100 space-y-4">
          <h1 className="text-3xl font-bold italic text-center">
            Update Coffee
          </h1>
          <div>
            <form
              onSubmit={handleUpdateCoffee}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter coffee Price"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Supplier */}
              <div>
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Taste */}
              <div>
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Details */}
              <div>
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Photo */}
              <div className="md:col-span-2">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2">
                <button className="btn btn-block bg-amber-700 text-white hover:bg-amber-800">
                  Update Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
