"use client";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = Array.from({ length: 10 }).map(() => ({
  question: "What's the best thing about Switzerland?",
  answer:
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
}));
// More questions...

export default function FAQ() {
  const firstFAQColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const secondFAQColumn = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="grid grid-cols-12 w-full gap-[50px]">
      <div className="col-span-6">
        <SingleFAQ faqs={firstFAQColumn} />
      </div>
      <div className="col-span-6">
        <SingleFAQ faqs={secondFAQColumn} />
      </div>
    </div>
  );
}

export function SingleFAQ({ faqs: faqs }: { faqs: FAQ[] }) {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2">
      <dl className="mt-10 space-y-6">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button
                    className={classNames(
                      "flex w-full items-center justify-between text-left bg-orange-200 border-[1px] border-solid border-whitesmoke-200 py-[34px] pr-[46px] pl-[22px]",
                      {
                        "!bg-[#FFF0D1]": !open,
                      }
                    )}
                  >
                    <div className="self-stretch  box-border flex flex-row items-start justify-between  max-w-full gap-[20px]  mq900:pr-[23px] mq900:box-border">
                      <div
                        className={classNames(
                          "h-[101px] w-[743px] relative bg-orange-200 box-border hidden max-w-full"
                        )}
                      />
                      <div className="relative font-medium z-[1] mq450:text-lgi">
                        {faq.question}
                      </div>
                    </div>

                    {/* <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span> */}
                    <div className="ml-6 flex h-7 items-center mr-2">
                      {open ? (
                        <img
                          className="w-[25px] h-[23px] relative z-[1]"
                          alt=""
                          src="/polygon-9-1.svg"
                        />
                      ) : (
                        <img
                          className="w-[25px] h-[23px] relative z-[1]"
                          alt=""
                          src="/polygon-9.svg"
                        />
                      )}
                    </div>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  <p className="text-base leading-7 mq450:text-base text-xl text-darkslategray-200 font-red-hat-text">
                    {faq.answer}
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}
