const IconwithBadge = ({ icon, badgeText }) => {
  return (
    <div className="relative">
      <span>{icon}</span>
      <span className="absolute -right-2 -top-2 bg-gray-900 text-white py-1 px-2 rounded-full text-xs">
        {badgeText}
      </span>
    </div>
  );
};

export default IconwithBadge;
