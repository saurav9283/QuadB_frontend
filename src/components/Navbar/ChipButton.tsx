import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';

type chipButtonProps = {
    text: string;
    onClick: () => void;
    icon: boolean;
}

const ChipButton = ({ text, onClick, icon }: chipButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [listItems, setListItems] = useState<string[]>([]);

    const handleButtonClick = () => {
        setIsOpen(!isOpen); 
        if (text === 'INR') {
            setListItems(['INR 1']);
        } else if (text === 'BTC') {
            setListItems(['Btcinr', 'Xrpinr', 'Ethinr','Trxinr','Eosinr','Zilinr','Batinr','Zrxinr','Reqinr','Nulsinr']); 
        }
    };

    return (
        <div
            style={{
                position: 'relative',
                padding: '6px 20px',
                backgroundColor: '#2e3241',
                color: '#fff',
                width: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
            }}
            onClick={handleButtonClick}
        >
            {text} {icon && <ArrowDropDownIcon />}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#fff',
                        color: '#000',
                        width: '80px',
                        borderRadius: '5px',
                        padding: '4px',
                        zIndex: 1,
                        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                    }}
                >
                    {listItems.map((item, index) => (
                        <p key={index} style={{marginLeft:'10px', marginTop:'-3px',cursor:'pointer',transition: 'color 0.3s',color: '#000',}}>{item}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChipButton;
