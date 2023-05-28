import { createUseStyles } from 'react-jss'
import { globalThemeInterface } from '../../jssAppTheme/jssAppTheme'

export const useSpaceStyle = createUseStyles((theme: globalThemeInterface) => ({
	gapBetween: ({ size }: { size: string }) => {
		switch (size) {
			case 'small':
				return { gap: '1rem' }
			case 'medium':
				return { gap: '1.5rem' }
			case 'large':
				return { gap: '2rem' }
			default:
				return { gap: size }
		}
	},
}))

export default useSpaceStyle
