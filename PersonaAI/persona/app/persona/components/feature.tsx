import { features } from "../../data/users";
const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">
            {feature.title}
          </h3>
          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Features;
