import  { useState } from 'react'

export default function SelectOne() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Navana Furniture");

    const options = [
        "Navana Furniture",
        "RFL Furniture",
        "Gazi Furniture",
        "Plastic Furniture",
        "Luxury Furniture",
        ];
    
        const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        };

  return (
    <div className={`nice-select bg-white dark:bg-dark outline-select small-select ${isOpen ? 'open' : ''}`}  onClick={() => setIsOpen(!isOpen)}><span className="current">{selectedOption}</span>
        <ul className="list">
            {options.map((item,index)=>{
                return(
                    <li data-value="1" className="option" onClick={() => handleSelect(item)} key={index}>{item}</li>
                )
            })}
        </ul>
    </div>
  )
}
