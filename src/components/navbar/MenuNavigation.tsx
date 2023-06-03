import { menuData } from '../../data/data';
import { BsXLg, BsChevronDown } from 'react-icons/bs';

import { useState } from 'react';

type MenuNavigationProps = {
  menuToggle: boolean;
  setMenuToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuNavigation({ menuToggle, setMenuToggle }: MenuNavigationProps) {
  const [activeData, setActiveData] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setActiveData(id === activeData ? null : id);
  };

  return (
    <div className={`menuNavigation ${menuToggle ? 'open' : ''}`}>
      <div className='menu'>
        <div className='minim'>Minim</div>
        <div
          className='menuX'
          onClick={(prev) => setMenuToggle(!prev)}
        >
          <BsXLg />
        </div>
      </div>
      <div className='menuData'>
        {menuData.map((data, id) => {
          return (
            <div
              className='dataGroup'
              key={data.id}
              onClick={() => handleClick(id)}
            >
              <div className='dataGroupName'>
                <div>{data.dataGroupName}</div>
                <BsChevronDown
                  className={`${id === activeData ? 'rotate180' : 'rotate0'}`}
                />
              </div>

              {id === activeData && (
                <div className='dataItems'>
                  {data.dataItems.map((dataItem, index) => (
                    <a
                      href='#'
                      key={index}
                    >
                      {dataItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className='callUs'>Call Us +1 (123) 456-7890</div>
      <div className='openHours'>Operating Hour 9:00am to 7:30pm</div>
    </div>
  );
}
export default MenuNavigation;
