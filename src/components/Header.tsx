import React from 'react';

interface HeaderProps {
    title?: string;
}
const Header = ({title = 'Typescript Todo List'}: HeaderProps) => {
    return (
        <div>
            <h2 style={{marginBottom: '30px'}}>{title}</h2>
        </div>
    );
};

export default Header;