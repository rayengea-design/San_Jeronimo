import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, index) => (
                <div 
                    key={index} 
                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                >
                    <button 
                        className="accordion-header" 
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={activeIndex === index}
                    >
                        <h3>{item.question}</h3>
                        <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    <div className="accordion-content">
                        <div className="accordion-inner">
                            {item.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
