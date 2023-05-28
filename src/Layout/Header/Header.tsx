import clsx from 'clsx'
import PropTypes from 'prop-types'
import { ReactNode } from 'react'
// import { HamburgerMenuIcon } from '../../assets/svg'

import Logo from '../../assets/images/logo.png'
import MyAvatar from '../../assets/images/my-avatar.jpg'
import useHeaderStyle from './HeaderStyle'
import { SettingIcon } from '../../assets/svgs'


const defaultProps = {
	customize: false,
}
type HeaderProps = {
	children?: ReactNode
	className?: string
} & typeof defaultProps

function Header({
	customize = false,
	children,
	className,
}: HeaderProps) {
	const { header, avatar, rightContent, username, settingButton,logo } = useHeaderStyle()

	return (
		<header className={clsx(header, className)}>
			{customize && children}
			<a href='/'>
				<img src={Logo} alt='' className={logo}/>
			</a>
			<div className={rightContent} >
				<p className={username}>User Name</p>
				<img className={avatar} src={MyAvatar} alt='' />
				<button type='button' className={settingButton} >
					<SettingIcon />
				</button>
			</div>
		</header>
	)
}

Header.defaultProps = defaultProps
Header.propTypes = {
	customize: PropTypes.bool,
	theme: PropTypes.string,
}
export default Header
