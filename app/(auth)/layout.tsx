import React,{FC,ReactNode} from 'react';

interface IAuthLayoutProps {
    children: ReactNode
}

const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
    return (
        <div>
            <nav className='bg-red-600 text-white'>This is auth navbar</nav>
            {children}
        </div>
    )
};

export default AuthLayout