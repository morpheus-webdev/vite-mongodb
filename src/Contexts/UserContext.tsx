//TODO cuccok

import { createContext, ReactNode, useState } from 'react';
import { defaultUserSession, IUserSession } from '../util';

interface IUserContext {
	userInfo: IUserSession;
	userLogin: () => void;
	userLogout: () => void;
	changeUserInfo: () => void;
}

const defaultUserContext: IUserContext = {
	userInfo: defaultUserSession,
	userLogin: () => {},
	userLogout: () => {},
	changeUserInfo: () => {},
};

export const UserContext = createContext<IUserContext>(defaultUserContext);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [userInfo, setUserInfo] = useState<IUserSession>(defaultUserSession);
	function userLogin() {
		//TODO userLogin
	}
	function userLogout() {
		//TODO userLogout
	}
	function changeUserInfo() {
		//TODO changeUserInfo
	}
	return (
		<UserContext.Provider
			value={{ userInfo, userLogin, userLogout, changeUserInfo }}>
			{children}
		</UserContext.Provider>
	);
};
//export provider
