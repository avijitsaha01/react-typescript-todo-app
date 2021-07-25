import React from 'react';

interface HeaderProps {
    title?: string;
}
const Header = ({title = 'React - Typescript Todo List'}: HeaderProps) => {
    return (
        <div>
            <h2 style={{marginBottom: '30px'}}>{title}</h2>
        </div>
    );
};

export default Header;