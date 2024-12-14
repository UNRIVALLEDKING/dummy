// eslint-disable-next-line react/prop-types
export default function ServiceButton({ icon: Icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <Icon className="w-8 h-8 text-[#f37a1f] mb-2" />
      <span className="text-[#393939] text-sm text-center">{title}</span>
    </button>
  );
}
