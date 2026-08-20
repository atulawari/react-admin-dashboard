export default function UserCard({ user }) {
  return (
    <div className="card shadow-sm border-0 p-3">
      <h5>{user.name}</h5>
      <div>{user.email}</div>
      <span className="badge text-bg-secondary mt-2">{user.role}</span>
    </div>
  );
}
