import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="py-4 px-6 max-w-[450px] bg-gray-200 rounded-2xl drop-shadow-xl ">
      <h1 className="text-2xl my-2 font-semibold text-indigo-900">Curious Minds</h1>
      <hr className="my-4 border-indigo-500 w-1/2 mr-auto " />
      <Accordion
        question="Why is the sky blue?"
        answer="The sky appears blue because air molecules scatter blue light from the sun more than other visible colors."
      />
      <Accordion
        question="How do stars produce light?"
        answer="Stars produce light and heat through nuclear fusion in their cores, where hydrogen atoms combine to form helium."
      />
      <Accordion
        question="Why do we dream?"
        answer="Dreams are associated with brain activity during sleep and may help process memories and emotions. Their exact purpose is still not fully understood."
      />
      <Accordion
        question="How does the brain learns things?"
        answer="The brain learns by forming and strengthening connections between neurons. Practice and repetition can help make these connections stronger."
      />
      <Accordion
        question="Could there be life on other planets?"
        answer="The brain learns by forming and strengthening connections between neurons. Practice and repetition can help make these connections stronger."
      />
      <Accordion
        question="Why do we get goosebumps?"
        answer= "Goosebumps happen when tiny muscles attached to our hair follicles contract, often in response to cold or strong emotions."
      />
      <Accordion
        question="Why does the Moon shape changes?"
        answer= "The Moon doesn't actually change its shape. As it orbits Earth, we see different portions of its sunlit side, creating the phases of the Moon."
      />
    </div>
  );
};

export default FAQ;
