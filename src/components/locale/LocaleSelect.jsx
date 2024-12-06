import { useState } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { indiaIcon } from '../../assets';
import localeData from '../../constants/localeData';

export default function LocaleSelect() {
  const [sel, setSel] = useState(false);
  const [locale, setLocale] = useState('en');
  const selectedLanguageName = localeData.find(
    (item) => item.code === locale
  )?.name;
  console.log('locale', sel, locale);
  return (
    <button
      onClick={() => setSel(!sel)}
      className="hidden relative z-10 bg-background xl:flex w-64 items-center text-black justify-between border-2 rounded-full border-secondary px-5 py-1"
    >
      <img src={indiaIcon} alt="india icon" />
      <p className="whitespace-nowrap">{selectedLanguageName}</p>
      <IoIosArrowDropdownCircle size={25} color="#393939" />
      <div
        className={`absolute rounded-2xl ${
          sel ? 'block' : 'hidden'
        } bg-background top-12 left-0 w-full h-96 overflow-y-scroll scrollbar`}
      >
        {localeData.map((item, id) => (
          <p
            key={id}
            onClick={() => setLocale(item.code)}
            value={item.code}
            className="p-5 z-0 relative"
          >
            {item.name}
          </p>
        ))}
      </div>
    </button>
  );
}
