import { env, pipeline } from "@xenova/transformers";

env.allowLocalModels = false;

class MyPredictionPipeline {
  static task = "zero-shot-classification";
  static model = "MoritzLaurer/deberta-v3-xsmall-zeroshot-v1.1-all-33";//huggingface.co
  static instance = null;

  static async getInstance(progress_callback = null) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, {
        quantized: true,
        progress_callback,
      });
    }

    return this.instance;
  }
}
/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("message", async (event) => {
  let classifier = await MyPredictionPipeline.getInstance((x) => {
    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage(x);
  });

  const { text, labels } = event.data;

  const split = text.split("\n");

  for (const line of split) {
    const output = await classifier(line, labels, {
      hypothesis_template: "The negotiation is {}.",
    });

    // send the output back to the main thread
    /* eslint-disable-next-line no-restricted-globals */
    self.postMessage({
      status: "output",
      output,
    });
  }

  // console.log("output", output);
  /* eslint-disable-next-line no-restricted-globals */
  self.postMessage({
    status: "complete",
  });
});
