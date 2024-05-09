import classNames from 'classnames';
import Badge from '../../../university-detail/sub-components/badge';
import UniversityBadge from '../UniversityBadge';
import _ from 'lodash';
import './index.css';

type Criteria = {
  coreCriteria: string[];
  advancedCriteria: string[];
  otherFactors: string[];
  [key: string]: string[]; // Add this index signature
};

const universities = [
  {
    name: 'CMR University',
    coreCriteria: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    advancedCriteria: ['Diamond', 'Diamond', 'Diamond', 'Diamond', 'Diamond'],
    otherFactors: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    visitSite: 'Visit Site'
  },
  {
    name: 'Vignan University',
    coreCriteria: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    advancedCriteria: ['Diamond', 'Diamond', 'Diamond', 'Diamond', 'Diamond'],
    otherFactors: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    visitSite: 'Visit Site'
  },
  {
    name: 'Vignan University',
    coreCriteria: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    advancedCriteria: ['Diamond', 'Diamond', 'Diamond', 'Diamond', 'Diamond'],
    otherFactors: [
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond',
      'Diamond'
    ],
    visitSite: 'Visit Site'
  }
];

const criteria: Criteria = {
  coreCriteria: [
    'Employability',
    'Teaching & Learning',
    'Faculty Quality',
    'Student Diversity',
    'Facilities',
    'Social Responsibility',
    'Governance & Structure',
    'Diversity & Accessibility'
  ],
  advancedCriteria: [
    'Arts and Culture',
    'Faculty Diversity',
    'Entrepreneurship',
    'Research',
    'Innovation'
  ],
  otherFactors: [
    'Internationalization',
    'Academic Development',
    'Location',
    'Size',
    'Year of Establishment',
    'Status'
  ]
};

// @ts-ignore

export default function CompareInstitutions() {
  return (
    <div className="overflow-x-auto border-[1px] border-[#EAEAEA] w-full text-[16px]">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th></th>
            <th scope="col">
              <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                  <img
                    className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                  CMR University
                </h3>
              </div>
            </th>
            <th scope="col">
              <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                  <img
                    className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                  CMR University
                </h3>
              </div>
            </th>
            <th scope="col">
              {' '}
              <div className="flex flex-col items-center justify-center py-0 pr-[7px] pl-0 box-border gap-[0.4px]">
                <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[7px] pl-1">
                  <img
                    className="h-[164.6px] flex-1 relative max-w-full overflow-hidden object-cover z-[2]"
                    loading="lazy"
                    alt=""
                    src="/image-20@2x.png"
                  />
                </div>
                <h3 className="m-0 relative text-inherit font-bold font-inherit z-[2] mq450:text-lgi">
                  CMR University
                </h3>
              </div>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-2 text-left text-xs tracking-wider  text-[16px] font-bold mq450:text-lgi align-bottom">
              {`Core Criteria (Badges)`}
            </th>
            <th scope="col">
              {' '}
              <div className="flex flex-col items-center">
                <img
                  className="w-[152px] h-[108px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
            </th>
            <th scope="col">
              {' '}
              <div className="flex flex-col items-center">
                <img
                  className="w-[152px] h-[108px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
            </th>
            <th scope="col">
              {' '}
              <div className="flex flex-col items-center">
                <img
                  className="h-[108px] object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-28@2x.png"
                />
              </div>
            </th>
          </tr>
        </thead>
        {Object.keys(criteria).map((section, sectionIndex) => (
          <tbody
            key={sectionIndex}
            className="bg-white divide-y divide-gray-200">
            {sectionIndex === 0 || (
              <tr>
                <td colSpan={universities.length + 1} className="h-[77px]"></td>
              </tr>
            )}
            {section !== 'coreCriteria' && (
              <tr className="">
                <td
                  colSpan={universities.length + 1}
                  className="px-6 py-2 text-left text-xs tracking-wider  text-[16px] font-bold mq450:text-lgi h-[50px]">
                  {_.capitalize(
                    `${section.replace(/([A-Z])/g, ' $1').trim()} (Badges)`
                  )}
                </td>
              </tr>
            )}

            {criteria?.[section]?.map(
              (criteria: any, criteriaIndex: number) => (
                <tr
                  key={criteriaIndex}
                  className={classNames({
                    'bg-[#F8F8F8]': criteriaIndex % 2 == 0
                  })}>
                  <td className="px-6 py-3 whitespace-nowrap  font-medium text-gray-900 ">
                    {criteria}
                  </td>
                  {universities.map((university, uniIndex) => {
                    return (
                      <td
                        key={uniIndex}
                        className="px-6 py-3 whitespace-nowrap  text-gray-500">
                        <div className="university-badge">
                          <UniversityBadge
                            type={
                              ['Diamond', 'Gold', 'Platinum'][Math.random()]
                            }
                          />
                        </div>
                      </td>
                    );
                  })}
                </tr>
              )
            )}
            {section === 'otherFactors' && (
              <tr>
                <td className="px-6 py-3 whitespace-nowrap  font-medium text-gray-900 mx-[20px] w-full">
                  Visit Site
                </td>
                {universities.map((university, uniIndex) => (
                  <td key={uniIndex} className="px-6 py-3 whitespace-nowrap">
                    <div className="flex justify-center w-full">
                      <button className="bg-[#F7A600] py-[17px] px-[50px] text-center w-full">
                        {university.visitSite}
                      </button>
                    </div>
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        ))}
      </table>
    </div>
  );
}
