import { useEffect, useState, useRef, useCallback } from "react";

const MLBackground = () => {
  console.log("under mlbackground");

  const inputMessage = [
    "Party A (Buyer): Hi there! I'm interested in purchasing 1kg of rice.",
    "Party B (Seller): Hello! I'm glad you're interested. We have a variety of rice available. Are you looking for any specific type?",
    "Party A: I'm not too particular about the type, but I prefer long-grain rice. Do you have any available?",
    "Party B: Yes, we do have long-grain rice in stock. Our current price is $2 per kilogram. Does that work for you?",
    "Party A: That sounds reasonable. However, I was hoping to negotiate a bit. Would you consider lowering the price if I purchase a larger quantity?",
    "Party B: We could definitely discuss that. How much are you looking to purchase?",
    "Party A: I'm interested in buying 5kg in total. Would you be willing to lower the price to $1.80 per kilogram for a bulk purchase?",
    "Party B: Hmm, I understand your request. Let me check with my manager to see if we can offer a discount for a bulk purchase.",
    "Party B: We can offer you a discounted price of $1.90 per kilogram for a 5kg purchase. How does that sound?",
    "Party A: Thank you for considering my request. I think we have a deal! Could you please confirm the total price and delivery details?",
    "Party B: Absolutely! The total price for 5kg of long-grain rice at $1.90 per kilogram is $9.50. We offer free delivery for orders over $10, so there won't be any additional charges for delivery.",
    "Party A: Excellent! That works for me. Let's proceed with the order. Could you provide me with the payment details?",
    "Party B: Of course. I'll send you the payment details along with the order confirmation. Thank you for choosing us as your supplier!",
    "Party A: Thank you for your assistance. I'm looking forward to receiving the rice. Have a great day!",
    "Party B: You too! If you have any further questions or need assistance, feel free to reach out.",
  ];

  const prediction_labels = [
    "contradictory",
    "not contradictory",
    "fifty-fifty",
  ];

  const [text, setText] = useState(inputMessage.join("\n"));
  const [sections, setSections] = useState(
    prediction_labels.map((title) => ({ title, items: [] }))
  );
  const [status, setStatus] = useState("idle");

  // creating a reference to the worker object(Worker thread which will run in background)
  const worker = useRef(null);

  // Using useEffect to setup the Worker as soon as the component is mounted
  useEffect(() => {
    console.log("under useeffect hook");
    if (!worker.current) {
      worker.current = new Worker(
        new URL("../ML_model/Worker.js", import.meta.url),
        {
          type: "module",
        }
      );
    }

    const onMessageReceived = (e) => {
      const status = e.data.status;

      if (status === "initate") {
        setStatus("loading");
      } else if (status === "ready") {
        setStatus("ready");
      } else if (status === "output") {
        const { sequence, labels, scores } = e.data.output;
        console.log(sequence, labels, scores);
        
        // Threshold for classification
        const label = scores[0] > 0.55 ? labels[0] : "fifty-fifty";

        const sectionId = sections.map((x) => x.title).indexOf(label);

        setSections((sections) => {
          const newSections = [...sections];

          newSections[sectionId] = {
            ...newSections[sectionId],
            items: [...newSections[sectionId].items, sequence],
          };

          return newSections;
        });
      } else if (status === "complete") {
        setStatus("idle");
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  }, [sections]);

  const classify = useCallback(() => {
    setStatus("processing");
    worker.current.postMessage({
      text,
      labels: prediction_labels.slice(0, prediction_labels.length - 1),
    });
  }, [text]);

  const busy = status !== "idle";

  return (
    <div className="flex flex-col h-full">
      <textarea
        className="border w-full p-1 h-1/2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex flex-col justify-center items-center m-2 gap-1">
        <button
          className="border py-1 px-2 bg-blue-400 rounded text-white text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={busy}
          onClick={classify}
        >
          {!busy
            ? "Categorize"
            : status === "loading"
            ? "Model loading..."
            : "Processing"}
        </button>
        <div className="flex gap-1">
          <button
            className="border py-1 px-2 bg-green-400 rounded text-white text-sm font-medium"
            onClick={(e) => {
              setSections((sections) => {
                const newSections = [...sections];
                // add at position 2 from the end
                newSections.splice(newSections.length - 1, 0, {
                  title: "New Category",
                  items: [],
                });
                return newSections;
              });
            }}
          >
            Add category
          </button>
          <button
            className="border py-1 px-2 bg-red-400 rounded text-white text-sm font-medium"
            disabled={sections.length <= 1}
            onClick={(e) => {
              setSections((sections) => {
                const newSections = [...sections];
                newSections.splice(newSections.length - 2, 1); // Remove second last element
                return newSections;
              });
            }}
          >
            Remove category
          </button>
          <button
            className="border py-1 px-2 bg-orange-400 rounded text-white text-sm font-medium"
            onClick={(e) => {
              setSections((sections) =>
                sections.map((section) => ({
                  ...section,
                  items: [],
                }))
              );
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-grow overflow-x-auto max-h-[40%]">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col w-full">
            <input
              disabled={section.title === "Other"}
              className="w-full border px-1 text-center"
              value={section.title}
              onChange={(e) => {
                setSections((sections) => {
                  const newSections = [...sections];
                  newSections[index].title = e.target.value;
                  return newSections;
                });
              }}
            ></input>
            <div className="overflow-y-auto h-full border">
              {section.items.map((item, index) => (
                <div
                  className="m-2 border bg-red-50 rounded p-1 text-sm"
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MLBackground;
