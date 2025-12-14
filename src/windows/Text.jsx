import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import React from "react";

const Text = () => {
  const { windows } = useWindowStore();
  const data  = windows.txtfile?.data;

  const { name, image, subtitle, description } = data || {};
  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="space-y-5 p-5 bg-white max-h-150 overflow-auto">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-76 rounded object-center object-cover" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((v, idx) => (
              <p key={idx} className="cursor-text">{v}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
