"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Select({
  title = "Select",
  hideIcon = false,
  style = {},
}) {
  const [selected, setSelected] = useState(title);

  return (
    <Listbox
      value={selected}
      onChange={setSelected}
    >
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900"></Listbox.Label>
          <div
            style={{ minWidth: 100, ...style }}
            className="relative mt-2"
          >
            <Listbox.Button className="relative w-full cursor-default rounded-md rounded-8xs bg-white box-border w-[209px] h-[47px] border-[1px] border-solid border-whitesmoke-100 focus:outline-none">
              <span className="flex items-center ml-2">
                {hideIcon ? (
                  <></>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="15"
                    viewBox="0 0 12 15"
                    fill="none"
                  >
                    <path
                      d="M6 0C9.31697 0 12 2.65665 12 5.95585C12 7.44851 11.4422 8.80197 10.5327 9.8498L10.2943 10.1546L7.25876 13.5765L7.0171 13.8838L6.01738 15L5.03338 13.8854L4.79421 13.5765L1.848 10.2617C1.84005 10.2534 1.83177 10.2454 1.82317 10.2378C1.80828 10.2238 1.78924 10.2024 1.76193 10.1752C1.2034 9.62234 0.760194 8.96501 0.457814 8.24104C0.155433 7.51706 -0.000154579 6.74072 1.15241e-07 5.95667C1.15241e-07 2.65665 2.68303 0 6 0ZM6.00166 3.05618C5.22843 3.0577 4.4873 3.36413 3.94055 3.90836C3.39379 4.4526 3.08595 5.1903 3.08441 5.95996C3.08594 6.72978 3.39373 7.46765 3.94044 8.01215C4.48715 8.55665 5.22827 8.86344 6.00166 8.8654C6.77519 8.86344 7.51648 8.5567 8.06346 8.01225C8.61043 7.4678 8.91858 6.72993 8.92055 5.95996C8.9188 5.19001 8.61069 4.4521 8.06364 3.90773C7.5166 3.36336 6.77518 3.05688 6.00166 3.05536V3.05618ZM6.00166 3.87995C6.2764 3.87908 6.5486 3.93228 6.80261 4.03648C7.05663 4.14068 7.28745 4.29383 7.4818 4.48713C7.67615 4.68043 7.83019 4.91006 7.93508 5.16282C8.03996 5.41559 8.09362 5.68649 8.09297 5.95996C8.09373 6.23355 8.04016 6.50458 7.93533 6.75748C7.8305 7.01038 7.67649 7.24017 7.48214 7.43362C7.28779 7.62707 7.05694 7.78038 6.80287 7.88472C6.54879 7.98907 6.27651 8.04239 6.00166 8.04163C5.72692 8.04228 5.45475 7.98887 5.20082 7.88447C4.94689 7.78007 4.71619 7.62673 4.522 7.43328C4.3278 7.23983 4.17394 7.01007 4.06925 6.75723C3.96457 6.50439 3.91113 6.23344 3.912 5.95996C3.91102 5.6865 3.96439 5.41554 4.06905 5.1627C4.1737 4.90985 4.32757 4.68011 4.5218 4.4867C4.71603 4.29329 4.94678 4.14004 5.20075 4.03576C5.45473 3.93149 5.72692 3.87825 6.00166 3.87913V3.87995Z"
                      fill="#DC6A6A"
                    />
                  </svg>
                )}
                <span
                  style={{ fontSize: 13 }}
                  className="ml-3 block truncate"
                >
                  {selected}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
