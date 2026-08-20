import { useForm } from "react-hook-form";
export default function UserForm({
  defaultValues = {},
  onSubmit,
  loading = false,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="form-label">Name *</label>
      <input
        className="form-control mb-2"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && (
        <small className="text-danger">{errors.name.message}</small>
      )}
      <label className="form-label mt-3">Email *</label>
      <input
        type="email"
        className="form-control"
        {...register("email", { required: "Email is required" })}
      />
      {errors.email && (
        <small className="text-danger">{errors.email.message}</small>
      )}
      <label className="form-label mt-3">Phone</label>
      <input className="form-control" {...register("phone")} />
      <label className="form-label mt-3">Role</label>
      <select className="form-select mb-4" {...register("role")}>
        <option>User</option>
        <option>Manager</option>
        <option>Admin</option>
      </select>
      <button className="btn btn-primary" disabled={loading}>
        {loading ? "Saving..." : "Save User"}
      </button>
    </form>
  );
}
