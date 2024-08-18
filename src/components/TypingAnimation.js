import TypeIt from "typeit-react";

const TypingAnimation = () => {
  return (
    <span className="type-it">
      <TypeIt
        options={{
          speed: 200,
          loop: true,
          strings: ["UI/UX Designer", "tech/life enthusiast"],
          breakLines: false,
        }}
      />
    </span>
  );
};
export default TypingAnimation;
